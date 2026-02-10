# 🔧 Troubleshooting - Lista de Membros

Guia rápido para resolver problemas comuns com a lista de membros.

## ❌ Problema: Lista aparece com 0 membros

### Diagnóstico Passo a Passo

#### 1️⃣ Verifique a Planilha

**Ação**: Abra a [planilha no Google Sheets](https://docs.google.com/spreadsheets/d/16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos/edit)

**Verifique:**
- ✅ A aba se chama exatamente `ListaMembros` (case-sensitive)
- ✅ Os dados começam na **linha 1** (sem cabeçalho)
- ✅ A planilha está **pública** (qualquer pessoa com o link pode visualizar)

**Como tornar pública:**
1. Clique em "Compartilhar" (canto superior direito)
2. Em "Acesso geral", selecione "Qualquer pessoa com o link"
3. Certifique-se que está como "Leitor"

---

#### 2️⃣ Teste a API Diretamente

**Ação**: Abra o arquivo `test-fetch-direct.html` no navegador

**O que fazer:**
1. Clique no botão "Buscar Dados"
2. Observe os logs

**Possíveis resultados:**

✅ **Sucesso**: Você vê dados e uma tabela com os membros
- **Solução**: O problema está no parse. Vá para o passo 3.

❌ **Erro 403/404**: Problema de permissão
- **Solução**: Torne a planilha pública (veja passo 1)

❌ **Erro de CORS**: Bloqueio de segurança do navegador
- **Solução**: 
  - Abra o arquivo através de um servidor local (não pelo file://)
  - Ou use extensão como "Live Server" no VSCode

❌ **Erro de Rede**: Sem conexão
- **Solução**: Verifique sua conexão com internet

---

#### 3️⃣ Verifique a Estrutura dos Dados

**Problema comum**: Coluna F (Active state) está na posição errada

Na planilha do Google Sheets, verifique se os dados seguem este padrão:

**✅ CORRETO** (com medalhas):
```
xLokoOwneD | 01/01/2011 | Fundador | Biohazard | staff,retorno2025 | FALSE
```

**✅ CORRETO** (sem medalhas):
```
Hiroshima | 01/01/2012 | Member | Desconhecido | | FALSE
```
OU
```
Hiroshima | 01/01/2012 | Member | Desconhecido | FALSE |
```

**❌ INCORRETO** (active state na coluna E quando há servidor):
```
Hiroshima | 01/01/2012 | Member | Desconhecido | FALSE
```
*Problema: Sistema interpreta "FALSE" como medalha*

---

#### 4️⃣ Verifique o Console do Navegador

**Ação**: 
1. Pressione F12 (ou Ctrl+Shift+I)
2. Vá para a aba "Console"
3. Recarregue a página (Ctrl+R)

**Procure por:**

✅ `✅ Dados carregados com sucesso!`
✅ `📦 Total de membros encontrados: X`

❌ `❌ Erro ao carregar membros:`
- Leia a mensagem de erro
- Copie e investigue

❌ `❌ MembersLoader não encontrado!`
- **Problema**: Script `members-loader.js` não foi carregado
- **Solução**: Verifique se o arquivo existe e está sendo incluído no HTML

❌ `⚠️ Usando cache antigo como fallback`
- **Problema**: Erro ao buscar novos dados
- **Solução**: Limpe o cache do navegador ou aguarde 5 minutos

---

#### 5️⃣ Teste com Dados Simulados

**Ação**: Abra o arquivo `test-parse.html` no navegador

**O que verificar:**
- Os casos de teste mostram como o parse deve funcionar
- Compare com seus dados na planilha
- Identifique diferenças no formato

---

#### 6️⃣ Verifique Active State (TRUE/FALSE)

**IMPORTANTE**: A lógica foi atualizada!

**Na planilha do Google Sheets:**
- `TRUE` = Membro **ATIVO** (aparece na lista)
- `FALSE` = Membro **INATIVO** (NÃO aparece na lista)

**Ação**:
1. Abra a planilha
2. Verifique a coluna F (ou E se não tiver medalhas)
3. Certifique-se que membros ativos estão com `TRUE`

**Se todos estão como FALSE**, esse é o problema! Mude para TRUE.

---

## 🔍 Checklist Rápido

Use este checklist para verificar tudo de uma vez:

- [ ] Planilha está pública (compartilhamento: "Qualquer pessoa com o link")
- [ ] Aba se chama exatamente `ListaMembros`
- [ ] Dados começam na linha 1 (sem cabeçalho)
- [ ] Coluna A tem nicknames preenchidos
- [ ] Coluna B tem datas no formato dd/mm/yyyy
- [ ] Coluna C tem status (Member/Officer/Fundador)
- [ ] Coluna F (ou E se sem medalhas) tem TRUE para membros ativos
- [ ] Arquivo `members-loader.js` existe na pasta
- [ ] Arquivo `index.html` inclui `<script src="members-loader.js"></script>`
- [ ] Navegador tem acesso à internet
- [ ] Console não mostra erros em vermelho

---

## 📞 Ainda com Problemas?

Se após seguir todos os passos o problema persistir:

1. **Abra o Console** (F12 > Console)
2. **Copie todos os logs e erros**
3. **Tire um print da planilha** mostrando as primeiras 5 linhas
4. **Tire um print do Console** mostrando os erros
5. **Documente o que você tentou**

Com essas informações, será possível identificar o problema específico.

---

## 🔄 Força de Atualização

Se você fez mudanças e elas não aparecem:

### Limpar Cache do Navegador

**Chrome/Edge:**
1. Ctrl+Shift+Delete
2. Selecione "Imagens e arquivos em cache"
3. Clique em "Limpar dados"

**Firefox:**
1. Ctrl+Shift+Delete
2. Marque "Cache"
3. Clique em "Limpar agora"

### Força Refresh
- **Windows/Linux**: Ctrl+Shift+R
- **Mac**: Cmd+Shift+R

### Modo Anônimo
Teste no modo anônimo para garantir que não é problema de cache:
- **Chrome**: Ctrl+Shift+N
- **Firefox**: Ctrl+Shift+P

---

## 🛠️ Comandos Úteis no Console

Abra o Console (F12) e execute estes comandos para debugging:

```javascript
// Ver configuração atual
console.log(window.MembersLoader);

// Limpar cache e recarregar
window.MembersLoader.clearCache();
window.location.reload();

// Buscar dados manualmente
window.MembersLoader.loadMembers()
  .then(data => console.table(data))
  .catch(err => console.error(err));

// Ver cache atual
console.log(window.MembersLoader.cache);

// Ver tempo do cache
console.log('Cache criado há', (Date.now() - window.MembersLoader.cacheTime) / 1000, 'segundos');
```

---

**Última atualização**: 03/02/2026
