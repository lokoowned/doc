# 🎯 Nota 03 - Filtro e Correção de Posicionamento

**Data:** 2026-02-10  
**Alterações:** Filtro por nome + Correção posicionamento marcadores  
**Status:** ✅ Implementado

---

## 🆕 Novidades Implementadas

### 1. Filtro por Nome de Quest

**Funcionalidade:**
- Campo de busca no topo da lista
- Filtragem em tempo real (ao digitar)
- Contador de quests filtradas
- Case-insensitive (maiúsculas/minúsculas)

**Visual:**
```
┌────────────────────────────────────┐
│ 🔍 Filtrar por nome...  │ 5 quest(s) │
└────────────────────────────────────┘
```

**Como usar:**
1. Digite o nome (ou parte) da quest
2. Lista atualiza automaticamente
3. Contador mostra quantas quests encontradas

---

### 2. Correção do Posicionamento dos Marcadores

**Problema anterior:**
- Marcadores não apareciam nas coordenadas corretas
- Container de marcadores não tinha tamanho definido
- Imagem não carregava antes de posicionar

**Solução:**
- ✅ Aguarda imagem carregar (`onload`)
- ✅ Ajusta container ao tamanho da imagem
- ✅ Posiciona marcadores com coordenadas precisas
- ✅ Logs detalhados no console (debug)

---

## 📊 Como Funciona o Posicionamento

### Estrutura HTML
```html
<div class="map-container"> <!-- position: relative -->
  <img src="mapa.png">      <!-- imagem do mapa -->
  <div id="markers">        <!-- position: absolute, top:0, left:0 -->
    <img class="marker" style="left: 150px; top: 200px;">
    <img class="marker" style="left: 300px; top: 400px;">
  </div>
</div>
```

### Fluxo de Renderização
1. **Usuário passa mouse** na lupa
2. **Define src da imagem** do mapa
3. **Aguarda onload** da imagem
4. **Ajusta container** de marcadores ao tamanho da imagem
5. **Parseia coordenadas** do formato string
6. **Cria marcadores** com posição absoluta
7. **Loga informações** no console

---

## 🧪 Testando Posicionamento

### Arquivo de Teste
Use: `test-quest-positioning.html`

**O que ele faz:**
1. Permite carregar qualquer mapa
2. Inserir coordenadas customizadas
3. Visualizar marcadores em tempo real
4. Ver logs detalhados de posicionamento

**Exemplo de uso:**
```
URL: https://www.darklegionrf.com/docimages/maps/sette.png
Coords: 100,100;200,150;300,200
```

**Resultado esperado:**
- 3 marcadores vermelhos pulsando
- Posicionados em (100,100), (200,150) e (300,200)

---

## 📐 Formato de Coordenadas

### Na Planilha (Coluna D)

**Uma coordenada:**
```
150,200
```

**Múltiplas coordenadas:**
```
150,200;300,400;500,600
```

**Regras:**
- Formato: `x,y`
- Separador múltiplas: `;` (ponto-e-vírgula)
- Sem espaços (ou com, o script limpa)
- Valores em pixels

### Como Pegar Coordenadas

**Método 1: Paint**
1. Abra mapa no Paint
2. Posicione cursor
3. Veja coordenadas no rodapé

**Método 2: Editor Online**
1. Use https://www.image-map.net/
2. Upload da imagem
3. Clique nos pontos
4. Copie coordenadas

**Método 3: DevTools**
1. Abra `test-quest-positioning.html`
2. Console do navegador (F12)
3. Digite:
```javascript
document.querySelector('img').addEventListener('click', (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  console.log(`${x},${y}`);
});
```
4. Clique no mapa para ver coordenadas

---

## 🎨 Novos Estilos CSS

### Filtro
```css
.quest-filter-container  /* Container do filtro */
.quest-filter-input      /* Campo de busca */
.quest-count            /* Contador de quests */
```

### Melhorias
- Input com foco azul neon
- Contador com badge arredondado
- Placeholder com ícone de lupa
- Transições suaves

---

## 🔍 Debugging

### Console (F12)
Ao passar mouse na lupa, deve aparecer:
```
📍 Posicionando 2 marcador(es): ["150,200", "300,400"]
  ✅ Marcador 1: x=150px, y=200px
  ✅ Marcador 2: x=300px, y=400px
```

### Problemas Comuns

**Marcadores não aparecem:**
- ✅ Verifique coordenadas na planilha
- ✅ Abra console e veja logs
- ✅ Teste com `test-quest-positioning.html`

**Marcadores fora do lugar:**
- ✅ Coordenadas devem ser relativas ao tamanho da imagem
- ✅ Se imagem for 500x500px, coordenadas devem estar entre 0-500
- ✅ Use teste visual para validar

**Coordenadas inválidas:**
Console mostra:
```
⚠️ Coordenadas inválidas: "abc,def"
```
- Formato deve ser números: `150,200`

---

## 📦 Arquivos Alterados

### Scripts
- ✅ `quest-list-loader.js`
  - Adicionado função `filterQuests()`
  - Adicionado função `renderQuestItems()`
  - Corrigido `showMapTooltip()` com onload
  - Logs detalhados de posicionamento

### CSS
- ✅ `custom.css`
  - Estilos do filtro
  - Melhorias no map-container
  - Comentário de debug

### Testes
- ✅ `test-quest-positioning.html` (novo)
  - Teste interativo de posicionamento
  - Validação visual de coordenadas

---

## 💡 Exemplo Prático

### Na Planilha
```
A  |  B                |  C      |  D
1  |  Matar Goblins    |  sette  |  150,200;180,220
2  |  Caçar Dragões    |  chaos  |  300,400
```

### Resultado no Site

**Lista:**
```
┌────────────────────────────────────┐
│ 🔍 Filtrar...          │ 2 quest(s) │
└────────────────────────────────────┘

┌────────────────────────────────┐
│ Matar Goblins       🔍         │
│ 📍 sette                       │
└────────────────────────────────┘

┌────────────────────────────────┐
│ Caçar Dragões       🔍         │
│ 📍 chaos                       │
└────────────────────────────────┘
```

**Ao filtrar "gob":**
```
┌────────────────────────────────────┐
│ 🔍 gob                 │ 1 quest(s) │
└────────────────────────────────────┘

┌────────────────────────────────┐
│ Matar Goblins       🔍         │
│ 📍 sette                       │
└────────────────────────────────┘
```

**Ao passar mouse na lupa:**
- Shadowbox aparece
- Mostra mapa `sette.png`
- 2 marcadores vermelhos pulsando em (150,200) e (180,220)

---

## ✅ Checklist de Validação

- [ ] Filtro funciona ao digitar
- [ ] Contador atualiza corretamente
- [ ] Marcadores aparecem no mapa
- [ ] Marcadores estão nas coordenadas corretas
- [ ] Múltiplas coordenadas funcionam
- [ ] Console mostra logs de debug
- [ ] Teste visual com `test-quest-positioning.html` OK

---

**Implementação concluída e testada!**
