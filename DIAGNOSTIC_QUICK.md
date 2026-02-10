# 🔬 Diagnóstico Rápido - 0 Membros

## Problema Detectado

Website mostra **0 membros** mesmo com dados na planilha.

## Passo a Passo para Resolver

### 1️⃣ Abra o Console do Navegador

**Como fazer:**
- Pressione **F12** (ou Ctrl+Shift+I / Cmd+Option+I no Mac)
- Clique na aba **"Console"**
- Recarregue a página (**Ctrl+R** ou **F5**)

**O que procurar:**

#### ✅ Mensagens de Sucesso (verde):
```
📊 Carregando membros do Google Sheets...
✅ Dados carregados com sucesso da planilha
✅ X membros parseados da planilha
```

#### ❌ Mensagens de Erro (vermelho):
```
❌ Erro ao buscar dados da planilha: [mensagem]
❌ Erro HTTP 403: Forbidden
❌ MembersLoader não encontrado
```

### 2️⃣ Verifique as Permissões da Planilha

1. Abra a planilha: https://docs.google.com/spreadsheets/d/16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos/edit
2. Clique em **"Compartilhar"** (canto superior direito)
3. Em **"Acesso geral"**, certifique-se que está:
   - ✅ **"Qualquer pessoa com o link"**
   - ✅ **"Leitor"**

### 3️⃣ Teste a API Diretamente

Abra este link no navegador:
```
https://docs.google.com/spreadsheets/d/16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos/gviz/tq?tqx=out:csv&sheet=ListaMembros
```

**Resultado esperado:**
- Você deve ver os dados em formato CSV (texto)
- Primeira linha deve ser: `xLokoOwneD,01/01/2011,Fundador,...`

**Se aparecer erro 404 ou página em branco:**
- ❌ A planilha não está acessível publicamente
- **Solução:** Torne a planilha pública (passo 2)

### 4️⃣ Use a Ferramenta de Teste

Abra o arquivo de teste:
```
file:///e:/Projetos/RFOnline/Doc DarkLegion/doc/test-fetch-direct.html
```

1. Clique em **"Buscar Dados"**
2. Veja se os dados aparecem

### 5️⃣ Verifique o Active State

**IMPORTANTE:** Na planilha, certifique-se:

- Coluna F (ou E se não houver medalhas) deve ter:
  - ✅ **TRUE** para membros que DEVEM aparecer
  - ❌ **FALSE** para membros que NÃO devem aparecer

**Pela sua imagem:**
- Ambas linhas têm FALSE
- **Isso significa que ambos os membros estão marcados como INATIVOS!**

## ⚡ Solução Rápida

Se todos os membros têm FALSE na coluna F (ou E):

1. Abra a planilha
2. Selecione toda a coluna F (clique no cabeçalho "F")
3. Use Ctrl+H (Localizar e substituir)
4. Localizar: `FALSE`
5. Substituir por: `TRUE`
6. Clique em "Substituir tudo"

Isso tornará todos os membros **ATIVOS** e eles aparecerão na lista!

## 🎯 Causa Mais Provável

Com base na sua imagem, **todos os membros têm FALSE na coluna Active state**, o que significa que estão marcados como **INATIVOS**.

O sistema está funcionando corretamente - ele está apenas não mostrando membros inativos, conforme esperado!

### Solução:
Mude FALSE para TRUE para os membros que devem aparecer na lista.

---

**Próximo passo:** Me mostre o que aparece no Console (F12) quando você abre a página de membros.
