/**
 * Configuração - Quest List Module
 * 
 * Centralize todas as configurações importantes do módulo de Quest List
 * para facilitar manutenção futura.
 */

const QUEST_LIST_CONFIG = {
  // Planilha Google Sheets
  SPREADSHEET_ID: '1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM',
  TAB_NAME: 'QuestList',
  
  // URLs de recursos
  MAP_BASE_URL: 'https://www.darklegionrf.com/docimages/maps/',
  MOB_ICON_URL: 'https://www.darklegionrf.com/docimages/maps/mob.png',
  
  // Cache
  CACHE_DURATION_MS: 5 * 60 * 1000, // 5 minutos
  
  // Formato da planilha (colunas esperadas)
  COLUMNS: {
    QUEST_NUMBER: 0,    // Coluna A - Número da quest
    NAME: 1,            // Coluna B - Nome da quest
    MAP: 2,             // Coluna C - Nome do mapa
    COORDINATES: 3      // Coluna D - Coordenadas (x,y ou múltiplas separadas por ;)
  },
  
  // Configurações visuais
  UI: {
    TOOLTIP_MAX_WIDTH: '600px',
    MARKER_SIZE: '12px',         // Tamanho do ícone do mob (metade do original: 24px → 12px)
    ANIMATION_DURATION: '2.5s',  // Duração da animação de pulse (mais lento = mais suave)
    MARKER_PULSE_SCALE: 1.08,    // Escala do pulse (1.08 = 8% maior, 1.0 = sem pulse)
    MAP_OVERLAY_DARKNESS: 0.4    // Escuridão do overlay (0.0 = sem escuridão, 1.0 = preto total)
  },
  
  // Mensagens de feedback
  MESSAGES: {
    LOADING: '⏳ Carregando quests...',
    NO_QUESTS: 'Nenhuma quest encontrada.',
    ERROR: '❌ Erro ao carregar quests. Tente novamente mais tarde.',
    SUCCESS: '✅ Quests carregadas com sucesso!'
  }
};

// Exporta para uso global
if (typeof window !== 'undefined') {
  window.QUEST_LIST_CONFIG = QUEST_LIST_CONFIG;
}

console.log('✅ Configurações da Quest List carregadas');
