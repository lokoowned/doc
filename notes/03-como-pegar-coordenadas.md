# 📐 Como Pegar Coordenadas do Mapa

**Guia prático para obter coordenadas precisas**

---

## 🎯 Método 1: Teste Interativo (RECOMENDADO)

### Use o arquivo de teste
1. Abra: `test-quest-positioning.html` no navegador
2. Cole URL do mapa
3. Console do navegador (F12)
4. Cole este código:

```javascript
// Habilita click para pegar coordenadas
document.querySelector('img').addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  console.log(`Coordenada: ${x},${y}`);
  
  // Copia automaticamente
  navigator.clipboard.writeText(`${x},${y}`);
  alert(`Coordenada copiada: ${x},${y}`);
});
```

5. **Clique no mapa** onde quer o marcador
6. Coordenada aparece no console E copia automaticamente!

### Para múltiplas coordenadas:
```javascript
let coords = [];
document.querySelector('img').addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  coords.push(`${x},${y}`);
  console.log(`Coordenada ${coords.length}: ${x},${y}`);
  console.log('Todas: ' + coords.join(';'));
});
```

Clique em vários pontos, depois copie o resultado "Todas:"

---

## 🎨 Método 2: Paint (Windows)

### Passo a passo:
1. Baixe a imagem do mapa
2. Abra com Paint
3. Posicione o cursor no ponto desejado
4. Veja coordenadas no **rodapé inferior esquerdo**
5. Anote: `x,y`

**Exemplo:**
```
Rodapé mostra: "150, 200 px"
Na planilha: 150,200
```

---

## 🌐 Método 3: Image Map Online

### Site: https://www.image-map.net/

1. Clique em **"Start creating"**
2. Upload da imagem do mapa
3. Clique em **"Point"** (ícone de ponto)
4. Clique nos locais do mapa
5. Veja coordenadas na lista lateral
6. Anote cada par

**Exemplo:**
```
Site mostra: coords="150,200"
Na planilha: 150,200
```

---

## 🖥️ Método 4: GIMP / Photoshop

### GIMP:
1. Abra imagem
2. Menu **Windows → Dockable Dialogs → Pointer**
3. Mova cursor no mapa
4. Veja coordenadas em tempo real

### Photoshop:
1. Abra imagem
2. Menu **Window → Info**
3. Mova cursor
4. Painel Info mostra X e Y

---

## 📝 Formato Correto na Planilha

### Uma coordenada:
```
150,200
```

### Múltiplas (mesmo mob em locais diferentes):
```
150,200;300,400;500,600
```

**Regras:**
- ✅ Use vírgula entre X e Y: `x,y`
- ✅ Use ponto-e-vírgula entre coordenadas: `;`
- ✅ Números inteiros (sem decimais)
- ✅ Sem espaços (ou com, o script limpa)
- ❌ Não use parênteses: `(150,200)` ❌
- ❌ Não use colchetes: `[150,200]` ❌

---

## 🧪 Validando Coordenadas

### Teste visual:
1. Pegue coordenada (ex: `150,200`)
2. Abra `test-quest-positioning.html`
3. Cole URL do mapa
4. Cole coordenada
5. Clique "Plotar Marcadores"
6. **Veja se marcador está no lugar certo**

### Se estiver errado:
- Refaça coordenada
- Verifique se imagem do teste é a mesma da planilha
- Tamanho da imagem importa!

---

## ⚠️ Importante

### Coordenadas são em PIXELS
- Se imagem tem 500x500px
- Coordenadas devem estar entre 0 e 500
- Coordenadas maiores = fora da imagem

### Imagens diferentes = Coordenadas diferentes
- Se trocar mapa, refaça coordenadas
- Resolução diferente = posições diferentes

---

## 💡 Exemplo Completo

### Cenário:
Mapa `sette.png` tem 3 locais de spawn de Goblin

### Passo 1: Pegar coordenadas
Usando método 1 (interativo), clique nos 3 locais:
```
Coordenada 1: 150,200
Coordenada 2: 280,350
Coordenada 3: 420,180
```

### Passo 2: Formatar
Junte com ponto-e-vírgula:
```
150,200;280,350;420,180
```

### Passo 3: Preencher planilha
```
Coluna A: 1
Coluna B: Matar Goblins
Coluna C: sette
Coluna D: 150,200;280,350;420,180
```

### Passo 4: Testar
1. Abra site
2. Vá em Quest List
3. Passe mouse na lupa
4. Veja 3 marcadores no mapa

---

## 🔍 Troubleshooting

### Marcadores não aparecem:
- Verifique formato: `x,y` (números)
- Sem letras ou símbolos extras
- Console (F12) mostra erros?

### Marcadores no lugar errado:
- Imagem do teste é a mesma?
- Coordenadas dentro do tamanho da imagem?
- Refaça coordenadas

### Não sei tamanho da imagem:
```javascript
// Console (F12) com imagem aberta
const img = document.querySelector('img');
console.log(`Tamanho: ${img.naturalWidth}x${img.naturalHeight}px`);
```

---

**Dica final:** Use sempre o método 1 (interativo) com `test-quest-positioning.html` - é o mais preciso e visual!
