# 🗺️ Nota 09 - Placeholder para Mapas Inexistentes

**Data:** 2026-02-10  
**Alteração:** Placeholder de texto quando imagem do mapa não existe  
**Status:** ✅ Implementado

---

## 🆕 Funcionalidade

### Problema Anterior:
Quando o nome do mapa na planilha não correspondia a uma imagem real:
- ❌ Imagem quebrada aparecia
- ❌ Ícone de imagem quebrada do navegador
- ❌ Experiência ruim para o usuário

### Solução Atual:
Quando a imagem do mapa não carrega:
- ✅ Detecta erro automaticamente (onerror)
- ✅ Substitui por placeholder de texto elegante
- ✅ Mostra nome do mapa claramente
- ✅ Indica "Imagem não disponível"

---

## 📊 Comparação Visual

### Antes (Imagem Não Existe):
```
┌──────────────────────┐
│ ❌ [Imagem Quebrada] │
└──────────────────────┘
```

### Agora (Imagem Não Existe):
```
┌──────────────────────┐
│      🗺️              │
│   Mapa: custom_map   │
│ Imagem não disponível│
└──────────────────────┘
```

### Quando Imagem Existe:
```
┌──────────────────────┐
│  [Imagem do Mapa]    │
│    ● ● ● marcadores  │
└──────────────────────┘
```

---

## 🎯 Como Funciona

### 1. Tentativa de Carregamento:
```javascript
<img src="https://...maps/mapa_desconhecido.png" 
     onerror="handleMapImageError(...)">
```

### 2. Detecção de Erro:
Se a imagem não existe (404), dispara `onerror`

### 3. Substituição por Placeholder:
```javascript
handleMapImageError() {
  // Remove imagem
  // Cria placeholder com texto
  // Mostra nome do mapa
}
```

---

## 📝 Exemplos de Uso na Planilha

### Exemplo 1: Mapa Válido
```
A: 1
B: Quest Exemplo
C: sette
D: 100,100
```
**Resultado:** Mostra imagem `sette.png` com marcador

---

### Exemplo 2: Mapa Sem Imagem
```
A: 2
B: Quest Custom
C: mapa_personalizado
D: 150,200
```
**Resultado:** 
- Placeholder com texto
- "Mapa: mapa_personalizado"
- "Imagem não disponível"

---

### Exemplo 3: Mapa em Texto Puro
```
A: 3
B: Quest Tutorial
C: Vá até a cidade central
D: (vazio)
```
**Resultado:**
- Placeholder com texto
- "Mapa: Vá até a cidade central"
- Sem coordenadas = sem marcadores

---

## 🎨 Estilos do Placeholder

### CSS Aplicado:
```css
.quest-modal-map-placeholder {
  min-height: 200px;
  background: gradient(...);
  border: 2px dashed rgba(0, 207, 255, 0.3);
  border-radius: 8px;
}
```

### Visual:
- 🗺️ Ícone grande de mapa (opacidade 50%)
- 📝 Título com nome do mapa (azul neon)
- 💬 Legenda "Imagem não disponível" (cinza)
- 🎨 Fundo gradiente escuro
- 🔲 Borda tracejada azul

---

## ⚙️ Configurações

### Personalizar Mensagem (quest-list-loader.js):
```javascript
handleMapImageError(imgElement, mapIndex, mapName) {
  placeholder.innerHTML = `
    <div class="map-placeholder-content">
      <span class="map-placeholder-icon">🗺️</span>
      <p class="map-placeholder-title">Mapa: ${mapName}</p>
      <p class="map-placeholder-subtitle">Sua mensagem aqui</p>
    </div>
  `;
}
```

### Alterar Ícone:
```javascript
<span class="map-placeholder-icon">📍</span>  // Pin
<span class="map-placeholder-icon">🌍</span>  // Globo
<span class="map-placeholder-icon">❓</span>  // Interrogação
```

### Alterar Cores (custom.css):
```css
.map-placeholder-title {
  color: #ffaa00; /* Laranja */
}

.map-placeholder-subtitle {
  color: #ff6666; /* Vermelho claro */
}
```

---

## 🧪 Testando

### Teste 1: Mapa Inexistente
```
Planilha:
A=1, B=Teste, C=mapa_que_nao_existe, D=100,100

Resultado:
Modal abre com placeholder de texto ao invés de imagem quebrada
```

### Teste 2: Mapa Válido
```
Planilha:
A=2, B=Teste, C=sette, D=100,100

Resultado:
Modal abre com imagem do mapa e marcador
```

### Teste 3: Mix (Multi-Mapa)
```
Planilha:
A=3, B=Multi, C=sette, D=100,100
A=3, B=Multi, C=custom, D=200,200

Resultado:
Modal com:
- Mapa 1: imagem de sette + marcador
- Mapa 2: placeholder "custom" + sem marcador visível
```

---

## 💡 Casos de Uso

### 1. Mapas Customizados
Cliente tem mapas próprios ainda não adicionados ao servidor
```
C: meu_mapa_custom
```

### 2. Instruções Textuais
Ao invés de mapa, instruções
```
C: Procure no centro da cidade
```

### 3. Mapas Futuros
Placeholder até imagem ser adicionada
```
C: novo_mapa_em_breve
```

### 4. Erro de Digitação
Proteção contra erros
```
C: sete (errado, correto: sette)
```

---

## 🔍 Console Logs

Quando mapa não existe:
```
⚠️ Imagem do mapa "mapa_inexistente" não encontrada. Mostrando apenas texto.
```

Quando mapa carrega:
```
✅ Mapa 1: 3 marcador(es) plotados
```

---

## 📦 Arquivos Alterados

- ✅ `quest-list-loader.js`
  - Adicionado `onerror` na tag img
  - Função `handleMapImageError()` (nova)

- ✅ `custom.css`
  - Estilos `.quest-modal-map-placeholder`
  - Classe `.no-image` para remover overlay

---

## ✅ Benefícios

1. **Melhor UX:** Sem imagens quebradas
2. **Flexibilidade:** Aceita qualquer texto como "mapa"
3. **Clareza:** Usuario entende que imagem não existe
4. **Graceful Degradation:** Funciona mesmo sem imagem
5. **Instruções:** Pode usar texto ao invés de mapa

---

## 🎯 Recomendações

### Mapas Conhecidos (têm imagem):
```
sette, elan, chaos, cora_hq, acc_hq, bellato_hq, etc.
```

### Mapas Desconhecidos:
- Use nomes descritivos
- Exemplo: "Area Central", "Zona Norte", "Dungeon Secreta"
- Sistema mostrará automaticamente como placeholder

---

**Implementado! Sistema agora trata graciosamente mapas sem imagem disponível.**
