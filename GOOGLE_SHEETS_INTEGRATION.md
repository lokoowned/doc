# 📊 Sistema de Integração Google Sheets - Guia Completo

## 🎯 Visão Geral

O sistema foi implementado com sucesso! Agora você tem uma arquitetura escalável para criar listas dinâmicas carregadas do Google Sheets.

## ✅ Arquivos Criados

### 1. `configlists.js`
Arquivo de configuração centralizado onde você define todas as suas listas.

**Localização:** `/configlists.js`

### 2. Plugin Genérico
Plugin Docsify que processa automaticamente todas as listas configuradas.

**Localização:** `/index.html` (adicionado após o plugin de itens CSV)

### 3. Página de Itens
Página exemplo mostrando o catálogo de itens.

**Localização:** `/paginas/inicio/informacoes-sobre-armas-e-itens.md`

## 🚀 Como Usar

### Configurar a Planilha do Google Sheets

1. **Acesse sua planilha:**
   - URL: https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit

2. **Configure a aba "item":**
   ```
   Coluna A: Nome do Item
   Coluna B: Tipo (Arma, Armadura, Item Especial, Acessório)
   Coluna C: Level
   Coluna D: Descrição
   Coluna E: Local de Farm ou Droop
   Coluna F: Raridade (Comum, Raro, Épico, Lendário, Mítico)
   Coluna G: URL da Imagem (thumbnail na tabela) - Suporta links diretos e prnt.sc
   Coluna H: URL da Imagem Popup (imagem grande no modal) - Múltiplas URLs separadas por vírgula. Suporta prnt.sc
   
   **Nota sobre prnt.sc**: O sistema detecta automaticamente URLs como `https://prnt.sc/abc123` e extrai a imagem real da página HTML usando o seletor `.no-click.screenshot-image`.

---

## 🏷️ Sistema de Item Tags (ItemList)

O sistema suporta um recurso especial para exibir informações de itens em tooltips interativos.

### Como Funciona

1. **Configure a Lista de Referência**:
   - Crie uma aba chamada `ItemList` na planilha
   - Colunas: A (Item Name), B (Item Type), C (Item Icon), D (Item Description)
   - Esta lista é carregada em memória mas não é renderizada

2. **Use em Outras Listas**:
   - Em qualquer outra lista/tabela, nomeie uma coluna com "itemlist" ou "item list"
   - Preencha com nomes de itens separados por vírgula
   - Exemplo: `Espada Flame, Armadura Dragon, Poção de Vida`

3. **Resultado**:
   - Cada item aparece como uma tag clicável/hover
   - Ao passar o mouse, um tooltip mostra:
     - Ícone do item (48x48px)
     - Nome do item
     - Tipo do item
     - Descrição completa

### Exemplo de Configuração

**Aba: ItemList**
```
| A (Item Name)    | B (Item Type) | C (Item Icon)                | D (Item Description)           |
|------------------|---------------|------------------------------|--------------------------------|
| Espada Flame     | Arma          | https://prnt.sc/abc123      | Espada poderosa com fogo       |
| Armadura Dragon  | Armadura      | https://i.imgur.com/def.png | Armadura de escamas de dragão  |
```

**Aba: Boss** (ou qualquer outra)
```
| A (Nome do Boss) | B (Level) | C (ItemList)                         |
|------------------|-----------|--------------------------------------|
| Dragon King      | 60        | Espada Flame, Armadura Dragon        |
```

### Recursos

- ✅ **Hover Interativo**: Tooltip segue o cursor do mouse
- ✅ **Busca Automática**: Nome do item é procurado no banco de dados
- ✅ **Ícones Dinâmicos**: Suporta prnt.sc e URLs diretas
- ✅ **Visual Elegante**: Badge "Drop" com contador
- ✅ **Múltiplos Itens**: Separe por vírgula para listar vários itens
- ✅ **Seção no Modal**: Ao clicar no item, veja a lista completa com ícones
- ✅ **Grid Responsivo**: Layout adaptável para diferentes tamanhos de tela

### Como Aparece

#### Na Tabela:
```
| Item Name      | Drop      |
|----------------|-----------|
| Dragon King    | Drop (2)  |  <- hover para ver itens
```

#### No Tooltip (hover):
```
📦 Itens que Dropam
─────────────────
🖼️ Espada Flame (Arma)
🖼️ Armadura Dragon (Armadura)
```

#### No Modal (clique no item):
```
┌────────────────────────────────┐
│ 📦 Itens que Dropam            │
│ ──────────────────────────     │
│ [🖼️ Espada Flame]  [🖼️ Armadura] │
│ [   Arma        ]  [  Armadura ] │
└────────────────────────────────┘
```
   ```

3. **Torne a planilha pública:**
   - Clique em "Compartilhar" (botão no canto superior direito)
   - Altere para "Qualquer pessoa com o link pode visualizar"
   - Copie o link

4. **Adicione dados de exemplo:**
   ```
   Nome               | Tipo      | Level | Descrição           | Local de Farm    | Raridade  | Imagem URL
   Espada Flame       | Arma      | 50    | Espada de fogo      | HQ Boss Bellato  | Épico     | https://...
   Armadura Dragon    | Armadura  | 50    | Armadura resistente | Drop Boss Crag   | Lendário  | https://...
   ```

## 🎨 Como Adicionar Novas Listas

### Exemplo: Lista de Boss

1. **Adicione a configuração em `configlists.js`:**

```javascript
window.DLLists.boss = {
  spreadsheetId: 'SUA_PLANILHA_ID_AQUI',
  sheetName: 'boss',
  panelSelector: '.boss-panel-sheets',
  columns: {
    nome: { index: 0, label: 'Nome' },
    hp: { index: 1, label: 'HP' },
    level: { index: 2, label: 'Level' },
    localizacao: { index: 3, label: 'Localização' },
    drops: { index: 4, label: 'Drops' },
    imagem: { index: 5, label: 'Imagem' }
  },
  displayType: 'cards', // ou 'table', 'list'
  filters: {
    search: { 
      enabled: true, 
      fields: ['nome', 'localizacao'],
      placeholder: 'Buscar boss por nome ou localização...'
    }
  },
  cache: {
    enabled: true,
    duration: 600000 // 10 minutos
  },
  ui: {
    title: 'Lista de Boss',
    description: 'Todos os boss do servidor',
    totalLabel: 'Total de boss',
    visibleLabel: 'Mostrando',
    loadingText: 'Carregando boss...',
    errorText: 'Erro ao carregar boss.',
    emptyText: 'Nenhum boss encontrado.'
  }
};
```

2. **Crie a página markdown:**

```markdown
# 👹 Lista de Boss

> Explore todos os boss do servidor

<div class="boss-panel-sheets" data-list-id="boss">
  <div style="text-align: center; padding: 40px; color: #999;">
    <div style="margin-bottom: 12px; font-size: 24px;">⏳</div>
    <div>Carregando boss...</div>
  </div>
</div>
```

3. **Pronto!** O sistema automaticamente:
   - Carrega os dados da planilha
   - Renderiza no formato especificado (cards/table/list)
   - Aplica filtros configurados
   - Gerencia cache automaticamente

## 🔧 Tipos de Exibição

### Cards (displayType: 'cards')
- Exibição em grade com cartões
- Ideal para itens com imagens
- Modal de detalhes ao clicar

### Table (displayType: 'table')
- Exibição em tabela tradicional
- Ideal para dados tabulares
- Mais compacto

### List (displayType: 'list')
- Exibição em lista simples
- Ideal para dados básicos

## 🎯 Funcionalidades

### ✅ Implementadas

- ✅ Carregamento automático do Google Sheets
- ✅ Parse de dados da API Google Sheets
- ✅ Cache localStorage (5 minutos padrão)
- ✅ Sistema de filtros (busca e checkboxes)
- ✅ Múltiplos tipos de exibição (cards, table, list)
- ✅ Modal de detalhes para cards
- ✅ Renderização customizada por lista
- ✅ Tratamento de erros com fallback para cache
- ✅ UI totalmente configurável
- ✅ Transformação de dados customizada

### 🚀 Próximas Melhorias (Opcionais)

- Loading indicators mais elaborados
- Paginação para listas grandes
- Exportação de dados (CSV, JSON)
- Modo offline completo
- Sincronização bidirecional
- Versionamento de dados

## 🐛 Troubleshooting

### Planilha não carrega

**Problema:** A planilha está vazia ou não aparece nada.

**Soluções:**
1. Verifique se a planilha está pública
2. Confirme o nome da aba (deve ser exatamente "item")
3. Verifique se há dados na planilha
4. Abra o console do navegador (F12) e veja os erros

### Dados desatualizados

**Problema:** Alterações na planilha não aparecem no site.

**Soluções:**
1. Aguarde 5 minutos (duração do cache)
2. Limpe o cache do navegador
3. Abra o console e execute: `localStorage.clear()`
4. Recarregue a página (Ctrl + F5)

### Erro 403 ou 404

**Problema:** API retorna erro de permissão.

**Soluções:**
1. Verifique se a planilha está pública
2. Confirme o spreadsheetId no configlists.js
3. Verifique se o nome da aba está correto

## 📝 Estrutura de Dados

### Formato da Planilha

A primeira linha pode conter cabeçalhos (serão ignorados).
Os dados começam a partir da linha 2.

**Exemplo:**
```
| Nome        | Tipo | Level | ...
|-------------|------|-------|----
| Espada Flame| Arma | 50    | ...
| Shield Fire | Arm. | 45    | ...
```

### Formato após Parse

```javascript
[
  {
    nome: 'Espada Flame',
    tipo: 'Arma',
    level: '50',
    descricao: '...',
    localFarm: '...',
    raridade: 'Épico',
    imagem: 'https://...'
  },
  // ...
]
```

## 🔒 Segurança

- ✅ Dados carregados via HTTPS
- ✅ Planilha em modo somente leitura
- ✅ Sem autenticação necessária (API pública)
- ✅ Cache local no navegador do usuário
- ✅ Sem exposição de credenciais

## 📊 Performance

- **Cache**: 5 minutos por padrão (configurável)
- **Lazy Loading**: Só carrega quando página é visitada
- **Otimizado**: Reutiliza funções entre listas
- **Leve**: ~15KB de código adicional

## 🎓 Exemplos Práticos

### Lista de Membros

```javascript
window.DLLists.membros = {
  spreadsheetId: 'ID_AQUI',
  sheetName: 'membros',
  panelSelector: '.membros-panel-sheets',
  columns: {
    nickname: { index: 0, label: 'Nickname' },
    classe: { index: 1, label: 'Classe' },
    level: { index: 2, label: 'Level' },
    entrada: { index: 3, label: 'Data de Entrada' }
  },
  displayType: 'table',
  filters: {
    search: { 
      enabled: true, 
      fields: ['nickname', 'classe']
    }
  }
};
```

### Lista de Quests

```javascript
window.DLLists.quests = {
  spreadsheetId: 'ID_AQUI',
  sheetName: 'quests',
  panelSelector: '.quests-panel-sheets',
  columns: {
    nome: { index: 0, label: 'Quest' },
    nivel: { index: 1, label: 'Nível Mínimo' },
    recompensa: { index: 2, label: 'Recompensa' },
    npc: { index: 3, label: 'NPC' }
  },
  displayType: 'cards'
};
```

## 🎉 Conclusão

Você agora tem um sistema poderoso e escalável! Para adicionar novas listas, basta:

1. Adicionar config em `configlists.js`
2. Criar página `.md` com container
3. Pronto!

Sem necessidade de modificar código JavaScript existente.

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique o console do navegador (F12)
- Revise este guia
- Contate a equipe de desenvolvimento

---

**Desenvolvido para DarkLegion Guild** 🛡️
**Sistema de Integração Google Sheets v1.0**
