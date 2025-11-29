![Banner da Guilda](../../imagens/jogando-atualmente.webp)

# 🎮 Jogando RF OldTimes

Nossa guilda atua em diversos servidores do jogo RF OldTimes, desde o Brasil até o Mundo, atualmente estamos no OldTimes, raça Bellato.

<h2>Links do servidor:</h2>
● <a href="https://linktr.ee/oldtimes" target="_blank" rel="noopener noreferrer">Agrupador de link's</a><br>
● <a href="https://rfoldtimes.rfocp.net/" target="_blank" rel="noopener noreferrer">GameCP</a><br>
● <a href="https://rfoldtimes.com.br/" target="_blank" rel="noopener noreferrer">Website</a><br>
● <a href="https://rf-old-times.gitbook.io/rfoldtimes/" target="_blank" rel="noopener noreferrer">GitBook</a><br>

Todas as informações sobre o servidor estão disponíveis no site e no gitbook do servidor, basta clicar no link acima.<br>
Quaisquer dúvidas, entre em contato conosco no discord, estamos sempre disponíveis para ajudar.

<br>
<h2>Datas importantes:</h2>
<style>
.countdowns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin: 24px 0 36px 0;
}
.countdown-item {
  background: #11283d;
  color: #fff;
  border-radius: 14px;
  box-shadow: 0 5px 20px #0ceeff0d;
  padding: 20px 24px;
  min-width: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  border: 2px solid #09ced833;
}
.countdown-title {
  font-size: 1.09em;
  font-weight: bold;
  margin-bottom: 14px;
  color: #1bfbe2;
  text-align: center;
}
.countdown-value {
  display: flex;
  gap: 12px;
  margin-bottom: 0;
}
.countdown-part {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 49px;
}
.countdown-number {
  font-size: 2.2em;
  font-weight: bold;
  color: #4ff;
  line-height: 1.1em;
  text-shadow: 0 0 10px #2ff8ffad;
}
.countdown-label {
  font-size: 0.93em;
  color: #aad2e6;
  margin-top: 3px;
  letter-spacing: 0.01em;
}
.countdown-ended {
  color: #f77676;
  font-weight: bold;
  font-size: 1.15em;
  margin-top: 4px;
}
@media (max-width: 750px) {
  .countdowns-container {
    flex-direction: column;
    gap: 20px;
  }
  .countdown-item {
    min-width: 195px;
    padding: 17px 10px;
  }
  .countdown-number {
    font-size: 1.35em;
  }
}
</style>
<div class="countdowns-container" id="countdowns-main">
  <div class="countdown-item">
    <div class="countdown-title">Reunião 1 da Guilda<br><span style="font-size:.87em;font-weight:400;color:#9cd6d1;">04/12/2025 - 19h DS</span></div>
    <div class="countdown-value" id="timer1">
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">dias</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">horas</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">min</span></div>
    </div>
    <div class="countdown-ended" id="ended1" style="display:none;">Evento já ocorreu</div>
  </div>

  <div class="countdown-item">
    <div class="countdown-title">Preparação & Organização<br><span style="font-size:.87em;font-weight:400;color:#9cd6d1;">05/12/2025 - 19h DS</span></div>
    <div class="countdown-value" id="timer2">
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">dias</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">horas</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">min</span></div>
    </div>
    <div class="countdown-ended" id="ended2" style="display:none;">Evento já ocorreu</div>
  </div>

  <div class="countdown-item">
    <div class="countdown-title">Início do Servidor<br><span style="font-size:.87em;font-weight:400;color:#9cd6d1;">05/12/2025 - 20h DS</span></div>
    <div class="countdown-value" id="timer3">
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">dias</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">horas</span></div>
      <div class="countdown-part"><span class="countdown-number">-</span><span class="countdown-label">min</span></div>
    </div>
    <div class="countdown-ended" id="ended3" style="display:none;">Evento já ocorreu</div>
  </div>
</div>

<script>
  // Configuração dos eventos usando a mesma lógica do seu código
  function getLocalDate(year, month, day, hour, minute) {
    // meses em JS: 0 = jan, 11 = dez
    return new Date(year, month - 1, day, hour, minute, 0, 0);
  }

  const EVENTS = [
    {
      date: getLocalDate(2024, 12, 4, 19, 0),
      timerId: "timer1",
      endedId: "ended1"
    },
    {
      date: getLocalDate(2024, 12, 5, 19, 0),
      timerId: "timer2",
      endedId: "ended2"
    },
    {
      date: getLocalDate(2024, 12, 5, 20, 0),
      timerId: "timer3",
      endedId: "ended3"
    }
  ];

  function pad2(num) {
    return num < 10 ? "0" + num : "" + num;
  }

  function updateCountdowns() {
    const now = new Date();

    EVENTS.forEach(evt => {
      const timerDiv = document.getElementById(evt.timerId);
      const endedDiv = document.getElementById(evt.endedId);
      if (!timerDiv || !endedDiv) return;

      const diff = evt.date.getTime() - now.getTime();

      if (diff <= 0) {
        // já passou
        timerDiv.style.display = 'none';
        endedDiv.style.display = '';
      } else {
        endedDiv.style.display = 'none';
        timerDiv.style.display = 'flex';

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        const numbers = timerDiv.querySelectorAll('.countdown-number');
        if (numbers.length >= 3) {
          numbers[0].textContent = pad2(days);
          numbers[1].textContent = pad2(hours);
          numbers[2].textContent = pad2(minutes);
        }
      }
    });
  }

  function startCountdowns() {
    updateCountdowns();
    // Atualiza a cada 1 minuto
    setInterval(updateCountdowns, 60000);
  }

  // 🔹 Funciona tanto em HTML normal quanto no Docsify
  if (document.readyState === 'loading') {
    // HTML clássico: esperamos o DOM terminar de carregar
    document.addEventListener('DOMContentLoaded', startCountdowns);
  } else {
    // Docsify: o script normalmente roda depois do DOM já estar pronto
    startCountdowns();
  }
</script>

