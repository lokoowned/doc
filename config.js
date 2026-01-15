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
  server_name: 'Default @ Fev 14/02/26',
  
  // Raça da guild (Bellato, Cora ou Accretia)
  // Sons e vídeos reproduzidos ao abrir shadowbox do servidor:
  // - Bellato = sounds/bcc.wav + efeitos_vfx/bell_transition.webm
  // - Cora = sounds/ccc.wav + efeitos_vfx/ccc_transition.webm
  // - Accretia = sounds/acc.wav + efeitos_vfx/acc_transition.webm
  server_guild_race: 'Ainda vai ser definido',
  
  // Texto exibido abaixo do nome do servidor (ex: "Provável 3k+ Online")
  server_online_summary: 'Provável 3k+ Offline',

  // Configuração de expiração para páginas do sidebar (formato: YYYY-MM-DD)
  // Exemplo: { path: '/reunioes/05-12-2025-pre-abertura-old-times.md', expires_at: '2025-12-05', note: 'Resumo da reunião pré-abertura' }

  // ==================== CONTAGEM REGRESSIVA ====================
  // Ativa/desativa o widget de contagem regressiva (true = mostrar, false = ocultar)
  timer_objective: true,
  
  // Data do objetivo (formato: ano/mês/dia) - Ex: '2025/12/25' para 25 de dezembro de 2025
  date_objective: '2025/12/05',
  
  // Horário do objetivo (formato: HH:MM, horário de Brasília)
  time_objective: '19:00',
  
  // Texto descritivo do objetivo
  text_objective: 'Organização pré abertura do servidor RF OldTimes'
};

// script pwa > site em app
// send notification by pwa