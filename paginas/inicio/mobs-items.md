# 🗡️ Informações sobre itens, pitboss, boss e monstros do servidor.

> Reunimos a maestria de nossa organização para trazer uma fonte de informações rica para todos.

---
<details>
<summary><b>Lista com Mobs e pb's do Servidor</b></summary>
<div class="items-panel-sheets" data-list-id="items">
  <!-- O conteúdo será carregado automaticamente do Google Sheets -->
  <div style="text-align: center; padding: 40px; color: #999;">
    <div style="margin-bottom: 12px; font-size: 24px;">⏳</div>
    <div>Carregando itens do servidor...</div>
  </div>
</div>

</details>

<style>
/* ==================== ESTILOS DO PAINEL DE ITENS ==================== */

.items-panel-sheets {
  margin: 0;
  padding: 0;
}

.items-panel,
.table-panel {
  background: #151518;
  border: 1px solid #2c2c2c;
  border-radius: 12px;
  padding: 0;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.items-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.items-panel__header h3,
.table-panel__header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #f0f0ff;
}

.items-panel__header input,
.table-panel__header input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #1d1d1d;
  color: #e0e0ff;
  font-size: 13px;
  transition: border-color 0.3s;
}

.items-panel__header input:focus,
.table-panel__header input:focus {
  outline: none;
  border-color: #667eea;
}

/* ==================== ESTILOS DA TABELA ==================== */

.table-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.table-panel__controls {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 12px 20px;
  background: rgba(102, 126, 234, 0.05);
  border-bottom: 1px solid rgba(102, 126, 234, 0.15);
}

.table-panel__controls label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b0c8ff;
  font-size: 0.85rem;
  cursor: pointer;
  user-select: none;
}

.table-panel__controls input[type="checkbox"] {
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.table-panel__content {
  overflow-x: auto;
  max-height: 600px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.table-panel__content table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.table-panel__content thead {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  position: sticky;
  top: 0;
  z-index: 10;
}

.table-panel__content thead th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #8fa2ff;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  border-bottom: 2px solid #667eea;
  white-space: nowrap;
  user-select: none;
}

.table-panel__content thead th[data-sort]:hover {
  background: rgba(102, 126, 234, 0.2);
  color: #b0d0ff;
}

.sort-indicator {
  font-size: 0.7rem;
  color: #667eea;
}

.table-panel__content tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.table-panel__content tbody tr:not(.group-header):hover {
  background: rgba(102, 126, 234, 0.15);
  transform: scale(1.01);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.table-panel__content tbody tr.group-header {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border-left: 4px solid #667eea;
}

.table-panel__content tbody tr.group-header:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
}

.table-panel__content tbody tr.group-header.collapsed {
  opacity: 0.7;
}

.group-toggle {
  display: inline-block;
  width: 20px;
  color: #667eea;
  font-size: 0.8rem;
  margin-right: 8px;
}

.group-count {
  font-size: 0.8rem;
  color: #8fa2ff;
  font-weight: 400;
  margin-left: 8px;
}

.table-panel__content tbody tr.group-item {
  background: rgba(0, 0, 0, 0.2);
}

.table-panel__content tbody td {
  padding: 12px 16px;
  color: #d0d0e8;
  vertical-align: middle;
}

/* ==================== MOBTYPE ICONS ==================== */
.mobtype-icons {
  display: inline-flex;
  gap: 4px;
  margin-top: 6px;
  justify-content: center;
}

.mobtype-icon {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  overflow: hidden;
}

.mobtype-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.mobtype-name {
  font-weight: 600;
  color: #e0e0ff;
}

.mobtype-name-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.mobtype-tooltip {
  position: fixed;
  background: linear-gradient(135deg, #1e1e2e, #2a2a3e);
  border: 1px solid rgba(102, 126, 234, 0.6);
  border-radius: 8px;
  padding: 10px 12px;
  max-width: 280px;
  z-index: 10002;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  color: #e0e0ff;
  font-size: 0.85rem;
}

.mobtype-tooltip__image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.mobtype-tooltip__image img {
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.2);
}

.mobtype-tooltip__title {
  font-weight: 700;
  color: #bcd0ff;
  margin-bottom: 4px;
}

.mobtype-tooltip__desc {
  color: #d6ddff;
  line-height: 1.35;
}

.table-panel__content tbody td:nth-child(2) {
  font-weight: 600;
  color: #e0e0ff;
}

/* Célula de imagem */
.img-cell {
  text-align: center;
  padding: 8px !important;
  width: 70px;
  min-width: 70px;
  max-width: 70px;
}

.table-panel__content thead th:first-child,
.table-panel__content tbody td:first-child {
  width: 70px;
  min-width: 70px;
  max-width: 70px;
  text-align: center;
}

.table-thumb {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  padding: 4px;
  transition: transform 0.2s;
}

.table-thumb:hover {
  transform: scale(1.5);
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

/* Badge de raridade */
.rarity-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.rarity-comum {
  background: linear-gradient(135deg, #4a4a4a, #2a2a2a);
  color: #ddd;
  border: 1px solid #666;
}

.rarity-raro {
  background: linear-gradient(135deg, #4169e1, #1e3a8a);
  color: #b0d0ff;
  border: 1px solid #4169e1;
  box-shadow: 0 0 8px rgba(65, 105, 225, 0.4);
}

.rarity-epico {
  background: linear-gradient(135deg, #9333ea, #581c87);
  color: #e0b3ff;
  border: 1px solid #9333ea;
  box-shadow: 0 0 8px rgba(147, 51, 234, 0.4);
}

.rarity-lendario {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffe4b3;
  border: 1px solid #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
}

.rarity-mitico {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffb3b3;
  border: 1px solid #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
  animation: mythicGlow 2s ease-in-out infinite;
}

.table-panel__footer {
  margin: 0;
  font-size: 0.87rem;
  color: #9bb2ff;
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.2);
}

/* Scrollbar customizado para tabela */
.table-panel__content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.table-panel__content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.table-panel__content::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 4px;
}

.table-panel__content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2, #667eea);
}

/* ==================== ESTILOS PARA ITEM TAGS (ITEMLIST) ==================== */

.item-list-tag {
  display: inline-block;
  padding: 3px 8px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 4px;
  color: #b0d0ff;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  white-space: nowrap;
}

.item-list-tag:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.4));
  border-color: rgba(102, 126, 234, 0.8);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

.item-tooltip {
  animation: tooltipFadeIn 0.15s ease;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================== ESTILOS PARA DROP BADGE E SEÇÃO ==================== */

.drop-badge {
  display: inline-block;
  padding: 4px 10px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.2));
  border: 1px solid rgba(76, 175, 80, 0.5);
  border-radius: 4px;
  color: #90ff90;
  font-size: 0.85rem;
  font-weight: 600;
  user-select: none;
  pointer-events: none; /* Não interfere com o clique da linha */
}

.drop-cell {
  text-align: center;
}

/* Seção de drops no modal */
.item-detail-modal__drops-section {
  margin-top: 16px;
  padding: 12px 20px 20px 20px;
  border-top: 1px solid rgba(76, 175, 80, 0.3);
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.item-detail-modal__drops-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.item-detail-modal__drops-section::-webkit-scrollbar {
  height: 6px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-thumb {
  background: rgba(76, 175, 80, 0.5);
  border-radius: 3px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-thumb:hover {
  background: rgba(76, 175, 80, 0.7);
}

.item-detail-modal__drops-grid {
  display: flex;
  flex-direction: row;
  gap: 10px;
  min-width: max-content;
}

.drop-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(56, 142, 60, 0.1));
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-left: 3px solid #4CAF50;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.drop-item:hover {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.2));
  border-color: rgba(76, 175, 80, 0.5);
  transform: translateX(3px);
}

.drop-item--notfound {
  border-left-color: #ff6b6b;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(204, 85, 85, 0.1));
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.drop-item__icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.drop-item__icon-placeholder {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.drop-item__info {
  flex: 1;
  min-width: 0;
}

.drop-item__name {
  color: #e0fff0;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.drop-item__type {
  color: #90caa0;
  font-size: 0.8rem;
  opacity: 0.9;
}

/* Tooltip de descrição dos drops no modal */
.drop-item-tooltip {
  position: fixed;
  background: linear-gradient(135deg, #1e1e2e, #2a2a3e);
  border: 1px solid rgba(76, 175, 80, 0.6);
  border-radius: 8px;
  padding: 10px 12px;
  max-width: 320px;
  z-index: 10002;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  color: #e0fff0;
  font-size: 0.85rem;
}

.drop-item-tooltip__image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.drop-item-tooltip__image img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.2);
}

.drop-item-tooltip__desc {
  margin-bottom: 6px;
  line-height: 1.35;
}

.drop-item-tooltip__title {
  font-weight: 700;
  color: #bcd0ff;
  margin-bottom: 6px;
}

.drop-item-tooltip__desc--empty {
  color: #9aa;
  font-style: italic;
}

.drop-item-tooltip__related {
  color: #90caa0;
  font-size: 0.8rem;
}

/* Shadowbox de imagem extra no hover do Local Farm */
.localfarm-hover {
  color: #cfe0ff;
  text-decoration: underline dotted rgba(102, 126, 234, 0.6);
  cursor: pointer;
}

.localfarm-icon {
  margin-left: 6px;
  font-size: 0.85rem;
  color: #8fa2ff;
  opacity: 0.85;
}

.localfarm-tooltip {
  position: fixed;
  background: rgba(10, 10, 14, 0.85);
  border: 1px solid rgba(102, 126, 234, 0.5);
  border-radius: 10px;
  padding: 8px;
  max-width: 320px;
  z-index: 10002;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
  pointer-events: none;
}

.localfarm-tooltip img {
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
  border-radius: 6px;
  display: block;
}

/* Responsivo para drops no modal */
@media (max-width: 768px) {
  .item-detail-modal__drops-grid {
    flex-direction: column;
  }
  
  .drop-item {
    padding: 8px;
  }
  
  .drop-item__icon,
  .drop-item__icon-placeholder {
    width: 40px;
    height: 40px;
  }
}

.items-panel__filters {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px 0;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.items-panel__filters label {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #b0c8ff;
  user-select: none;
}

.items-panel__filters input[type="checkbox"] {
  cursor: pointer;
}

.items-panel__list {
  max-height: 600px;
  overflow-y: auto;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.01);
  padding: 12px;
  border: 1px solid #292929;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.items-list-header {
  display: none;
}

.item-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid #2c2c3e;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.item-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent, rgba(102, 126, 234, 0.1));
  opacity: 0;
  transition: opacity 0.3s;
}

.item-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.item-card:hover::before {
  opacity: 1;
}

.item-card__image {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.item-card__image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
}

.item-card__image--placeholder {
  background: linear-gradient(135deg, #2a2a3e, #1f1f2e);
  border: 2px dashed #444;
  border-radius: 8px;
}

.item-card__name {
  font-weight: 600;
  color: #e0e0ff;
  font-size: 0.9rem;
  margin-bottom: 4px;
  word-wrap: break-word;
  position: relative;
  z-index: 1;
}

.item-card__type {
  font-size: 0.75rem;
  color: #8fa2ff;
  margin-bottom: 2px;
  position: relative;
  z-index: 1;
}

.item-card__level {
  font-size: 0.7rem;
  color: #6cf;
  margin-bottom: 6px;
  position: relative;
  z-index: 1;
}

.item-card__rarity {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
}

.item-card__rarity--comum {
  background: linear-gradient(135deg, #4a4a4a, #2a2a2a);
  color: #ddd;
}

.item-card__rarity--raro {
  background: linear-gradient(135deg, #4169e1, #1e3a8a);
  color: #b0d0ff;
  box-shadow: 0 0 8px rgba(65, 105, 225, 0.4);
}

.item-card__rarity--epico {
  background: linear-gradient(135deg, #9333ea, #581c87);
  color: #e0b3ff;
  box-shadow: 0 0 8px rgba(147, 51, 234, 0.4);
}

.item-card__rarity--lendario {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffe4b3;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
}

.item-card__rarity--mitico {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffb3b3;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
  animation: mythicGlow 2s ease-in-out infinite;
}

@keyframes mythicGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(239, 68, 68, 0.4); }
  50% { box-shadow: 0 0 16px rgba(239, 68, 68, 0.6); }
}

.items-panel__footer {
  margin-top: 14px;
  font-size: 0.87rem;
  color: #9bb2ff;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.items-panel__footer-secondary {
  color: #7a8cff;
}

/* ==================== MODAL DE DETALHES ==================== */

.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  z-index: 9999;
}

.item-detail-modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 0;
  max-width: 900px;
  width: 90%;
  max-height: 85vh;
  overflow: hidden;
  z-index: 10000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.item-detail-modal__layout {
  display: flex;
  max-height: 85vh;
  gap: 16px;
}

.item-detail-modal__header {
  font-size: 1.7rem;
  font-weight: 800;
  color: #e0e0ff;
  margin-bottom: 20px;
  padding: 24px 24px 0 24px;
  text-align: center;
  letter-spacing: 0.02em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 16px;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.08));
  text-shadow: 0 2px 8px rgba(102, 126, 234, 0.35);
}

.item-detail-modal__image-section {
  flex: 0 0 400px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.item-detail-modal__image-section--extra {
  flex: 0 0 320px;
  border-right: none;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.25);
}

.item-detail-modal__image-container {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.item-detail-modal__image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(102, 126, 234, 0.8);
  border: none;
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10;
}

.item-detail-modal__image-nav:hover {
  background: rgba(102, 126, 234, 1);
  transform: translateY(-50%) scale(1.1);
}

.item-detail-modal__image-nav--prev {
  left: 10px;
}

.item-detail-modal__image-nav--next {
  right: 10px;
}

.item-detail-modal__image-counter {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
}

.item-detail-modal__content-section {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.item-detail-modal__drops-section {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(76, 175, 80, 0.3);
  max-height: 260px;
  overflow-y: auto;
}

.item-detail-modal__drops-section::-webkit-scrollbar {
  width: 6px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-thumb {
  background: rgba(76, 175, 80, 0.5);
  border-radius: 3px;
}

.item-detail-modal__drops-section::-webkit-scrollbar-thumb:hover {
  background: rgba(76, 175, 80, 0.7);
}

.item-detail-modal__image {
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
}

.item-detail-modal__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-detail-modal__row {
  display: flex;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.item-detail-modal__label {
  font-weight: 600;
  color: #8fa2ff;
  min-width: 120px;
}

.item-detail-modal__value {
  color: #d0d0e8;
  flex: 1;
}

.item-detail-modal__close {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.item-detail-modal__close:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* ==================== RESPONSIVO ==================== */

@media (max-width: 992px) {
  .item-detail-modal {
    max-width: 95%;
  }
  
  .item-detail-modal__layout {
    flex-direction: column;
  }
  
  .item-detail-modal__drops-section {
    max-height: 200px;
  }
  
  .item-detail-modal__image-section {
    flex: 0 0 auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 50vh;
  }
  
  .item-detail-modal__image-section--extra {
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .item-detail-modal__image-container {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .items-panel__list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    max-height: 500px;
  }
  
  .item-card__image {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 576px) {
  .item-detail-modal__image-container {
    height: 200px;
  }
  
  .item-detail-modal__image-nav {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
}

/* ==================== SCROLLBAR CUSTOMIZADO ==================== */

.items-panel__list::-webkit-scrollbar {
  width: 8px;
}

.items-panel__list::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.items-panel__list::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 4px;
}

.items-panel__list::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2, #667eea);
}
</style>

---

## 📌 Informações Importantes

> **Atualização Automática**: Os dados são atualizados periodicamente. Caso tenha algum erro reporte por ticket no discord.
> **Detalhes**: Clique em qualquer item para ver informações completas, incluindo localização de farm/droop.
