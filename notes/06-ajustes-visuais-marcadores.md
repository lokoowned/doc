# 🎨 Nota 06 - Ajustes Visuais dos Marcadores

**Data:** 2026-02-10  
**Alterações:** Pulse suave + Overlay escura nos mapas  
**Status:** ✅ Implementado

---

## 🆕 Melhorias Visuais

### 1. ✅ Efeito Pulse Reduzido
**Antes:**
- Escala: 1.0 → 1.2 (20% maior)
- Duração: 1.5s
- Muito chamativo

**Agora:**
- Escala: 1.0 → 1.08 (8% maior)
- Duração: 2.5s (mais lento)
- Opacidade: 1.0 → 0.95 (sutil)
- Drop-shadow aumentado para compensar

---

### 2. ✅ Overlay Escura no Mapa
**Adicionado:**
- Camada semi-transparente escura sobre o mapa
- Opacidade: 40% (rgba(0, 0, 0, 0.4))
- Marcadores ficam em destaque (z-index: 10)

**Resultado:**
- Mapa fica levemente escurecido
- Marcadores vermelhos se destacam mais
- Melhor contraste visual

---

## 🎨 Comparação Visual

### Antes:
```
┌──────────────────┐
│  🗺️ Mapa Claro  │
│  ●  ← pulse 20%  │ ← Pouco destaque
│                  │
└──────────────────┘
```

### Agora:
```
┌──────────────────┐
│ 🌑 Mapa Escuro   │
│  🔴 ← pulse 8%   │ ← Muito destaque!
│                  │
└──────────────────┘
```

---

## ⚙️ Configurações Ajustáveis

### Arquivo: `config-quest-list.js`

```javascript
UI: {
  ANIMATION_DURATION: '2.5s',    // Duração do pulse
  MARKER_PULSE_SCALE: 1.08,      // Tamanho do pulse (1.0 = sem pulse)
  MAP_OVERLAY_DARKNESS: 0.4      // Escuridão do overlay (0.0 a 1.0)
}
```

---

## 🔧 Ajustes Personalizados

### Remover Pulse Completamente:
```javascript
MARKER_PULSE_SCALE: 1.0,  // Sem animação
```

### Pulse Mais Forte:
```javascript
MARKER_PULSE_SCALE: 1.15,    // 15% maior
ANIMATION_DURATION: '1.5s',  // Mais rápido
```

### Overlay Mais Escura:
```javascript
MAP_OVERLAY_DARKNESS: 0.6,  // 60% escuro
```

### Sem Overlay:
```javascript
MAP_OVERLAY_DARKNESS: 0.0,  // Sem escuridão
```

---

## 📝 Ajustes Diretos no CSS

### Alterar Pulse (custom.css):

**Pulse Médio (padrão):**
```css
@keyframes markerPulseSubtle {
  50% {
    transform: translate(-50%, -50%) scale(1.08);
    opacity: 0.95;
  }
}
```

**Pulse Mínimo:**
```css
@keyframes markerPulseSubtle {
  50% {
    transform: translate(-50%, -50%) scale(1.03);
    opacity: 0.98;
  }
}
```

**Sem Pulse:**
```css
.quest-mob-marker {
  animation: none; /* Remove animação */
}
```

---

### Alterar Overlay (custom.css):

**Overlay Padrão (40%):**
```css
.quest-modal-map-container::before {
  background: rgba(0, 0, 0, 0.4);
}
```

**Overlay Escura (60%):**
```css
.quest-modal-map-container::before {
  background: rgba(0, 0, 0, 0.6);
}
```

**Overlay Clara (20%):**
```css
.quest-modal-map-container::before {
  background: rgba(0, 0, 0, 0.2);
}
```

**Sem Overlay:**
```css
.quest-modal-map-container::before {
  display: none;
}
```

---

### Alterar Drop-Shadow (brilho vermelho):

**Brilho Intenso:**
```css
.quest-mob-marker {
  filter: drop-shadow(0 0 15px rgba(255, 0, 0, 1)) 
          drop-shadow(0 0 30px rgba(255, 0, 0, 0.8));
}
```

**Brilho Suave:**
```css
.quest-mob-marker {
  filter: drop-shadow(0 0 5px rgba(255, 50, 50, 0.8)) 
          drop-shadow(0 0 10px rgba(255, 0, 0, 0.4));
}
```

**Sem Brilho:**
```css
.quest-mob-marker {
  filter: none;
}
```

---

## 🎯 Exemplos de Combinações

### Estilo Sutil (Menos Chamativo):
```css
/* Pulse mínimo */
scale(1.03) + opacity: 0.98

/* Overlay clara */
rgba(0, 0, 0, 0.2)

/* Drop-shadow suave */
drop-shadow(0 0 5px rgba(255, 50, 50, 0.8))
```

### Estilo Normal (Atual):
```css
/* Pulse médio */
scale(1.08) + opacity: 0.95

/* Overlay média */
rgba(0, 0, 0, 0.4)

/* Drop-shadow normal */
drop-shadow(0 0 10px rgba(255, 50, 50, 1))
```

### Estilo Intenso (Mais Destaque):
```css
/* Pulse forte */
scale(1.15) + opacity: 0.9

/* Overlay escura */
rgba(0, 0, 0, 0.6)

/* Drop-shadow intenso */
drop-shadow(0 0 15px rgba(255, 0, 0, 1))
```

---

## 🧪 Testando Ajustes

### Teste Visual Rápido:
1. Abra `test-quest-positioning.html` ou `test-quest-modal.html`
2. Plote alguns marcadores
3. **Console (F12)** - Cole para testar em tempo real:

```javascript
// Remover pulse
document.querySelectorAll('.quest-mob-marker').forEach(m => {
  m.style.animation = 'none';
});

// Alterar overlay
document.querySelector('.quest-modal-map-container').style.setProperty('--overlay', '0.6');
```

---

## 📐 Detalhes Técnicos

### Estrutura do Marcador:
```html
<img class="quest-mob-marker" 
     src="mob.png" 
     style="left: 69px; top: 145px; z-index: 10;">
```

### CSS Aplicado:
```css
/* Posicionamento */
position: absolute;
left: 69px;
top: 145px;
transform: translate(-50%, -50%);

/* Visual */
width: 24px;
height: 24px;
z-index: 10; /* Acima da overlay */

/* Efeitos */
filter: drop-shadow(...); /* Brilho vermelho */
animation: markerPulseSubtle 2.5s infinite; /* Pulse */
```

### Overlay do Mapa:
```css
.quest-modal-map-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 40% escuro */
  z-index: 1; /* Abaixo dos marcadores */
}
```

---

## 🎨 Cores Alternativas

### Marcador Azul (ao invés de vermelho):
```css
.quest-mob-marker {
  filter: drop-shadow(0 0 10px rgba(0, 150, 255, 1)) 
          drop-shadow(0 0 20px rgba(0, 100, 255, 0.6));
}
```

### Marcador Amarelo:
```css
.quest-mob-marker {
  filter: drop-shadow(0 0 10px rgba(255, 220, 0, 1)) 
          drop-shadow(0 0 20px rgba(255, 180, 0, 0.6));
}
```

### Marcador Verde:
```css
.quest-mob-marker {
  filter: drop-shadow(0 0 10px rgba(0, 255, 100, 1)) 
          drop-shadow(0 0 20px rgba(0, 200, 80, 0.6));
}
```

---

## 📦 Arquivos Alterados

- ✅ `custom.css`
  - Animação `markerPulseSubtle` (mais suave)
  - Overlay `.quest-modal-map-container::before`
  - Drop-shadow aprimorado

- ✅ `config-quest-list.js`
  - Configurações `MARKER_PULSE_SCALE`
  - Configurações `MAP_OVERLAY_DARKNESS`
  - Configurações `ANIMATION_DURATION`

---

## ✅ Checklist de Validação

- [ ] Pulse está mais suave (8% ao invés de 20%)
- [ ] Mapa tem overlay escura
- [ ] Marcadores se destacam melhor
- [ ] Animação mais lenta e suave
- [ ] Drop-shadow visível e bonito

---

## 💡 Recomendações

**Para mapas claros:**
- Overlay: 0.4 a 0.6 (padrão: 0.4)

**Para mapas escuros:**
- Overlay: 0.2 a 0.3
- Considere marcadores mais brilhantes

**Para muitos marcadores:**
- Pulse menor: 1.03 a 1.05
- Evita poluição visual

**Para poucos marcadores:**
- Pulse normal: 1.08 a 1.12
- Chama mais atenção

---

**Implementado e pronto para uso! Ajuste as configurações conforme sua preferência visual.**
