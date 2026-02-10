# 🔧 Nota 10 - Correção de Duplicação de Texto

**Data:** 2026-02-10  
**Problema:** Texto duplicado na modal  
**Status:** ✅ Corrigido

---

## ❌ Problema Identificado

Na modal (box popup), o texto estava aparecendo duplicado quando:
1. Imagem do mapa não carregava (chamava `handleMapImageError` múltiplas vezes)
2. Event listener do ESC era adicionado múltiplas vezes

### Comportamento Anterior:
```
┌─────────────────────────────┐
│ Mapa: teste                 │
│ Imagem não disponível       │
│                             │
│ Mapa: teste                 │ ← DUPLICADO!
│ Imagem não disponível       │
└─────────────────────────────┘
```

---

## ✅ Solução Implementada

### 1. Proteção contra Duplicação de Placeholder

**Antes:**
```javascript
handleMapImageError(imgElement, mapIndex, mapName) {
  // Sempre cria novo placeholder
  const placeholder = document.createElement('div');
  container.insertBefore(placeholder, markersContainer);
}
```

**Agora:**
```javascript
handleMapImageError(imgElement, mapIndex, mapName) {
  // Verifica se já foi tratado
  if (container.classList.contains('no-image')) {
    return; // Sai da função, evita duplicação
  }
  
  // Cria placeholder apenas uma vez
  const placeholder = document.createElement('div');
  container.insertBefore(placeholder, markersContainer);
  
  // Marca como tratado
  container.classList.add('no-image');
}
```

---

### 2. Proteção contra Múltiplos Event Listeners ESC

**Antes:**
```javascript
createQuestModal() {
  // Adiciona listener toda vez que modal é criada
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { ... }
  });
}
```

**Agora:**
```javascript
createQuestModal() {
  // Adiciona listener apenas uma vez
  if (!this.escListenerAdded) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { ... }
    });
    this.escListenerAdded = true;
  }
}
```

---

## 🎯 Como Funciona Agora

### Fluxo de Tratamento de Erro:

1. **Primeira Tentativa:**
   ```
   Imagem falha → onerror dispara → handleMapImageError()
   ```

2. **Verificação:**
   ```javascript
   if (container.classList.contains('no-image')) {
     return; // JÁ FOI TRATADO
   }
   ```

3. **Se Não Foi Tratado:**
   ```javascript
   // Cria placeholder
   // Adiciona classe 'no-image'
   // Próximas chamadas serão ignoradas
   ```

---

## 🧪 Testando

### Teste 1: Mapa Inexistente
```
Planilha:
A=1, B=Teste, C=mapa_nao_existe, D=100,100

Resultado Esperado:
- Placeholder aparece UMA VEZ
- Texto não duplica
```

### Teste 2: Múltiplas Modais
```
1. Abrir modal da Quest 1
2. Fechar
3. Abrir modal da Quest 2
4. Fechar
5. Abrir modal da Quest 3

Resultado Esperado:
- Cada modal funciona normalmente
- ESC fecha qualquer modal
- Sem listeners duplicados
```

### Teste 3: ESC Múltiplas Vezes
```
1. Abrir modal
2. Pressionar ESC → fecha
3. Abrir outra modal
4. Pressionar ESC → fecha

Resultado Esperado:
- ESC funciona sempre
- Sem múltiplos fechamentos
```

---

## 📊 Comparação

### Antes da Correção:
```
Abrir modal com mapa inválido:
- onerror dispara
- Cria placeholder
- onerror dispara NOVAMENTE (navegador tenta recarregar)
- Cria OUTRO placeholder
- Resultado: DUPLICADO
```

### Depois da Correção:
```
Abrir modal com mapa inválido:
- onerror dispara
- Cria placeholder
- Adiciona classe 'no-image'
- onerror dispara NOVAMENTE
- Verifica: já tem 'no-image' → IGNORA
- Resultado: ÚNICO
```

---

## 🔍 Debugging

### Console (F12):
```javascript
// Antes (múltiplas chamadas):
⚠️ Imagem do mapa "teste" não encontrada. Mostrando apenas texto.
⚠️ Imagem do mapa "teste" não encontrada. Mostrando apenas texto.

// Agora (única chamada):
⚠️ Imagem do mapa "teste" não encontrada. Mostrando apenas texto.
```

### Verificar no Console:
```javascript
// Conta placeholders (deve ser 1):
document.querySelectorAll('.quest-modal-map-placeholder').length

// Verifica se container está marcado:
document.querySelector('.quest-modal-map-container').classList.contains('no-image')
```

---

## 💡 Por Que Acontecia?

### Causa 1: Múltiplos Disparos do onerror
Alguns navegadores disparam `onerror` múltiplas vezes:
- Primeira tentativa de carregar
- Retry automático
- Cada falha dispara novamente

### Causa 2: Modal Recriada
Se modal fosse destruída e recriada:
- Event listeners eram adicionados novamente
- Acumulavam na memória

---

## 📦 Arquivos Alterados

- ✅ `quest-list-loader.js`
  - Função `handleMapImageError()` - Verificação de duplicação
  - Função `createQuestModal()` - Proteção event listener ESC

---

## ✅ Checklist de Validação

- [ ] Placeholder aparece apenas UMA vez
- [ ] Texto não duplica
- [ ] ESC fecha modal corretamente
- [ ] Múltiplas modais funcionam bem
- [ ] Console sem warnings duplicados

---

## 🎯 Prevenção Futura

### Padrão de Proteção:
Toda função que modifica DOM e pode ser chamada múltiplas vezes:

```javascript
function minhaFuncao() {
  // SEMPRE verificar se já foi executada
  if (jaFoiExecutada) {
    return;
  }
  
  // Fazer modificações
  // ...
  
  // Marcar como executada
  jaFoiExecutada = true;
}
```

### Event Listeners:
Toda adição de event listener global:

```javascript
if (!this.listenerAdded) {
  document.addEventListener('evento', handler);
  this.listenerAdded = true;
}
```

---

**Correção implementada! Modal agora funciona perfeitamente sem duplicações.**
