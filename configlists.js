// ⚙️ Arquivo de Configuração de Listas - DarkLegion Guild
// Sistema escalável para integração com Google Sheets
// Para adicionar uma nova lista, basta adicionar uma configuração aqui

window.DLLists = {
  // ==================== LISTA DE ITENS ====================
  items: {
    // ID da planilha do Google Sheets
    spreadsheetId: '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM',
    
    // Nome da aba/sheet dentro da planilha
    sheetName: 'item',
    
    // Seletor CSS do container na página (deve ter data-list-id="items")
    panelSelector: '.items-panel-sheets',
    
    // Mapeamento das colunas da planilha
    // index: posição da coluna (0 = A, 1 = B, etc)
    // label: nome amigável da coluna
    columns: {
      nome: { index: 0, label: 'Nome' },
      tipo: { index: 1, label: 'Tipo' },
      level: { index: 2, label: 'Level' },
      descricao: { index: 3, label: 'Utilidade' },
      localFarm: { index: 4, label: 'Local de Spawn' },
      mobtype: { index: 5, label: 'MobType' },
      imagem: { index: 6, label: 'Icone' },
      imagemPopup: { index: 7, label: 'Imagem Popup' },
      itemlist: { index: 8, label: 'ItemList' },
      imagemExtra: { index: 9, label: 'Imagem Extra' }
    },
    
    // Tipo de exibição: 'cards', 'table', 'list'image.png
    displayType: 'table',
    
    // Configuração de filtros
    filters: {
      // Filtro de busca por texto
      search: { 
        enabled: true, 
        fields: ['nome', 'tipo', 'descricao'],
        placeholder: 'Buscar item por nome, tipo ou descrição...'
      },
      
      // Filtro por tipo (checkboxes)
      type: { 
        enabled: true, 
        field: 'tipo',
        options: ['Arma', 'Armadura', 'Item Especial', 'Acessório']
      }
    },
    
    // Configuração de cache (localStorage)
    cache: {
      enabled: false, // Desabilitado para desenvolvimento - mudanças aparecem instantaneamente
      duration: 300000 // 5 minutos em ms
    },
    
    // Título e labels da interface
    ui: {
      title: 'Lista de Mobs e PBs',
      description: 'Explore e entenda todos os mobs e pbs do servidor',
      totalLabel: 'Total de mobs e pbs',
      visibleLabel: 'Mostrando',
      loadingText: 'Carregando mobs e pbs...',
      errorText: 'Erro ao carregar mobs e pbs. Tente novamente mais tarde.',
      emptyText: 'Nenhum mob ou pb encontrado com os filtros aplicados.'
    },
    
    // Função de transformação de dados (opcional)
    // Permite modificar os dados antes de renderizar
    transform: function(item) {
      return item;
    },
    
    // Função de renderização customizada para o display type 'cards' (opcional)
    // Se não fornecida, usa a renderização padrão
    renderCard: function(item) {
      return `
        ${item.imagem ? `
          <div class="item-card__image">
            <img src="${item.imagem}" alt="${item.nome}" onerror="this.style.display='none'">
          </div>
        ` : '<div class="item-card__image item-card__image--placeholder"></div>'}
        <div class="item-card__name">${item.nome}</div>
        <div class="item-card__type">${item.tipo}</div>
        <div class="item-card__level">${item.level}</div>
      `;
    },
    
    // Função de renderização do modal de detalhes (opcional)
    renderDetails: function(item) {
      const imagemMain = item.imagemPopup || item.imagem; // imagem principal (H ou G)
      const imageUrls = imagemMain ? imagemMain.split(',').map(url => url.trim()).filter(url => url) : [];
      const hasMultipleImages = imageUrls.length > 1;
      
      return `
        <div class="item-detail-modal__header">${item.nome}</div>
        <div class="item-detail-modal__layout">
          ${imageUrls.length > 0 ? `
            <div class="item-detail-modal__image-section">
              <div class="item-detail-modal__image-container" data-current-image="0" data-image-group="main">
                ${hasMultipleImages ? `
                  <button class="item-detail-modal__image-nav item-detail-modal__image-nav--prev" onclick="window.DLModalImageNav('prev', 'main')">‹</button>
                  <button class="item-detail-modal__image-nav item-detail-modal__image-nav--next" onclick="window.DLModalImageNav('next', 'main')">›</button>
                ` : ''}
                <img src="${imageUrls[0]}" alt="${item.nome}" class="item-detail-modal__image" onerror="this.style.display='none'" style="max-width: 100%; max-height: 400px; object-fit: contain;">
                ${hasMultipleImages ? `
                  <div class="item-detail-modal__image-counter">
                    <span class="current-image-index">1</span> / ${imageUrls.length}
                  </div>
                ` : ''}
              </div>
              <div style="display: none;" class="image-urls-data" data-image-urls="main">${imageUrls.join('|||')}</div>
            </div>
          ` : ''}
          <div class="item-detail-modal__content-section">
            <div class="item-detail-modal__content">
              <div class="item-detail-modal__row">
                <span class="item-detail-modal__label">Tipo:</span>
                <span class="item-detail-modal__value">${item.tipo}</span>
              </div>
              <div class="item-detail-modal__row">
                <span class="item-detail-modal__label">Level:</span>
                <span class="item-detail-modal__value">${item.level}</span>
              </div>
              <div class="item-detail-modal__row">
                <span class="item-detail-modal__label">Descrição:</span>
                <span class="item-detail-modal__value">${item.descricao}</span>
              </div>
              ${item.localFarm ? `
                <div class="item-detail-modal__row">
                  <span class="item-detail-modal__label">Local de Farm ou Droop:</span>
                  ${
                    item.imagemExtra && item.imagemExtra.trim()
                      ? `<span class="item-detail-modal__value localfarm-hover" data-image="${item.imagemExtra}">${item.localFarm} <span class="localfarm-icon">🖼️</span></span>`
                      : `<span class="item-detail-modal__value">${item.localFarm}</span>`
                  }
                </div>
              ` : ''}
            </div>
            <button class="item-detail-modal__close">Fechar</button>
          </div>
        </div>
        <div class="item-detail-modal__drops-placeholder" data-drops-placeholder="true"></div>
      `;
    }
  },
  
  // ==================== COMBINAÇÕES DO SERVIDOR ====================
  combines: {
    spreadsheetId: '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM',
    sheetName: 'Combines',
    panelSelector: '.combines-panel-sheets',
    columns: {
      imagem: { index: 0, label: 'Ícone' },
      nome: { index: 1, label: 'Nome' },
      tipoItem: { index: 2, label: 'Tipo de Item' },
      descricaoItem: { index: 3, label: 'Descrição do Item' },
      descricaoPopup: { index: 4, label: 'Descrição PopUp' },
      porcentagens: { index: 5, label: 'Porcentagens' },
      imagemPopup: { index: 6, label: 'PopUpImg' },
      itensAdicionados: { index: 7, label: 'Itens Adicionados' }
    },
    displayType: 'table',
    filters: {
      search: { 
        enabled: true, 
        fields: ['nome', 'tipoItem', 'descricaoItem', 'descricaoPopup'],
        placeholder: 'Buscar combinação por nome, tipo ou descrição...'
      }
    },
    cache: {
      enabled: false,
      duration: 300000
    },
    ui: {
      title: 'Combinações do Servidor',
      description: 'Tabela de combinações e porcentagens do servidor',
      totalLabel: 'Total de combinações',
      visibleLabel: 'Mostrando',
      loadingText: 'Carregando combinações...',
      errorText: 'Erro ao carregar combinações.',
      emptyText: 'Nenhuma combinação encontrada.'
    },
    transform: function(item) {
      if (item.porcentagens) {
        item.porcentagens = item.porcentagens
          .split(',')
          .map(p => p.trim())
          .filter(Boolean)
          .join('<br>');
      }
      if (item.descricaoPopup) {
        item.descricaoPopup = item.descricaoPopup
          .split(',')
          .map(p => p.trim())
          .filter(Boolean)
          .join('<br>');
      }
      return item;
    },
    renderDetails: function(item) {
      const imagemMain = item.imagemPopup;
      const imageUrls = imagemMain ? imagemMain.split(',').map(url => url.trim()).filter(url => url) : [];
      const hasMultipleImages = imageUrls.length > 1;
      
      return `
        <div class="item-detail-modal__header">
          ${item.nome}
          ${item.descricaoItem ? `
            <div class="item-detail-modal__subtitle">
              ${item.descricaoItem}
              <span class="combine-desc-info" data-desc="${item.descricaoItem.replace(/"/g, '&quot;')}">ℹ️</span>
            </div>
          ` : ''}
        </div>
        <div class="item-detail-modal__layout">
          ${imageUrls.length > 0 ? `
            <div class="item-detail-modal__image-section">
              <div class="item-detail-modal__image-container" data-current-image="0" data-image-group="main">
                ${hasMultipleImages ? `
                  <button class="item-detail-modal__image-nav item-detail-modal__image-nav--prev" onclick="window.DLModalImageNav('prev', 'main')">‹</button>
                  <button class="item-detail-modal__image-nav item-detail-modal__image-nav--next" onclick="window.DLModalImageNav('next', 'main')">›</button>
                ` : ''}
                <img src="${imageUrls[0]}" alt="${item.nome}" class="item-detail-modal__image" onerror="this.style.display='none'" style="max-width: 100%; max-height: 400px; object-fit: contain;">
                ${hasMultipleImages ? `
                  <div class="item-detail-modal__image-counter">
                    <span class="current-image-index">1</span> / ${imageUrls.length}
                  </div>
                ` : ''}
              </div>
              <div style="display: none;" class="image-urls-data" data-image-urls="main">${imageUrls.join('|||')}</div>
            </div>
          ` : ''}
          <div class="item-detail-modal__content-section">
            <div class="item-detail-modal__content">
              <div class="item-detail-modal__row">
                <span class="item-detail-modal__label">Tipo:</span>
                <span class="item-detail-modal__value">${item.tipoItem || '-'}</span>
              </div>
              ${item.descricaoItem ? `
                <div class="item-detail-modal__row">
                  <span class="item-detail-modal__label">Descrição do Item:</span>
                  <span class="item-detail-modal__value">${item.descricaoItem}</span>
                </div>
              ` : ''}
              ${item.descricaoPopup ? `
                <div class="item-detail-modal__row">
                  <span class="item-detail-modal__label">Descrição PopUp:</span>
                  <span class="item-detail-modal__value">${item.descricaoPopup}</span>
                </div>
              ` : ''}
              ${item.porcentagens ? `
                <div class="item-detail-modal__row">
                  <span class="item-detail-modal__label">Porcentagens:</span>
                  <span class="item-detail-modal__value">${item.porcentagens}</span>
                </div>
              ` : ''}
            </div>
            <button class="item-detail-modal__close">Fechar</button>
          </div>
        </div>
        <div class="item-detail-modal__drops-placeholder" data-drops-placeholder="true"></div>
      `;
    }
  },
  
  // ==================== LISTA DE ITENS (REFERÊNCIA PARA SHADOWBOX) ====================
  itemlist: {
    spreadsheetId: '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM',
    sheetName: 'ItemList',
    panelSelector: '.itemlist-panel-sheets', // Não será renderizado diretamente, apenas carregado para referência
    columns: {
      name: { index: 0, label: 'Item Name' },
      type: { index: 1, label: 'Item Type' },
      imageinfo: { index: 2, label: 'Image Info' },
      icon: { index: 3, label: 'Item Icon' },
      description: { index: 4, label: 'Item Description' }
    },
    displayType: 'reference', // Tipo especial que indica que é apenas para referência
    cache: {
      enabled: true,
      duration: 600000 // 10 minutos
    },
    ui: {
      loadingText: 'Carregando banco de dados de itens...',
      errorText: 'Erro ao carregar banco de dados de itens.'
    }
  }
  ,
  // ==================== LISTA DE TIPOS DE MOB (REFERÊNCIA) ====================
  mobtype: {
    spreadsheetId: '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM',
    sheetName: 'MobType',
    panelSelector: '.mobtype-panel-sheets', // Não será renderizado diretamente
    columns: {
      code: { index: 0, label: 'Code' },
      description: { index: 1, label: 'Description' },
      imageurl: { index: 2, label: 'Image URL' }
    },
    displayType: 'reference',
    cache: {
      enabled: true,
      duration: 600000
    },
    ui: {
      loadingText: 'Carregando tipos de mob...',
      errorText: 'Erro ao carregar tipos de mob.'
    }
  }
  
  // ==================== EXEMPLO: FUTURA LISTA DE BOSS ====================
  // Descomente e configure quando necessário
  /*
  boss: {
    spreadsheetId: 'OUTRA_PLANILHA_ID_AQUI',
    sheetName: 'boss',
    panelSelector: '.boss-panel-sheets',
    columns: {
      nome: { index: 0, label: 'Nome' },
      hp: { index: 1, label: 'HP' },
      level: { index: 2, label: 'Level' },
      localizacao: { index: 3, label: 'Localização' },
      drops: { index: 4, label: 'Drops' },
      imagem: { index: 5, label: 'Imagem' }
    },
    displayType: 'table',
    filters: {
      search: { 
        enabled: true, 
        fields: ['nome', 'localizacao'],
        placeholder: 'Buscar boss por nome ou localização...'
      }
    },
    cache: {
      enabled: true,
      duration: 600000 // 10 minutos
    },
    ui: {
      title: 'Lista de Boss',
      description: 'Todos os boss do servidor',
      totalLabel: 'Total de boss',
      visibleLabel: 'Mostrando',
      loadingText: 'Carregando boss...',
      errorText: 'Erro ao carregar boss.',
      emptyText: 'Nenhum boss encontrado.'
    }
  }
  */
};
