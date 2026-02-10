/**
 * Quest List Loader - Google Sheets Integration
 * 
 * Carrega dados de quests de uma planilha pública do Google Sheets
 * e renderiza com mapa interativo e tooltip.
 * 
 * Configuração da Planilha:
 * - Spreadsheet ID: 1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM
 * - Tab: QuestList
 * - Colunas:
 *   A: Numero da quest (agrupa quests com mesmo número)
 *   B: Nome da quest
 *   C: Mapa
 *   D: Coordenadas (formato: x,y ou múltiplas separadas por ponto-e-vírgula)
 */

class QuestListLoader {
  constructor(config) {
    // Usa configurações do arquivo config ou valores padrão
    const cfg = config || window.QUEST_LIST_CONFIG || {};
    
    this.spreadsheetId = cfg.SPREADSHEET_ID || '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM';
    this.tabName = cfg.TAB_NAME || 'QuestList';
    this.cache = null;
    this.cacheTime = null;
    this.cacheDuration = cfg.CACHE_DURATION_MS || (5 * 60 * 1000);
    this.mapBaseUrl = cfg.MAP_BASE_URL || 'https://www.darklegionrf.com/docimages/maps/';
    this.mobIconUrl = cfg.MOB_ICON_URL || 'https://www.darklegionrf.com/docimages/maps/mob.png';
    this.messages = cfg.MESSAGES || {
      LOADING: '⏳ Carregando quests...',
      NO_QUESTS: 'Nenhuma quest encontrada.',
      ERROR: '❌ Erro ao carregar quests. Tente novamente mais tarde.'
    };
  }

  /**
   * Constrói a URL da API do Google Sheets
   */
  getSheetUrl() {
    const baseUrl = 'https://docs.google.com/spreadsheets/d';
    return `${baseUrl}/${this.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(this.tabName)}`;
  }

  /**
   * Busca os dados da planilha
   */
  async fetchSheetData() {
    try {
      const url = this.getSheetUrl();
      console.log('📊 Carregando quests do Google Sheets:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }
      
      const csvText = await response.text();
      console.log('✅ Dados de quests carregados com sucesso');
      
      return csvText;
    } catch (error) {
      console.error('❌ Erro ao buscar dados da planilha de quests:', error);
      throw error;
    }
  }

  /**
   * Parseia o CSV retornado pelo Google Sheets
   */
  parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim());
    
    // Agrupa quests por número (pode ter múltiplos mapas)
    const questsMap = new Map();
    
    lines.forEach((line, index) => {
      const values = this.parseCSVLine(line);
      
      const questNumber = values[0] ? values[0].trim() : '';
      const nome = values[1] ? values[1].trim() : '';
      const mapa = values[2] ? values[2].trim() : '';
      const coordenadas = values[3] ? values[3].trim() : '';
      
      // Ignora linhas vazias
      if (!questNumber || !nome) return;
      
      // Se já existe quest com este número, adiciona novo mapa
      if (questsMap.has(questNumber)) {
        const quest = questsMap.get(questNumber);
        
        // Verifica se já existe este mapa
        const existingMap = quest.mapas.find(m => m.nome === mapa);
        
        if (existingMap) {
          // Adiciona coordenadas ao mapa existente
          if (coordenadas) {
            existingMap.coordenadas.push(coordenadas);
          }
        } else {
          // Adiciona novo mapa
          quest.mapas.push({
            nome: mapa,
            coordenadas: coordenadas ? [coordenadas] : []
          });
        }
      } else {
        // Cria nova quest com array de mapas
        questsMap.set(questNumber, {
          numero: questNumber,
          nome,
          mapas: [{
            nome: mapa,
            coordenadas: coordenadas ? [coordenadas] : []
          }]
        });
      }
    });
    
    const quests = Array.from(questsMap.values());
    console.log(`✅ ${quests.length} quests parseadas da planilha`);
    
    // Log de quests com múltiplos mapas
    const multiMapQuests = quests.filter(q => q.mapas.length > 1);
    if (multiMapQuests.length > 0) {
      console.log(`📍 ${multiMapQuests.length} quest(s) com múltiplos mapas:`, 
                  multiMapQuests.map(q => `${q.nome} (${q.mapas.length} mapas)`));
    }
    
    return quests;
  }

  /**
   * Parseia uma linha CSV considerando aspas
   */
  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    
    result.push(current);
    return result;
  }

  /**
   * Carrega as quests (com cache)
   */
  async loadQuests() {
    // Verifica cache
    if (this.cache && this.cacheTime && (Date.now() - this.cacheTime < this.cacheDuration)) {
      console.log('📦 Usando dados de quests em cache');
      return this.cache;
    }
    
    try {
      const csvText = await this.fetchSheetData();
      const quests = this.parseCSV(csvText);
      
      // Atualiza cache
      this.cache = quests;
      this.cacheTime = Date.now();
      
      return quests;
    } catch (error) {
      console.error('❌ Erro ao carregar quests:', error);
      
      if (this.cache) {
        console.warn('⚠️ Usando cache antigo de quests como fallback');
        return this.cache;
      }
      
      throw error;
    }
  }

  /**
   * Renderiza a lista de quests no elemento especificado
   */
  async renderQuestList(elementId) {
    try {
      const container = document.getElementById(elementId);
      if (!container) {
        console.error(`❌ Elemento #${elementId} não encontrado`);
        return;
      }
      
      container.innerHTML = `<p style="text-align:center;">${this.messages.LOADING}</p>`;
      
      const quests = await this.loadQuests();
      
      if (quests.length === 0) {
        container.innerHTML = `<p style="text-align:center;">${this.messages.NO_QUESTS}</p>`;
        return;
      }
      
      // Salva quests para filtro
      this.allQuests = quests;
      
      // Cria HTML com filtro
      let html = `
        <div class="quest-filter-container">
          <input 
            type="text" 
            id="quest-filter-input" 
            class="quest-filter-input" 
            placeholder="🔍 Filtrar por nome da quest..."
            onkeyup="window.QuestListLoader.filterQuests(this.value)">
          <span id="quest-count" class="quest-count">${quests.length} quest(s)</span>
        </div>
      `;
      
      // Container com scroll (altura fixa para ~4 itens)
      html += '<div id="quest-list-items" class="quest-list-container quest-list-scrollable">';
      html += this.renderQuestItems(quests);
      html += '</div>';
      
      html += '<p class="quest-list-hint">💡 <strong>Clique na lupa 🔍</strong> para ver detalhes e mapas</p>';
      
      container.innerHTML = html;
      console.log(`✅ Lista de ${quests.length} quests renderizada com sucesso`);
      
    } catch (error) {
      console.error('❌ Erro ao renderizar quests:', error);
      const container = document.getElementById(elementId);
      if (container) {
        container.innerHTML = `<p style="color:red;">${this.messages.ERROR}</p>`;
      }
    }
  }

  /**
   * Renderiza os itens de quest (reutilizável para filtro)
   */
  renderQuestItems(quests) {
    if (quests.length === 0) {
      return '<p style="text-align:center; color:#888; padding:20px;">Nenhuma quest encontrada com esse filtro.</p>';
    }
    
    let html = '';
    quests.forEach((quest, index) => {
      // Monta string de mapas para exibir
      const mapasNomes = quest.mapas.map(m => m.nome).join(', ');
      const multiMapIcon = quest.mapas.length > 1 ? '🗺️' : '📍';
      
      // Serializa dados para passar ao click
      const questDataJson = JSON.stringify(quest).replace(/"/g, '&quot;');
      
      html += `
        <div class="quest-item" data-quest-name="${quest.nome.toLowerCase()}">
          <div class="quest-info">
            <span class="quest-name">${quest.nome}</span>
            <span class="quest-map">${multiMapIcon} ${mapasNomes}</span>
            ${quest.mapas.length > 1 ? '<span class="quest-multi-badge">' + quest.mapas.length + ' mapas</span>' : ''}
          </div>
          <div class="quest-lupa" 
               data-quest='${questDataJson}'
               onclick="window.QuestListLoader.openQuestModal(this)">
            🔍
          </div>
        </div>
      `;
    });
    
    return html;
  }

  /**
   * Filtra quests por nome
   */
  filterQuests(searchTerm) {
    if (!this.allQuests) return;
    
    const term = searchTerm.toLowerCase().trim();
    const filtered = term 
      ? this.allQuests.filter(q => q.nome.toLowerCase().includes(term))
      : this.allQuests;
    
    const listContainer = document.getElementById('quest-list-items');
    const countElement = document.getElementById('quest-count');
    
    if (listContainer) {
      listContainer.innerHTML = this.renderQuestItems(filtered);
    }
    
    if (countElement) {
      countElement.textContent = `${filtered.length} quest(s)`;
    }
  }

  /**
   * Abre modal com informações da quest e mapas
   */
  openQuestModal(element) {
    const questData = JSON.parse(element.getAttribute('data-quest'));
    
    console.log('🔍 Abrindo modal para quest:', questData);
    
    // Cria ou pega modal
    let modal = document.getElementById('quest-modal');
    if (!modal) {
      modal = this.createQuestModal();
    }
    
    // Popula modal com dados da quest
    const modalTitle = modal.querySelector('.quest-modal-title');
    const modalContent = modal.querySelector('.quest-modal-maps');
    
    modalTitle.textContent = questData.nome;
    
    // Renderiza mapas
    let mapsHtml = '';
    questData.mapas.forEach((mapa, mapIndex) => {
      const mapUrl = `${this.mapBaseUrl}${mapa.nome}.png`;
      const totalCoords = mapa.coordenadas.reduce((sum, coordStr) => {
        return sum + coordStr.split(';').length;
      }, 0);
      
      mapsHtml += `
        <div class="quest-modal-map-section">
          <h3 class="quest-modal-map-title">
            📍 Mapa: ${mapa.nome}
            <span class="quest-modal-coords-count">${totalCoords} local(is)</span>
          </h3>
          <div class="quest-modal-map-container" id="modal-map-${mapIndex}">
            <img src="${mapUrl}" 
                 alt="${mapa.nome}" 
                 class="quest-modal-map-img"
                 onerror="window.QuestListLoader.handleMapImageError(this, ${mapIndex}, '${mapa.nome}')">
            <div class="quest-modal-markers" id="modal-markers-${mapIndex}"></div>
          </div>
        </div>
      `;
    });
    
    modalContent.innerHTML = mapsHtml;
    
    // Mostra modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Previne scroll da página
    
    // Aguarda renderização e plota marcadores
    setTimeout(() => {
      questData.mapas.forEach((mapa, mapIndex) => {
        this.plotMapMarkers(mapIndex, mapa.coordenadas);
      });
    }, 100);
  }

  /**
   * Cria estrutura da modal
   */
  createQuestModal() {
    const modal = document.createElement('div');
    modal.id = 'quest-modal';
    modal.className = 'quest-modal';
    modal.innerHTML = `
      <div class="quest-modal-overlay" onclick="window.QuestListLoader.closeQuestModal()"></div>
      <div class="quest-modal-content">
        <div class="quest-modal-header">
          <h2 class="quest-modal-title">Quest</h2>
          <button class="quest-modal-close" onclick="window.QuestListLoader.closeQuestModal()">✕</button>
        </div>
        <div class="quest-modal-body">
          <div class="quest-modal-maps"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Adiciona listener para tecla ESC (apenas uma vez)
    if (!this.escListenerAdded) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const modal = document.getElementById('quest-modal');
          if (modal && modal.style.display === 'flex') {
            this.closeQuestModal();
          }
        }
      });
      this.escListenerAdded = true;
    }
    
    return modal;
  }

  /**
   * Trata erro ao carregar imagem do mapa
   */
  handleMapImageError(imgElement, mapIndex, mapName) {
    console.warn(`⚠️ Imagem do mapa "${mapName}" não encontrada. Mostrando apenas texto.`);
    
    const container = imgElement.parentElement;
    
    // Verifica se já foi tratado (evita duplicação)
    if (container.classList.contains('no-image')) {
      return;
    }
    
    // Remove a imagem
    imgElement.style.display = 'none';
    
    // Cria placeholder de texto
    const placeholder = document.createElement('div');
    placeholder.className = 'quest-modal-map-placeholder';
    placeholder.innerHTML = `
      <div class="map-placeholder-content">
        <span class="map-placeholder-icon">🗺️</span>
        <p class="map-placeholder-title">Mapa: ${mapName}</p>
        <p class="map-placeholder-subtitle">Imagem não disponível</p>
      </div>
    `;
    
    // Insere placeholder antes dos marcadores
    const markersContainer = document.getElementById(`modal-markers-${mapIndex}`);
    container.insertBefore(placeholder, markersContainer);
    
    // Marca como tratado e remove overlay
    container.classList.add('no-image');
  }

  /**
   * Plota marcadores em um mapa específico da modal
   */
  plotMapMarkers(mapIndex, coordenadasArray) {
    const mapImg = document.querySelector(`#modal-map-${mapIndex} img`);
    const markersContainer = document.getElementById(`modal-markers-${mapIndex}`);
    
    if (!mapImg || !markersContainer) return;
    
    const plotMarkers = () => {
      // Ajusta container de marcadores
      markersContainer.style.width = `${mapImg.offsetWidth}px`;
      markersContainer.style.height = `${mapImg.offsetHeight}px`;
      
      // Limpa marcadores anteriores
      markersContainer.innerHTML = '';
      
      let markerCount = 0;
      coordenadasArray.forEach(coordsStr => {
        const coordsList = coordsStr.split(';');
        coordsList.forEach(coords => {
          const parts = coords.split(',').map(c => c.trim());
          const x = parseFloat(parts[0]);
          const y = parseFloat(parts[1]);
          
          if (!isNaN(x) && !isNaN(y)) {
            const marker = document.createElement('img');
            marker.src = this.mobIconUrl;
            marker.className = 'quest-mob-marker';
            marker.style.left = `${x}px`;
            marker.style.top = `${y}px`;
            marker.title = `Local ${markerCount + 1}: (${x}, ${y})`;
            markersContainer.appendChild(marker);
            markerCount++;
          }
        });
      });
      
      console.log(`  ✅ Mapa ${mapIndex + 1}: ${markerCount} marcador(es) plotados`);
    };
    
    if (mapImg.complete) {
      plotMarkers();
    } else {
      mapImg.onload = plotMarkers;
    }
  }

  /**
   * Fecha modal
   */
  closeQuestModal() {
    const modal = document.getElementById('quest-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restaura scroll da página
    }
  }

  /**
   * Limpa o cache
   */
  clearCache() {
    this.cache = null;
    this.cacheTime = null;
    console.log('🗑️ Cache de quests limpo');
  }
}

// Aguarda carregar configurações ou usa valores padrão
if (typeof window !== 'undefined') {
  // Exporta instância configurada
  window.QuestListLoader = new QuestListLoader(window.QUEST_LIST_CONFIG);
  console.log('✅ Quest List Loader inicializado');
}
