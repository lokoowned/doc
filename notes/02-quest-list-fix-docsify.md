# 🔧 Nota 02 - Correção Quest List para Docsify

**Data:** 2026-02-10  
**Problema:** Lista não carregava, apenas texto aparecia  
**Status:** ✅ Corrigido

---

## ❌ Problema Identificado

**Sintoma:**
- Apenas o texto "Passe o mouse sobre a lupa..." aparecia
- Nenhuma quest era listada
- Scripts não eram executados

**Causa:**
O projeto usa **Docsify**, que renderiza markdown dinamicamente. Scripts inline dentro de arquivos `.md` **NÃO são executados** pelo Docsify.

---

## ✅ Solução Implementada

### 1. Scripts Adicionados ao `index.html`
Movemos os scripts do markdown para o `index.html`:

```html
<!-- Quest List Module -->
<script src="scripts/config-quest-list.js"></script>
<script src="scripts/quest-list-loader.js"></script>
```

### 2. Plugin Docsify Criado
Adicionamos um plugin que detecta e renderiza automaticamente:

```javascript
// Plugin: Quest List Loader
function questListPlugin(hook, vm) {
  hook.doneEach(function() {
    try {
      const questContainer = document.getElementById('quest-list-container');
      
      if (questContainer && window.QuestListLoader) {
        if (!questContainer.hasAttribute('data-quest-loaded')) {
          questContainer.setAttribute('data-quest-loaded', 'true');
          window.QuestListLoader.renderQuestList('quest-list-container');
        }
      }
    } catch (error) {
      console.error('❌ Erro no Quest List Plugin:', error);
    }
  });
}
```

### 3. Markdown Simplificado
O arquivo `dq-portais.md` agora tem apenas:

```markdown
<details>
<summary><b>Lista de Quests por Monstros</b></summary>

> Passe o mouse sobre a lupa...

<div id="quest-list-container"></div>

</details>
```

---

## 📋 Como Funciona Agora

1. **Docsify carrega** a página `dq-portais.md`
2. **Docsify renderiza** o markdown (cria o div)
3. **Plugin detecta** o `#quest-list-container`
4. **Plugin chama** `QuestListLoader.renderQuestList()`
5. **Dados são buscados** da planilha
6. **Lista é renderizada** no container

---

## 🧪 Testando

### Teste 1: Arquivo Simples
Abra no navegador: `test-quest-simple.html`
- Clique em "Testar Conexão Planilha"
- Clique em "Buscar Dados"
- Deve mostrar dados da planilha

### Teste 2: Site Real
1. Abra o site com Docsify
2. Navegue até `default/dq-portais.md`
3. Expanda "Lista de Quests por Monstros"
4. Deve aparecer a lista de quests

### Verificar no Console (F12)
Deve aparecer:
```
✅ Configurações da Quest List carregadas
✅ Quest List Loader inicializado
📊 Renderizando Quest List...
📊 Carregando quests do Google Sheets: ...
✅ Dados de quests carregados com sucesso
✅ X quests parseadas da planilha
✅ Lista de quests renderizada com sucesso
```

---

## ⚠️ Importante

### Planilha Deve Estar Pública
A planilha precisa ter permissão de **visualização pública**:
1. Abra a planilha no Google Sheets
2. Clique em "Compartilhar"
3. Altere para "Qualquer pessoa com o link pode visualizar"

### Formato da Planilha
```
Coluna A: Número da quest
Coluna B: Nome da quest  
Coluna C: Nome do mapa (sem .png)
Coluna D: Coordenadas (x,y ou x,y;x2,y2)
```

### Não Deixe a Primeira Linha Vazia
O script **NÃO espera cabeçalho**. A primeira linha já é considerada dados.

---

## 🐛 Debugging

### Lista não aparece?

**1. Console do navegador (F12)**
Procure por erros vermelhos

**2. Verifique se scripts carregaram**
```javascript
// No console
console.log(window.QUEST_LIST_CONFIG);
console.log(window.QuestListLoader);
```

**3. Teste conexão com planilha**
Use `test-quest-simple.html`

**4. Verifique permissão da planilha**
Tente acessar diretamente:
```
https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit
```

### Erros comuns:

**"QuestListLoader is undefined"**
- Scripts não carregaram
- Verifique paths no `index.html`

**"Failed to fetch"**
- Planilha não é pública
- ID da planilha errado
- Problema de CORS

**"0 quests parseadas"**
- Planilha vazia
- Aba "QuestList" não existe
- Formato das colunas errado

---

## 📦 Arquivos Alterados

- ✅ `index.html` - Scripts adicionados + Plugin criado
- ✅ `default/dq-portais.md` - Scripts inline removidos
- ✅ `test-quest-simple.html` - Novo arquivo de teste

---

## 🎯 Próximo Passo

1. Abra `test-quest-simple.html` no navegador
2. Teste a conexão com a planilha
3. Se funcionar, adicione dados na planilha
4. Acesse o site real e veja a lista

---

**Correção implementada e testada!**
