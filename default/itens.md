Catálogo de Itens - RF Default

> Catálogo completo de itens, armas, armaduras e equipamentos disponíveis no servidor.

---

<div class="items-panel">
  <div class="items-panel__header">
    <h3>Catálogo de Itens</h3>
    <input 
      type="text" 
      id="searchItem" 
      placeholder="Buscar item por nome, tipo ou descrição..."
    />
  </div>
  
  <div class="items-panel__filters">
    <label>
      <input type="checkbox" id="filterArma" value="Arma" checked> Armas
    </label>
    <label>
      <input type="checkbox" id="filterArmadura" value="Armadura" checked> Armaduras
    </label>
    <label>
      <input type="checkbox" id="filterItemEspecial" value="Item Especial" checked> Itens Especiais
    </label>
    <label>
      <input type="checkbox" id="filterAcessorio" value="Acessório" checked> Acessórios
    </label>
  </div>
  
  <div class="items-panel__list" id="itemsList">
    <div class="items-list-header">
      <span>Item</span>
      <span>Nome</span>
      <span>Tipo</span>
      <span>Level</span>
      <span>Raridade</span>
    </div>
  </div>
  
  <div class="items-panel__footer">
    <span>Total de itens: <strong id="itemsTotalCount">0</strong></span>
    <span class="items-panel__footer-secondary">
      Mostrando <strong id="itemsVisibleCount">0</strong>
    </span>
  </div>
</div>

<!-- 
  Os dados dos itens são carregados automaticamente do arquivo itens.csv localizado na raiz do projeto.
  Formato do CSV (delimitador: ponto e vírgula):
  - Coluna A: Nome
  - Coluna B: Tipo (Arma, Armadura, Item Especial, Acessório, etc)
  - Coluna C: Level (pode ser range: "35-42")
  - Coluna D: Descrição
  - Coluna E: Local de Farm (opcional)
  - Coluna F: Raridade (Comum, Incomum, Raro, Épico, Lendário)
  - Coluna G: Imagem (caminho relativo, ex: imagens/itens/nome.png)
-->

<style>
.items-panel {
  background: #151518;
  border: 1px solid #2c2c2c;
  border-radius: 12px;
  padding: 20px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.items-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.items-panel__header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.items-panel__header input {
  flex: 1;
  min-width: 250px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #1d1d1d;
  color: #e0e0ff;
  font-size: 13px;
}

.items-panel__filters {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 12px;
}

.items-panel__filters label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #b0c8ff;
  cursor: pointer;
}

.items-panel__filters input[type="checkbox"] {
  cursor: pointer;
}

.items-panel__list {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.01);
  padding: 6px;
  border: 1px solid #292929;
}

.items-list-header {
  display: grid;
  grid-template-columns: 60px 2fr 1fr 0.8fr 1fr;
  gap: 12px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin-bottom: 6px;
  padding: 6px 12px;
  color: #94a8ff;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  align-items: center;
}

.item-card {
  display: grid;
  grid-template-columns: 60px 2fr 1fr 0.8fr 1fr;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.92rem;
  cursor: pointer;
  transition: all 0.2s ease;
  align-items: center;
}

.item-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #5a7cff;
}

.item-card__image {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.item-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

.item-card__image--placeholder {
  background: rgba(255, 255, 255, 0.01);
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

.item-card__name {
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #f0f0ff;
}

.item-card__type {
  color: #8fbce6;
  font-size: 0.85rem;
}

.item-card__level {
  color: #b0b0c8;
  font-size: 0.85rem;
}

.item-card__rarity {
  font-size: 0.85rem;
  font-weight: 600;
  text-align: right;
}

.item-card__rarity--comum {
  color: #9e9e9e;
}

.item-card__rarity--incomum {
  color: #7cff7c;
}

.item-card__rarity--raro {
  color: #5a9fff;
}

.item-card__rarity--epico {
  color: #b47cff;
}

.item-card__rarity--lendario {
  color: #ffb347;
  text-shadow: 0 0 8px rgba(255, 179, 71, 0.6);
}

.items-panel__footer {
  margin-top: 14px;
  font-size: 0.87rem;
  color: #9bb2ff;
  display: flex;
  justify-content: space-between;
}

.item-detail-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(15, 15, 35, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: none;
}

.item-detail-modal__header {
  background: linear-gradient(135deg, #252154, #5012b7);
  color: #fff;
  font-weight: 700;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 1.1rem;
}

.item-detail-modal__content {
  color: #d0d4ff;
  font-size: 0.95rem;
  line-height: 1.6;
}

.item-detail-modal__row {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.item-detail-modal__row:last-child {
  border-bottom: none;
}

.item-detail-modal__label {
  font-weight: 600;
  color: #8fbce6;
  margin-right: 8px;
}

.item-detail-modal__value {
  color: #f0f0ff;
}

.item-detail-modal__close {
  margin-top: 16px;
  padding: 8px 16px;
  background: #5012b7;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.item-detail-modal__close:hover {
  background: #6a1fd9;
}

.item-detail-modal__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  margin-bottom: 16px;
  width: 100%;
}

.item-detail-modal__image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))
          drop-shadow(0 0 20px rgba(138, 43, 226, 0.3));
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: none;
}
</style>

---

> **Dica**: Use a barra de busca acima para encontrar rapidamente qualquer item por nome, tipo ou descrição!

> Para sugerir novos itens ao catálogo, entre em contato com a administração.
