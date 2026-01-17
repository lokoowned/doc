Lista de Membros da DarkLegion

> Lista de todos os jogadores que já participaram da DarkLegion.

---

<div class="members-panel">
  <div class="members-panel__header">
    <h3>Lista de Membros</h3>
  <input 
    type="text" 
    id="searchMember" 
      placeholder="Buscar membro por nickname..."
  />
</div>
  <div class="members-panel__medals" id="membersMedals">
    <div class="members-panel__medals-title">Medalhas de honra</div>
    <div class="members-panel__medals-icons"></div>
  </div>
  <div class="members-panel__list" id="membersList">
    <div class="members-list-header">
      <span>Nickname</span>
      <span>Medalhas de honra</span>
    </div>
  </div>
  <div class="members-panel__footer">
    <span>Total de membros: <strong id="membersTotalCount">0</strong></span>
    <span class="members-panel__footer-secondary">
      Mostrando <strong id="membersVisibleCount">0</strong>
    </span>
  </div>
</div>

<!-- 
  Os dados dos membros são carregados automaticamente do arquivo membros.csv localizado na raiz do projeto.
  Formato do CSV (delimitador: ponto e vírgula):
  - Coluna A: Nickname
  - Coluna B: Data de Entrada (formato: dd/mm/yyyy)
  - Coluna C: Status (Member, Officer, Fundador)
  - Coluna D: Servidor (opcional)
  - Coluna E: Medalhas (múltiplas separadas por vírgula)
  - Coluna F: Inativo (True/False - membros inativos não aparecem na lista)
-->

<style>
.members-panel {
  background: #151518;
  border: 1px solid #2c2c2c;
  border-radius: 12px;
  padding: 20px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.members-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.members-panel__header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.members-panel__header input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #1d1d1d;
  color: #e0e0ff;
  font-size: 13px;
}

.members-panel__medals {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 12px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.members-panel__medals-title {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: #8fbce6;
}

.members-panel__medals-icons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.members-panel__medals-icons img {
  width: 26px;
  height: 26px;
  object-fit: contain;
  object-position: center;
  border-radius: 6px;
  cursor: help;
  padding: 2px;
  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.4)) 
          drop-shadow(0 0 5px rgba(255, 215, 0, 0.25));
  transition: filter 0.3s ease;
}

.members-panel__medals-icons img:hover {
  filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.5)) 
          drop-shadow(0 0 8px rgba(255, 215, 0, 0.35));
}

.medal-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  font-size: 0.72rem;
  color: #b0c8ff;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.02);
}

.members-panel__list {
  max-height: 420px;
  overflow-y: auto;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.01);
  padding: 6px 6px 6px 36px;
  border: 1px solid #292929;
  position: relative;
}

.members-list-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin-bottom: 6px;
  padding: 2px 6px;
  color: #94a8ff;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.member-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.92rem;
  position: relative;
}

.member-rank {
  position: absolute;
  left: -28px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  font-weight: 700;
  color: #7a8cff;
  opacity: 0.6;
  min-width: 24px;
  text-align: right;
}

.member-card__main {
  display: flex;
  align-items: center;
  gap: 12px;
}

.member-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.member-card__name {
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #f0f0ff;
}

.member-card__name--officer {
  color: #ffd700;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6),
               0 0 15px rgba(255, 215, 0, 0.4),
               0 0 20px rgba(255, 215, 0, 0.2);
}

.member-card__name--fundador {
  color: #ff8c00;
  text-shadow: 0 0 8px rgba(255, 140, 0, 0.6),
               0 0 15px rgba(255, 140, 0, 0.4),
               0 0 20px rgba(255, 140, 0, 0.2);
}

.staff-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a1a;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  letter-spacing: 0.1em;
  vertical-align: middle;
  box-shadow: 0 2px 6px rgba(255, 215, 0, 0.3);
}

.fundador-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff8c00, #ffa500);
  color: #1a1a1a;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  letter-spacing: 0.1em;
  vertical-align: middle;
  box-shadow: 0 2px 6px rgba(255, 140, 0, 0.3);
}

.member-card__meta {
  font-size: 0.8rem;
  color: #b0b0c8;
}

.member-card__medals {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  flex-wrap: wrap;
  min-width: 90px;
}

.member-card__medals img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  padding: 3px;
  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.45)) 
          drop-shadow(0 0 6px rgba(255, 215, 0, 0.3));
  transition: all 0.3s ease;
}

.member-card__medals img:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6)) 
          drop-shadow(0 0 8px rgba(255, 215, 0, 0.4));
}

.member-card + .member-card {
  margin-top: 2px;
}

.members-panel__footer {
  margin-top: 14px;
  font-size: 0.87rem;
  color: #9bb2ff;
  display: flex;
  justify-content: space-between;
}

.medal-tooltip {
  position: fixed;
  pointer-events: none;
  background: rgba(15, 15, 35, 0.95);
  color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  font-size: 0.85rem;
  max-width: 240px;
  z-index: 10000;
  display: none;
}

.medal-tooltip img {
  width: 96px;
  height: 96px;
  object-fit: contain;
  object-position: center;
  display: block;
  margin: 0 auto 6px;
  padding: 6px;
  filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.5)) 
          drop-shadow(0 0 8px rgba(255, 215, 0, 0.35));
}

.medal-shadowbox-banner {
  background: linear-gradient(135deg, #252154, #5012b7);
  color: #fff;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.medal-shadowbox-members {
  font-size: 0.85rem;
  color: #d0d4ff;
  margin-top: 12px;
}

.medal-shadowbox-members ul {
  list-style: none;
  padding-left: 0;
  margin: 6px 0 0;
  max-height: 200px;
  overflow-y: auto;
}

.medal-shadowbox-members li {
  padding: 4px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.medal-tooltip-date {
  font-size: 0.75rem;
  color: #b0e2ff;
  margin-top: 6px;
}

.medal-shadowbox-date {
  font-size: 0.85rem;
  color: #d7def5;
  margin-top: 6px;
}

.medal-shadowbox-image {
  display: block;
  margin: 0 auto 10px;
  width: 160px;
  height: 160px;
  object-fit: contain;
  object-position: center;
  padding: 10px;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)) 
          drop-shadow(0 0 10px rgba(255, 215, 0, 0.35));
}
</style>

---


> **Dica**: Use a barra de busca acima para encontrar rapidamente qualquer membro por nickname ou classe!

> Para adicionar novos membros, entre em contato com a administração da guilda.

