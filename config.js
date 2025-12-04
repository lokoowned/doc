// ⚙️ Arquivo de Configuração - DarkLegion Guild
// Atualize estas variáveis conforme necessário

window.DLConfig = {
  // ==================== DISCORD ====================
  // Total de membros no servidor Discord (atualizar manualmente)
  discord_total_members: 1003,
  
  // ID do servidor Discord
  discord_server_id: '767946841027248129',
  
  // Link de convite do Discord
  discord_invite_url: 'https://discord.gg/8xf4z9aEy3',
  
  // ==================== SERVIDOR DE JOGO ====================
  // Ativa/desativa o widget do servidor (true = mostrar, false = ocultar)
  server_widget_enabled: true,
  
  // Nome do servidor
  server_name: 'RF OldTimes - ',
  
  // Raça da guild (Bellato, Cora ou Accretia)
  // Sons e vídeos reproduzidos ao abrir shadowbox do servidor:
  // - Bellato = sounds/bcc.wav + efeitos_vfx/bell_transition.webm
  // - Cora = sounds/ccc.wav + efeitos_vfx/ccc_transition.webm
  // - Accretia = sounds/acc.wav + efeitos_vfx/acc_transition.webm
  server_guild_race: 'Bellato',
  
  // ID da planilha do Google Sheets
  // URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
  server_spreadsheet_id: '1Ec36uex38hYjnU17lU95APtorOQKmEID7U3DIy376kU',
  
  // Intervalo de atualização em segundos (padrão: 60 segundos)
  server_update_interval: 60,
  
  // ==================== CONTAGEM REGRESSIVA ====================
  // Ativa/desativa o widget de contagem regressiva (true = mostrar, false = ocultar)
  timer_objective: true,
  
  // Data do objetivo (formato: ano/mês/dia) - Ex: '2025/12/25' para 25 de dezembro de 2025
  date_objective: '2025/12/04',
  
  // Horário do objetivo (formato: HH:MM, horário de Brasília)
  time_objective: '20:10',
  
  // Texto descritivo do objetivo
  text_objective: 'Reunião 1 - OldTimes'
};

// script pwa > site em app
// send notification by pwa