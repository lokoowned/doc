# 📏 Nota 08 - Ícone do Mob Reduzido

**Data:** 2026-02-10  
**Alteração:** Tamanho do ícone reduzido pela metade  
**Status:** ✅ Implementado

---

## 🆕 Mudança

### Antes:
```css
.quest-mob-marker {
  width: 24px;
  height: 24px;
}
```
- Ícone: 24x24 pixels

### Agora:
```css
.quest-mob-marker {
  width: 12px;
  height: 12px;
}
```
- Ícone: 12x12 pixels (50% menor)

---

## 📊 Comparação Visual

### Antes:
```
● ← 24px (grande)
```

### Agora:
```
• ← 12px (pequeno)
```

---

## ⚙️ Ajustar Tamanho

### Arquivo: `custom.css`

**Menor (atual):**
```css
.quest-mob-marker {
  width: 12px;
  height: 12px;
}
```

**Médio:**
```css
.quest-mob-marker {
  width: 16px;
  height: 16px;
}
```

**Original:**
```css
.quest-mob-marker {
  width: 24px;
  height: 24px;
}
```

**Muito pequeno:**
```css
.quest-mob-marker {
  width: 8px;
  height: 8px;
}
```

---

## 📦 Arquivos Alterados

- ✅ `custom.css` - Tamanho 24px → 12px
- ✅ `config-quest-list.js` - MARKER_SIZE atualizado
- ✅ `test-quest-positioning.html` - Teste atualizado
- ✅ `test-visual-ajustes.html` - Preview atualizado

---

## ✅ Resultado

Ícones agora são menores e mais discretos, facilitando visualização quando há muitos marcadores no mesmo mapa.

---

**Implementado! Ícones reduzidos para 12x12 pixels.**
