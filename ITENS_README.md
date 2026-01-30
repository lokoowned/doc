# 📦 Gerenciamento do Catálogo de Itens

Este documento explica como gerenciar o catálogo de itens da DarkLegion usando **Google Sheets**.

---

## 🌐 Sistema Google Sheets

O catálogo de itens agora é **100% gerenciado pelo Google Sheets**! Não há mais arquivos CSV locais.

### ✅ Vantagens

- ✅ **Edição Online**: Altere de qualquer lugar
- ✅ **Colaboração**: Múltiplas pessoas podem editar
- ✅ **Atualização Automática**: Mudanças refletem no site automaticamente
- ✅ **Sem Deploy**: Não precisa fazer commit/push
- ✅ **Interface Familiar**: Use o Google Sheets que você já conhece
- ✅ **Cache Inteligente**: Sistema mantém cópia local por 5 minutos

---

## 📊 Estrutura da Planilha

**URL da Planilha:** https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit

**Nome da Aba:** `item` (exatamente esse nome, em minúsculo)

### Colunas da Planilha

| Coluna | Nome | Descrição | Obrigatório | Exemplo |
|--------|------|-----------|-------------|---------|
| A | Nome | Nome completo do item | ✅ Sim | `Espada Flamejante` |
| B | Tipo | Categoria do item | ✅ Sim | `Arma`, `Armadura`, `Item Especial`, `Acessório` |
| C | Level | Nível ou range de nível | ✅ Sim | `50` ou `35-42` |
| D | Descrição | Descrição detalhada do item | ✅ Sim | `Espada de duas mãos com dano de fogo adicional` |
| E | Local de Farm | Onde o item pode ser obtido | ❌ Não | `Boss HQ Bellato` |
| F | Raridade | Raridade do item | ✅ Sim | `Comum`, `Raro`, `Épico`, `Lendário`, `Mítico` |
| G | Imagem | URL da imagem (thumbnail na tabela). Suporta links diretos e prnt.sc | ❌ Não | `https://i.imgur.com/thumb.png` ou `https://prnt.sc/abc123` |
| H | Imagem Popup | URL da imagem grande (modal). **Múltiplas imagens separadas por vírgula**. Suporta links diretos e prnt.sc | ❌ Não | `https://i.imgur.com/img1.png, https://prnt.sc/xyz789` |

---

## 🎨 Raridades e Cores

As raridades são exibidas com cores diferentes e efeitos especiais:

| Raridade | Cor | Efeito | Descrição |
|----------|-----|--------|-----------|
| **Comum** | Cinza | - | Itens básicos e facilmente obtidos |
| **Raro** | Azul | Brilho sutil | Itens difíceis de obter |
| **Épico** | Roxo | Brilho médio | Itens muito raros com boas propriedades |
| **Lendário** | Dourado | Brilho intenso | Itens extremamente raros |
| **Mítico** | Vermelho | Animação pulsante | Itens únicos e lendários |

---

## ✏️ Como Adicionar um Novo Item

### Método 1: Direto no Google Sheets

1. **Acesse a planilha**: [Link da Planilha](https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit)
2. **Vá para a aba "item"**
3. **Adicione uma nova linha** com os dados
4. **Salve** (salva automaticamente)
5. **Aguarde até 5 minutos** para o cache expirar, ou limpe o cache do navegador

### Exemplo de Dados

```
Linha 2:
A: Espada Flame
B: Arma
C: 50
D: Espada poderosa imbuída com poder de fogo
E: Boss HQ Bellato
F: Épico
G: https://i.imgur.com/thumb-48x48.png (thumbnail pequena)
H: https://i.imgur.com/img1.png, https://i.imgur.com/img2.png, https://i.imgur.com/img3.png (múltiplas imagens separadas por vírgula)

Linha 3:
A: Armadura Dragon
B: Armadura
C: 50
D: Armadura lendária feita de escamas de dragão
E: Drop Boss Crag Mines
F: Lendário
G: (vazio)
```

---

## 🔍 Recursos Disponíveis no Site

A página oferece:

### Filtros e Busca
- **Busca por texto**: Filtra por nome, tipo ou descrição
- **Filtro por tipo**: 
  - ☑️ Arma
  - ☑️ Armadura
  - ☑️ Item Especial
  - ☑️ Acessório

### Visualização e Organização
- **Agrupar por Descrição**: Agrupa itens com a mesma descrição (clique no grupo para expandir/recolher)
- **Ordenar por Raridade**: Ordena do Mítico → Comum
- **Ordenação por Colunas**: Clique nos cabeçalhos para ordenar (▲/▼)
- **Modal de Detalhes**: Clique em qualquer linha para ver detalhes completos
- **Imagem no Hover**: Passe o mouse sobre a thumbnail para ampliar
- **Galeria de Imagens no Modal**: 
  - Imagem grande exibida ao lado do conteúdo (coluna H)
  - Suporte para múltiplas imagens (separe URLs por vírgula)
  - Navegação com setas ‹ › quando há múltiplas imagens
  - Contador de imagens (ex: 1 / 3)

---

## 💡 Dicas e Boas Práticas

### 1. **Nomeação Clara**
Use nomes descritivos e únicos.

❌ **Ruim**: `Espada`  
✅ **Bom**: `Espada Flamejante do Dragão`

### 2. **Descrições Detalhadas**
Inclua informações sobre bonus e efeitos.

❌ **Ruim**: `Armadura boa`  
✅ **Bom**: `Armadura com bonus especiais. Aumenta DEF em 15% e HP em 200`

### 3. **Local de Farm Específico**
Seja preciso sobre onde obter.

❌ **Ruim**: `Mapa X`  
✅ **Bom**: `Boss HQ Bellato, droprate 5%`

### 4. **Raridade Consistente**
Use sempre uma das raridades padrão:
- Comum
- Raro
- Épico
- Lendário
- Mítico

---

## 🖼️ Sobre as Imagens

### Onde Hospedar
Recomendamos:
- **Imgur** (https://imgur.com) - Gratuito e simples
- **Google Drive** (público) - Se você já usa Google
- **GitHub** - Se o projeto está no GitHub

### URLs de Imagem
Use URLs diretas para a imagem:

✅ **Correto**: `https://i.imgur.com/abc123.png`  
❌ **Errado**: `https://imgur.com/abc123` (página, não imagem)

### Se não tiver imagem
- Deixe a coluna G vazia
- Um placeholder será exibido automaticamente

---

## 🔒 Permissões da Planilha

**IMPORTANTE**: A planilha deve estar configurada como:

- **Acesso**: "Qualquer pessoa com o link"
- **Permissão**: "Visualizador" (não "Editor")

### Como Configurar:

1. Clique em **"Compartilhar"** (canto superior direito)
2. Em "Acesso geral", selecione: **"Qualquer pessoa com o link"**
3. Certifique-se de que está em **"Visualizador"**
4. Clique em "Concluído"

---

## 🔄 Sistema de Cache

O sistema mantém uma cópia local dos dados por **5 minutos** para melhor performance.

### Para Ver Atualizações Imediatamente:

1. **Limpar Cache do Navegador**:
   - Pressione `F12`
   - Vá na aba "Console"
   - Digite: `localStorage.clear()`
   - Pressione Enter
   - Recarregue a página (`Ctrl + F5`)

2. **Aguardar 5 minutos**:
   - O cache expira automaticamente

---

## 🐛 Troubleshooting

### Problema: Itens não aparecem

**Soluções:**
1. Verifique se a planilha está pública
2. Confirme que o nome da aba é exatamente "item" (minúsculo)
3. Verifique se há dados na planilha (não só cabeçalhos)
4. Abra o console do navegador (F12) e veja os erros

### Problema: Dados desatualizados

**Soluções:**
1. Aguarde 5 minutos (duração do cache)
2. Limpe o cache: `localStorage.clear()` no console
3. Recarregue com `Ctrl + F5`

### Problema: Erro de permissão

**Soluções:**
1. Verifique se a planilha está pública
2. Confirme o ID da planilha em `configlists.js`
3. Certifique-se de que o nome da aba está correto

---

## 📝 Exemplo Completo de Planilha

```
| A (Nome)          | B (Tipo)      | C (Level) | D (Descrição)                    | E (Local Farm)      | F (Raridade) | G (Imagem Thumb)              | H (Imagem Popup)                                          |
|-------------------|---------------|-----------|----------------------------------|---------------------|--------------|-------------------------------|-----------------------------------------------------------|
| Espada Flame      | Arma          | 50        | Espada poderosa com fogo         | Boss HQ Bellato     | Épico        | https://i.imgur.com/abc.png   | https://i.imgur.com/abc1.png, https://i.imgur.com/abc2.png |
| Armadura Dragon   | Armadura      | 50        | Armadura de escamas de dragão    | Boss Crag Mines     | Lendário     | https://i.imgur.com/def.png   | https://i.imgur.com/def-lg.png                            |
| Poção de Vida     | Item Especial | 1         | Restaura 500 HP                  | NPC Shop Central    | Comum        |                               |                                                           |
| Anel de Proteção  | Acessório     | 45        | Aumenta defesa em 10%            | Quest Daily Portal  | Raro         |                               |                                                           |
```

**Dicas**: 
- Se você só tem uma imagem, coloque apenas na coluna G. O sistema usará ela tanto na tabela quanto no modal.
- Para múltiplas imagens no popup, separe as URLs por vírgula na coluna H.
- O modal mostrará setas de navegação automaticamente quando houver múltiplas imagens.

---

## 🖼️ Suporte para Imagens do prnt.sc

O sistema detecta e processa automaticamente URLs do **prnt.sc** (PrintScreen):

### Como funciona

1. **Detecção automática**: Quando uma URL começa com `https://prnt.sc/`, o sistema automaticamente:
   - Faz fetch da página HTML
   - Extrai a imagem com a classe `.no-click.screenshot-image`
   - Exibe a imagem real

2. **Onde usar**: Funciona em ambas as colunas (G e H)
   - **Coluna G**: Thumbnail na tabela
   - **Coluna H**: Galeria no modal

3. **Múltiplas imagens**: Você pode misturar URLs diretas e prnt.sc
   ```
   https://i.imgur.com/img1.png, https://prnt.sc/abc123, https://prnt.sc/xyz789
   ```

### Exemplo

```
Coluna G: https://prnt.sc/R3_5imE9zzgT
Coluna H: https://prnt.sc/image1, https://prnt.sc/image2, https://i.imgur.com/image3.png
```

### Observações

- ⏳ **Loading**: URLs do prnt.sc demoram um pouco mais para carregar (precisa fazer fetch da página)
- 🔄 **Fallbacks**: Sistema tenta 3 seletores:
  1. `.no-click.screenshot-image` (principal)
  2. `.screenshot-image` (alternativo)
  3. `img[src*="prnt"]` (genérico)
- 📝 **Console**: Logs de debug são exibidos no console do navegador (F12)

---

## 🎯 Sistema Escalável

Este é um sistema **escalável**! Você pode adicionar mais listas facilmente:

### Para Adicionar Nova Lista (ex: Boss):

1. **Edite `configlists.js`** e adicione:
```javascript
window.DLLists.boss = {
  spreadsheetId: 'OUTRA_PLANILHA_ID',
  sheetName: 'boss',
  // ... configurações
};
```

2. **Crie uma página** `.md` com:
```html
<div class="boss-panel-sheets" data-list-id="boss"></div>
```

3. **Pronto!** Zero modificação em código JavaScript!

---

## 📞 Suporte

**Console do Navegador (F12):**

Se funcionar, você verá:
```
📊 Iniciando carregamento da lista: items
🌐 Buscando dados da API para items...
✅ 4 itens carregados para items
💾 Cache salvo para items
```

Se tiver erro, compartilhe a mensagem de erro com a equipe.

---

## 📚 Documentação Adicional

- [`GOOGLE_SHEETS_INTEGRATION.md`](GOOGLE_SHEETS_INTEGRATION.md) - Guia completo do sistema
- [`TESTE_RAPIDO.md`](TESTE_RAPIDO.md) - Guia de teste rápido
- [`configlists.js`](configlists.js) - Arquivo de configuração

---

**Sistema de Catálogo de Itens v2.0 - Powered by Google Sheets**  
**Última atualização**: Janeiro 2026
