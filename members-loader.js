/**
 * Members Loader - Google Sheets Integration
 * 
 * Carrega dados dos membros diretamente de uma planilha pública do Google Sheets
 * e converte para o formato esperado pela aplicação.
 * 
 * Configuração da Planilha:
 * - Spreadsheet ID: 16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos
 * - Tab: ListaMembros
 * - Colunas:
 *   A: Member Name (Nickname)
 *   B: Join date (Data de Entrada)
 *   C: Member rank (Status: Member, Officer, Fundador)
 *   D: Server (Servidor)
 *   E: Medals (Medalhas separadas por vírgula)
 *   F: Active state (FALSE/TRUE - invertido para "inativo")
 */

class MembersLoader {
  constructor(spreadsheetId, tabName) {
    this.spreadsheetId = spreadsheetId;
    this.tabName = tabName;
    this.cache = null;
    this.cacheTime = null;
    this.cacheDuration = 5 * 60 * 1000; // 5 minutos em cache
  }

  /**
   * Constrói a URL da API do Google Sheets
   * @returns {string} URL completa para buscar os dados
   */
  getSheetUrl() {
    const baseUrl = 'https://docs.google.com/spreadsheets/d';
    return `${baseUrl}/${this.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(this.tabName)}`;
  }

  /**
   * Busca os dados da planilha
   * @returns {Promise<string>} Conteúdo CSV da planilha
   */
  async fetchSheetData() {
    try {
      const url = this.getSheetUrl();
      console.log('📊 Carregando membros do Google Sheets:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }
      
      const csvText = await response.text();
      console.log('✅ Dados carregados com sucesso da planilha');
      
      return csvText;
    } catch (error) {
      console.error('❌ Erro ao buscar dados da planilha:', error);
      throw error;
    }
  }

  /**
   * Parseia o CSV retornado pelo Google Sheets
   * @param {string} csvText - Texto CSV
   * @returns {Array<Object>} Array de objetos com dados dos membros
   */
  parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim());
    
    // A planilha NÃO tem cabeçalho, todas as linhas são dados
    const dataLines = lines;
    
    const members = dataLines.map((line, index) => {
      // Parse CSV considerando aspas
      const values = this.parseCSVLine(line);
      
      // Extrai valores das colunas conforme especificado
      const nickname = values[0] ? values[0].trim() : '';
      const entrada = values[1] ? values[1].trim() : '';
      const status = values[2] ? values[2].trim() : 'Member';
      const servidor = values[3] ? values[3].trim() : '';
      
      // A coluna E pode conter medalhas OU o active state
      // A coluna F contém o active state (se E tiver medalhas)
      let medalsRaw = '';
      let activeState = 'TRUE';
      
      // Verifica se a coluna 4 (índice 4) é TRUE/FALSE
      const col4Value = values[4] ? values[4].trim().toUpperCase() : '';
      
      if (col4Value === 'TRUE' || col4Value === 'FALSE') {
        // Coluna E é o active state (não há medalhas)
        medalsRaw = '';
        activeState = col4Value;
      } else {
        // Coluna E contém medalhas
        medalsRaw = col4Value;
        // Coluna F contém o active state
        activeState = values[5] ? values[5].trim().toUpperCase() : 'TRUE';
      }
      
      // Processa medalhas (separadas por vírgula)
      const medals = medalsRaw
        .split(',')
        .map(m => m.trim())
        .filter(Boolean);
      
      // Inverte a lógica: Active state FALSE = inativo TRUE
      const inativo = activeState === 'FALSE';
      
      return {
        nickname,
        entrada,
        status,
        servidor,
        medals,
        inativo
      };
    }).filter(member => member.nickname); // Remove linhas vazias
    
    console.log(`✅ ${members.length} membros parseados da planilha`);
    return members;
  }

  /**
   * Parseia uma linha CSV considerando aspas
   * @param {string} line - Linha do CSV
   * @returns {Array<string>} Array com os valores
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
          // Aspas duplas escapadas
          current += '"';
          i++; // Pula o próximo caractere
        } else {
          // Alterna o estado de aspas
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        // Fim do campo
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    
    // Adiciona o último campo
    result.push(current);
    
    return result;
  }

  /**
   * Carrega os membros (com cache)
   * @returns {Promise<Array<Object>>} Array de membros
   */
  async loadMembers() {
    // Verifica cache
    if (this.cache && this.cacheTime && (Date.now() - this.cacheTime < this.cacheDuration)) {
      console.log('📦 Usando dados em cache');
      return this.cache;
    }
    
    try {
      const csvText = await this.fetchSheetData();
      const members = this.parseCSV(csvText);
      
      // Atualiza cache
      this.cache = members;
      this.cacheTime = Date.now();
      
      return members;
    } catch (error) {
      console.error('❌ Erro ao carregar membros:', error);
      
      // Se houver cache antigo, usa ele como fallback
      if (this.cache) {
        console.warn('⚠️ Usando cache antigo como fallback');
        return this.cache;
      }
      
      throw error;
    }
  }

  /**
   * Limpa o cache
   */
  clearCache() {
    this.cache = null;
    this.cacheTime = null;
    console.log('🗑️ Cache limpo');
  }
}

// Exporta instância configurada
window.MembersLoader = new MembersLoader(
  '16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos',
  'ListaMembros'
);

console.log('✅ Members Loader inicializado');
