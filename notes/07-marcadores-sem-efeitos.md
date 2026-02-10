# 🎨 Nota 07 - Marcadores Sem Efeitos

**Data:** 2026-02-10  
**Alteração:** Removidos todos os efeitos visuais  
**Status:** ✅ Implementado

---

## 🆕 Mudança

### Antes:
```css
.quest-mob-marker {
  filter: drop-shadow(...);        /* Brilho vermelho */
  animation: markerPulseSubtle...; /* Pulse */
}
```
- Brilho vermelho intenso
- Animação de pulse (escala + opacidade)
- Muito chamativo

### Agora:
```css
.quest-mob-marker {
  /* Sem efeitos: apenas a imagem PNG pura */
}
```
- ✅ Sem brilho (sem drop-shadow)
- ✅ Sem pulse (sem animation)
- ✅ Apenas a imagem PNG original

---

## 📊 Comparação Visual

### Antes:
```
🔴 ← Brilhando e pulsando
```

### Agora:
```
● ← Apenas o ícone PNG estático
```

---

## 💡 Se Quiser Adicionar Efeitos Mínimos

### Leve Sombra (sem brilho):
```css
.quest-mob-marker {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}
```

### Hover (destaque ao passar mouse):
```css
.quest-mob-marker:hover {
  transform: translate(-50%, -50%) scale(1.1);
}
```

### Borda Branca:
```css
.quest-mob-marker {
  border: 2px solid white;
  border-radius: 50%;
}
```

---

## 📦 Arquivos Alterados

- ✅ `custom.css` - Removidos animation e filter

---

## ✅ Resultado

Marcadores agora são apenas a imagem PNG pura, sem brilho ou pulse.
Overlay escura no mapa ainda mantida para contraste.

---

**Implementado! Marcadores agora são simples e discretos.**
