<!-- Conteúdo do ShadowBox da Contagem Regressiva -->
<!-- Este arquivo é carregado automaticamente ao clicar no widget de contagem -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.mission-container {
  background: linear-gradient(180deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%);
  padding: 30px 20px;
  border-radius: 12px;
  border: 2px solid #330000;
  box-shadow: 
    inset 0 0 50px rgba(255, 0, 0, 0.1),
    0 0 30px rgba(255, 0, 0, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.mission-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.3) 2px,
      rgba(0, 0, 0, 0.3) 4px
    );
  pointer-events: none;
  z-index: 1;
}

.mission-title {
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: 900;
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 30px #ff0000,
    0 0 40px #cc0000;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  animation: titleFlicker 3s ease-in-out infinite;
}

@keyframes titleFlicker {
  0%, 100% { opacity: 1; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000; }
  50% { opacity: 0.95; text-shadow: 0 0 15px #ff0000, 0 0 25px #ff0000, 0 0 35px #ff0000; }
  52% { opacity: 0.8; }
  54% { opacity: 1; }
}

.led-clock-container {
  background: #0d0d0d;
  border: 3px solid #1a1a1a;
  border-radius: 8px;
  padding: 20px 30px;
  display: inline-block;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(255, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.led-clock {
  font-family: 'Orbitron', monospace;
  font-size: 48px;
  font-weight: 700;
  color: #ff0000;
  text-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff3333,
    0 0 30px #ff0000;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.led-segment {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
}

.led-number {
  background: rgba(255, 0, 0, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 0, 0, 0.3);
  animation: ledPulse 1s ease-in-out infinite;
}

.led-label {
  font-size: 10px;
  color: #666;
  margin-top: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.led-separator {
  font-size: 40px;
  animation: separatorBlink 1s step-end infinite;
  margin: 0 5px;
  padding-bottom: 20px;
}

@keyframes ledPulse {
  0%, 100% { 
    box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.2);
  }
  50% { 
    box-shadow: inset 0 0 15px rgba(255, 0, 0, 0.3);
  }
}

@keyframes separatorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

.mission-warning {
  margin-top: 25px;
  font-family: 'Orbitron', monospace;
  font-size: 11px;
  color: #ff3333;
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: warningPulse 2s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

@keyframes warningPulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.mission-info {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #330000;
  color: #888;
  font-size: 13px;
  position: relative;
  z-index: 2;
}

.mission-info strong {
  color: #ff6666;
}

@media (max-width: 500px) {
  .led-clock {
    font-size: 28px;
  }
  .led-segment {
    min-width: 45px;
  }
  .led-number {
    padding: 5px 8px;
  }
  .mission-title {
    font-size: 16px;
    letter-spacing: 2px;
  }
}
</style>

<div id="shadowbox-contagem" style="display:none;" class="shadowbox-hidden-content">

<div class="mission-container">
  <div class="mission-title" id="mission-title-text">CARREGANDO...</div>
  
  <div class="led-clock-container">
    <div class="led-clock">
      <div class="led-segment">
        <div class="led-number"><span id="sb-countdown-days">00</span></div>
        <div class="led-label">Dias</div>
      </div>
      <span class="led-separator">:</span>
      <div class="led-segment">
        <div class="led-number"><span id="sb-countdown-hours">00</span></div>
        <div class="led-label">Horas</div>
      </div>
      <span class="led-separator">:</span>
      <div class="led-segment">
        <div class="led-number"><span id="sb-countdown-mins">00</span></div>
        <div class="led-label">Min</div>
      </div>
      <span class="led-separator">:</span>
      <div class="led-segment">
        <div class="led-number"><span id="sb-countdown-secs">00</span></div>
        <div class="led-label">Seg</div>
      </div>
    </div>
  </div>
  
  <div class="mission-warning">⚠ Tempo restante para o objetivo ⚠</div>
  
  <div class="mission-info">
    <strong>📍 Horário de Brasília (UTC-3)</strong><br>
    Acompanhe nosso Discord para mais informações.
  </div>
</div>

<script>
(function() {
  function updateShadowboxCountdown() {
    const config = window.DLConfig || {};
    const DATE_OBJECTIVE = config.date_objective;
    const TIME_OBJECTIVE = config.time_objective || '00:00';
    const TEXT_OBJECTIVE = config.text_objective || 'OBJETIVO';
    
    // Atualiza o título
    const titleEl = document.getElementById('mission-title-text');
    if (titleEl) titleEl.textContent = TEXT_OBJECTIVE.toUpperCase();
    
    if (!DATE_OBJECTIVE) return;
    
    const [year, month, day] = DATE_OBJECTIVE.split('/').map(Number);
    const [hours, minutes] = TIME_OBJECTIVE.split(':').map(Number);
    const targetDate = new Date(Date.UTC(year, month - 1, day, hours + 3, minutes, 0));
    
    function update() {
      const now = new Date();
      const diff = targetDate - now;
      
      if (diff <= 0) {
        document.getElementById('sb-countdown-days').textContent = '00';
        document.getElementById('sb-countdown-hours').textContent = '00';
        document.getElementById('sb-countdown-mins').textContent = '00';
        document.getElementById('sb-countdown-secs').textContent = '00';
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      
      document.getElementById('sb-countdown-days').textContent = days.toString().padStart(2, '0');
      document.getElementById('sb-countdown-hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('sb-countdown-mins').textContent = mins.toString().padStart(2, '0');
      document.getElementById('sb-countdown-secs').textContent = secs.toString().padStart(2, '0');
    }
    
    update();
    setInterval(update, 1000);
  }
  
  // Aguarda o DOM e executa
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateShadowboxCountdown);
  } else {
    setTimeout(updateShadowboxCountdown, 100);
  }
})();
</script>

</div>
