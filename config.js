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
  // Exemplo: { path: '/reunioes/default-organiza.md', expires_at: '2025-12-05', note: 'Resumo da organização pré-abertura' }
  page_expirations: [
    {
      path: '/reunioes/default-organiza.md',
      expires_at: '2025-12-05',
      note: 'Tópicos discutidos na organização pré-abertura'
    }
  ],

  // Texto oficial dos comandos que aparece no histórico da guilda
  comandos: 'Nefertari, Kektop, Brux4, TheoS, G5 e Nurse.',

  // Informações detalhadas dos comandos exibidas no ShadowBox da história
  comandos_info: '\n Kektop: Responsável pelo desenvolvimento e gestão de sistemas que envolvam tecnologia, gestão e organização. \n Brux4: Editor e gerador de conteúdos. \n TheoS: Gestão e organização. \n G5: Gestão e organização. \n Nurse: Gestão e organização. \n Nefertari: Responsável pelas mídias sociais da Guild.',

  // Medalhas de honra e descrições (usadas na lista de membros)
  honor_medals: [
    {
      code: 'default',
      name: 'Default 2026',
      icon: 'imagens/medalhas/default.png',
      image: 'imagens/medalhas/default.png',
      description: 'Condecoração exclusiva a jogadores que jogaram e foram firmes no servidor RF Default 2026.',
      weight: 100,
      created: '2026-01-17'
    },
    {
      code: 'retorno2025',
      name: 'O grande retorno!',
      icon: 'imagens/medalhas/retorno2025.png',
      image: 'imagens/medalhas/retorno2025.png',
      description: 'A guilda ficou inativa de janeiro de 2025 até dezembro de 2025, todos os jogadores que retornaram e amassaram o servidor Brasileiro conosco batendo uma impressioannte marca de 69 wins / 0 loses cw foram condecorados com esta medalha.',
      weight: 99,
      created: '2026-01-15'
    },
    {
      code: 'staff',
      name: 'Honra ao Comando',
      icon: 'imagens/medalhas/staff.png',
      image: 'imagens/medalhas/staff.png',
      description: 'Medalha de honra concedida a membros que fazem ou já fizeram parte da Staff da guilda.',
      weight: 998,
      created: '2026-01-15'
    },
    {
      code: 'patrocinadorwebsite1',
      name: 'Patrocinador website 2013',
      icon: 'imagens/medalhas/patrocinadorwebsite1.png',
      image: 'imagens/medalhas/patrocinadorwebsiteprint.png',
      description: 'Em 2013 chegamos ao final da nossa estadia no servidor Omicron, alguns dos jogadores que estavam lá doaram seus itens ao líder para que ele vendesse e levantasse um capital para criar o primeiro website da guilda.',
      weight: 997,
      created: '2026-01-15'
    },
    {
      code: 'fundador',
      name: 'O Fundador',
      icon: 'imagens/medalhas/patrocinadorwebsite1.png',
      image: 'imagens/medalhas/patrocinadorwebsiteprint.png',
      description: 'Medalha de honra concedida exclusivamente ao fundador da guilda.',
      weight: 997,
      created: '2026-01-15'
    }
  ],

  // ==================== CONTAGEM REGRESSIVA ====================
  // Ativa/desativa o widget de contagem regressiva (true = mostrar, false = ocultar)
  timer_objective: true,
  
  // Data do objetivo (formato: ano/mês/dia) - Ex: '2025/12/25' para 25 de dezembro de 2025
  date_objective: '2026/01/16',
  
  // Horário do objetivo (formato: HH:MM, horário de Brasília)
  time_objective: '22:36',
  
  // Texto descritivo do objetivo
  text_objective: 'Call entendimento Default',
  
  // Texto personalizado exibido no widget de contagem regressiva (aparece abaixo do horário)
  countdown_custom_text: 'Reuniremos todos os jogadores que já jogaram o Default no ano passado, para que a Staff possa entender melhor como funcionará o servidor. Também é livre a entrada de todos os membros para ouvirem e participarem da call.'
};

// script pwa > site em app
// send notification by pwa