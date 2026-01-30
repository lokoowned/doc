# 🔧 Troubleshooting: ItemList "Item não encontrado"

## ❌ Problema

Ao passar o mouse sobre a badge "Drop (X)", aparece "Item não encontrado" mesmo com os itens existindo no banco de dados.

---

## 🔍 Diagnóstico Passo a Passo

### 1. **Abra o Console do Navegador**

Pressione **F12** e vá para a aba **Console**.

### 2. **Recarregue a Página (F5)** e procure por:

#### ✅ **Mensagens de Sucesso (Verde)**

```
✅ Banco de dados de itens carregado: X itens
📋 Primeiros 5 itens: [...]
🔤 Nomes dos itens: Item1, Item2, Item3, ...
```

Se você **NÃO ver** essas mensagens:
- ❌ A aba `ItemList` não existe ou está com nome errado
- ❌ A planilha não está pública
- ❌ A configuração no `configlists.js` está incorreta

#### ⚠️ **Avisos (Amarelo)**

```
⚠️ ATENÇÃO: Lista items tem coluna itemlist mas o banco de dados ainda não foi carregado!
💡 Esperando 1 segundo para garantir que ItemList seja carregado primeiro...
✅ Banco de dados ItemList agora está disponível!
```

Se aparecer e depois confirmar que está disponível: **OK** ✅

Se aparecer e depois mostrar erro: ❌ **Problema de carregamento**

### 3. **Passe o Mouse sobre "Drop (X)"** e procure por:

#### Se Funcionar ✅

```
🔍 Buscando drops: Item1, Item2, Item3
📚 Banco de dados tem X itens
✅ Item "Item1" encontrado: {...}
✅ Item "Item2" encontrado: {...}
✅ Item "Item3" encontrado: {...}
```

#### Se NÃO Funcionar ❌

```
🔍 Buscando drops: Item1, Item2, Item3
📚 Banco de dados tem X itens
❌ Item "Item1" não encontrado no banco
📋 Itens disponíveis: ItemA, ItemB, ItemC, ...
```

**Diagnóstico**: Os nomes não correspondem exatamente!

---

## 🛠️ Soluções Comuns

### Solução 1: **Nomes Não Correspondem Exatamente**

**Problema**: O nome na coluna `ItemList` (aba `item`) é diferente do nome na coluna `Item Name` (aba `ItemList`).

**Exemplo de Erro**:
```
Aba ItemList (coluna A): "Espada Flamejante"
Aba item (coluna I):      "Espada Flame"
```

**Resultado**: ❌ Não encontrado

**Solução**: **Os nomes devem ser IDÊNTICOS**

✅ Correto:
```
Aba ItemList (coluna A): "Espada Flamejante"
Aba item (coluna I):      "Espada Flamejante"
```

### Solução 2: **Espaços Extras**

**Problema**: Espaços antes/depois do nome

**Exemplo de Erro**:
```
"Espada Flame " (com espaço no final)
" Espada Flame" (com espaço no início)
```

**Solução**: Remova espaços extras. O sistema tenta remover automaticamente, mas é melhor garantir na planilha.

### Solução 3: **Banco de Dados Não Carregado**

**Problema**: A aba `ItemList` não existe ou está com nome errado

**Sinais**:
```
❌ Erro ao carregar banco de dados itemlist: [erro]
```

**Solução**:
1. Verifique se a aba se chama exatamente **`ItemList`** (case-sensitive)
2. Verifique se as colunas estão na ordem correta:
   - A = Item Name
   - B = Item Type
   - C = Item Icon
   - D = Item Description
3. Verifique se há pelo menos 1 item preenchido

### Solução 4: **Planilha Não Pública**

**Problema**: Permissões da planilha não permitem acesso

**Solução**:
1. Abra a planilha no Google Sheets
2. Clique em **Compartilhar** (canto superior direito)
3. Mude para **"Qualquer pessoa com o link pode visualizar"**
4. Copie o link e confirme que é o mesmo no `configlists.js`

### Solução 5: **Timing (Carregamento Assíncrono)**

**Problema**: A tabela `items` carrega antes do banco `ItemList`

**Sinais**:
```
⚠️ Lista items tem coluna itemlist mas o banco de dados ainda não foi carregado!
❌ Banco de dados ItemList NÃO foi carregado após espera
```

**Solução Temporária**: Recarregue a página algumas vezes

**Solução Permanente**: 
1. No `configlists.js`, coloque `itemlist` **ANTES** de `items` na ordem
2. Isso garante que o banco seja carregado primeiro

---

## 📋 Checklist de Verificação

Antes de reportar o problema, verifique:

- [ ] A aba `ItemList` existe na planilha
- [ ] A aba tem o nome exato: `ItemList` (não `itemlist`, `Item List`, etc.)
- [ ] As colunas A, B, C, D estão preenchidas corretamente
- [ ] Há pelo menos 1 item na aba `ItemList`
- [ ] A planilha está pública ("Anyone with the link can view")
- [ ] Os nomes na coluna I (aba `item`) correspondem EXATAMENTE aos nomes na coluna A (aba `ItemList`)
- [ ] Não há espaços extras antes/depois dos nomes
- [ ] O console do navegador mostra "✅ Banco de dados de itens carregado"
- [ ] O console mostra a lista de itens disponíveis

---

## 🧪 Teste Manual

### Passo 1: Verificar Banco de Dados

No console do navegador (F12), digite:

```javascript
console.log(window.DLItemDatabase);
```

**Resultado esperado**: Array com objetos `{ name: "...", type: "...", icon: "...", description: "..." }`

**Se for `undefined` ou `null`**: Banco não foi carregado ❌

### Passo 2: Verificar Item Específico

No console, digite (substitua "Espada Flame" pelo nome do seu item):

```javascript
const itemName = "Espada Flame";
const found = window.DLItemDatabase.find(i => 
  i.name && i.name.toLowerCase().trim() === itemName.toLowerCase().trim()
);
console.log('Item encontrado?', found);
```

**Se `found` for `undefined`**: O nome não corresponde exatamente ❌

### Passo 3: Listar Todos os Nomes

No console, digite:

```javascript
console.log(window.DLItemDatabase.map(i => i.name).join('\n'));
```

Isso mostra todos os nomes disponíveis. Compare com o nome que você está procurando.

---

## 📞 Informações para Suporte

Se o problema persistir, forneça as seguintes informações:

1. **Console Logs**: Copie todas as mensagens que começam com 🔍, ✅, ❌, ⚠️
2. **Banco de Dados**: Execute `console.log(window.DLItemDatabase)` e copie o resultado
3. **Item Procurado**: Qual o nome exato do item que deveria aparecer?
4. **Planilha**: Confirme que a aba `ItemList` existe e tem dados
5. **Screenshot**: Captura do tooltip mostrando "Item não encontrado"

---

## 💡 Dicas de Prevenção

1. **Use Copiar/Colar**: Ao preencher a coluna I (ItemList), copie os nomes diretamente da coluna A da aba `ItemList`
2. **Evite Digitação Manual**: Minimiza erros de digitação
3. **Consistência**: Use sempre o mesmo padrão de nomenclatura
4. **Teste Incremental**: Adicione 1 item por vez e teste antes de adicionar mais
5. **Console Aberto**: Mantenha o console aberto (F12) para ver erros em tempo real
