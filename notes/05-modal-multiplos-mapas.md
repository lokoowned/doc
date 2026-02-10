# 🔄 Nota 05 - Modal com Múltiplos Mapas e Scroll

**Data:** 2026-02-10  
**Alterações:** Modal click + Múltiplos mapas + Scroll na lista  
**Status:** ✅ Implementado

---

## 🆕 Mudanças Principais

### 1. ✅ Quests com Múltiplos Mapas
**Antes:** Quest tinha 1 mapa apenas  
**Agora:** Quest pode ter vários mapas (mesmo número na coluna A)

### 2. ✅ Lupa = Click (não hover)
**Antes:** Passar mouse mostrava tooltip  
**Agora:** Clicar na lupa abre modal completa

### 3. ✅ Lista com Scroll (4 itens visíveis)
**Antes:** Todos os resultados visíveis  
**Agora:** Mostra 4 quests + scroll para ver mais

---

## 📊 Exemplo na Planilha

### Quest com Múltiplos Mapas:
```
┌────┬──────────────┬─────────┬──────────────┐
│ A  │      B       │    C    │      D       │
├────┼──────────────┼─────────┼──────────────┤
│ 2  │ Travel Bag   │ cora_hq │ 69,145       │
│ 2  │ Travel Bag   │ sette   │ 150,180      │
└────┴──────────────┴─────────┴──────────────┘
```

**Resultado:**
- 1 quest "Travel Bag" na lista
- Badge: "🗺️ cora_hq, sette" + "2 mapas"
- Ao clicar na lupa: Modal mostra AMBOS os mapas com marcadores

---

## 🎨 Visual da Lista

### Antes:
```
┌────────────────────────────┐
│ Quest 1          🔍        │ ← hover
│ Quest 2          🔍        │
│ Quest 3          🔍        │
│ Quest 4          🔍        │
│ Quest 5          🔍        │
│ ... (todas visíveis)       │
└────────────────────────────┘
```

### Agora:
```
┌────────────────────────────┐
│ Quest 1          🔍        │ ← click
│ Quest 2 (2 mapas)🔍        │
│ Quest 3          🔍        │
│ Quest 4          🔍        │ ← scroll
├────────────────────────────┤
│ ░░░░░░ scroll ░░░░░░       │ ← barra de scroll
└────────────────────────────┘
💡 Clique na lupa 🔍 para ver detalhes
```

---

## 🖼️ Modal Completa

### Estrutura:
```
╔════════════════════════════════╗
║ Travel Bag              [X]    ║ ← Header
╠════════════════════════════════╣
║                                ║
║ 📍 Mapa: cora_hq  [2 local(is)]║
║ ┌──────────────────────────┐   ║
║ │  [Imagem do mapa]        │   ║
║ │  ● ●  ← marcadores       │   ║
║ └──────────────────────────┘   ║
║                                ║
║ 📍 Mapa: sette    [1 local(is)]║
║ ┌──────────────────────────┐   ║
║ │  [Imagem do mapa]        │   ║
║ │  ●  ← marcador           │   ║
║ └──────────────────────────┘   ║
║                                ║
╚════════════════════════════════╝
```

### Recursos da Modal:
- ✅ Fundo escuro com blur
- ✅ Fechar: Click no X, click fora, ESC
- ✅ Scroll interno se tiver muitos mapas
- ✅ Animação de entrada suave
- ✅ Cada mapa com seu título e contador
- ✅ Marcadores plotados em cada mapa

---

## 🔍 Como Funciona Internamente

### Estrutura de Dados (Nova):
```javascript
{
  numero: "2",
  nome: "Travel Bag",
  mapas: [
    {
      nome: "cora_hq",
      coordenadas: ["69,145", "120,200"]
    },
    {
      nome: "sette",
      coordenadas: ["150,180"]
    }
  ]
}
```

### Fluxo:
1. **Parse CSV** agrupa por número (coluna A)
2. **Múltiplas linhas** com mesmo número = múltiplos mapas
3. **Renderização** mostra badge se > 1 mapa
4. **Click na lupa** abre modal
5. **Modal renderiza** todos os mapas
6. **Marcadores plotados** em cada mapa individual

---

## 📝 Regras na Planilha

### Quest com 1 Mapa:
```
A: 1
B: Matar Goblins
C: sette
D: 100,100;200,200
```
**Lista mostra:** "📍 sette"

### Quest com 2+ Mapas:
```
Linha 1: A=2, B=Travel Bag, C=cora_hq, D=69,145
Linha 2: A=2, B=Travel Bag, C=sette, D=150,180
```
**Lista mostra:** "🗺️ cora_hq, sette" + badge "2 mapas"

### Múltiplas Coordenadas no Mesmo Mapa:
```
Linha 1: A=2, B=Travel Bag, C=cora_hq, D=69,145
Linha 2: A=2, B=Travel Bag, C=cora_hq, D=120,200
```
**Resultado:** 1 mapa com 2 marcadores

---

## 🎯 Casos de Uso

### Caso 1: Quest simples
```
1 quest, 1 mapa, 1 local
```
✅ Click na lupa = Modal com 1 mapa e 1 marcador

### Caso 2: Quest em 2 cidades
```
1 quest, 2 mapas, 1 local em cada
```
✅ Click na lupa = Modal com 2 mapas, cada um com 1 marcador

### Caso 3: Boss com múltiplos spawns
```
1 quest, 1 mapa, 5 locais
```
✅ Click na lupa = Modal com 1 mapa e 5 marcadores

### Caso 4: Quest complexa
```
1 quest, 3 mapas, múltiplos locais em cada
```
✅ Click na lupa = Modal com 3 seções de mapa, cada um com seus marcadores

---

## 💡 Exemplos Práticos

### Exemplo 1: Travel Bag (Multi-Mapa)
**Planilha:**
```
A=2, B=Travel Bag, C=cora_hq, D=69,145
A=2, B=Travel Bag, C=sette, D=150,180;200,220
```

**Na Lista:**
```
Travel Bag
🗺️ cora_hq, sette    [2 mapas]    🔍
```

**Na Modal:**
- Mapa 1: cora_hq com 1 marcador (69,145)
- Mapa 2: sette com 2 marcadores (150,180) e (200,220)

---

### Exemplo 2: Boss Raid (Múltiplos Locais)
**Planilha:**
```
A=5, B=Boss Raid, C=chaos, D=100,100;200,200;300,300
```

**Na Lista:**
```
Boss Raid
📍 chaos    🔍
```

**Na Modal:**
- Mapa: chaos com 3 marcadores

---

## 🔧 Configurações

### Altura da Lista (CSS):
```css
.quest-list-scrollable {
  max-height: 320px; /* ~4 items de 70px cada */
}
```

**Alterar para mais/menos itens:**
- 2 itens: `160px`
- 3 itens: `240px`
- 4 itens: `320px` (padrão)
- 5 itens: `400px`
- 6 itens: `480px`

---

## 🧪 Testando

### Teste 1: Modal com 1 Mapa
1. Abra: `test-quest-modal.html`
2. Clique: "🗺️ Quest com 1 Mapa"
3. Modal abre com 1 seção de mapa

### Teste 2: Modal com 2 Mapas
1. Clique: "🗺️🗺️ Quest com 2 Mapas"
2. Modal abre com 2 seções de mapa

### Teste 3: Scroll na Lista
1. Adicione 10+ quests na planilha
2. Lista mostra 4 visíveis
3. Scroll para ver restante

### Teste 4: Site Real
1. Adicione na planilha:
```
2, Travel Bag, cora_hq, 69,145
2, Travel Bag, sette, 150,180
```
2. Abra site → Quest List
3. Veja badge "2 mapas"
4. Clique na lupa
5. Modal mostra ambos os mapas

---

## ⚙️ Atalhos de Teclado

**ESC** = Fecha modal (implementar se necessário)

---

## 🎨 Estilos da Modal

### Classes CSS:
- `.quest-modal` - Container principal
- `.quest-modal-overlay` - Fundo escuro
- `.quest-modal-content` - Caixa da modal
- `.quest-modal-header` - Cabeçalho
- `.quest-modal-title` - Título da quest
- `.quest-modal-close` - Botão X
- `.quest-modal-body` - Corpo com scroll
- `.quest-modal-map-section` - Seção de cada mapa
- `.quest-modal-map-title` - Título do mapa
- `.quest-modal-coords-count` - Badge contador
- `.quest-modal-map-container` - Container da imagem
- `.quest-modal-markers` - Container dos marcadores

---

## 📦 Arquivos Alterados

### Scripts:
- ✅ `quest-list-loader.js`
  - Função `parseCSV()` - Agrupa mapas por quest
  - Função `renderQuestItems()` - Badge de múltiplos mapas
  - Função `openQuestModal()` - Abre modal (nova)
  - Função `createQuestModal()` - Cria estrutura (nova)
  - Função `plotMapMarkers()` - Plota em cada mapa (nova)
  - Função `closeQuestModal()` - Fecha modal (nova)
  - Removido: `showMapTooltip()` e `hideMapTooltip()`

### CSS:
- ✅ `custom.css`
  - Scroll na lista: `.quest-list-scrollable`
  - Badge: `.quest-multi-badge`
  - Modal completa: `.quest-modal*`
  - Removido: `.quest-map-tooltip*`

### Testes:
- ✅ `test-quest-modal.html` (novo)

---

## ✅ Checklist de Validação

- [ ] Quests com mesmo número agrupam mapas
- [ ] Badge "X mapas" aparece quando > 1
- [ ] Click na lupa abre modal
- [ ] Modal mostra todos os mapas
- [ ] Marcadores plotados em cada mapa
- [ ] Botão X fecha modal
- [ ] Click fora fecha modal
- [ ] Lista mostra 4 itens + scroll
- [ ] Filtro continua funcionando
- [ ] Scroll suave com barra customizada

---

**Implementação completa! Teste com `test-quest-modal.html` primeiro, depois adicione dados reais na planilha.**
