# 🧪 Teste Rápido - Sistema Google Sheets

## ✅ Correções Aplicadas

1. ✅ Plugin Google Sheets agora usa marcadores únicos (`data-source="sheets"`)
2. ✅ Plugin CSV ignora elementos do Google Sheets
3. ✅ Sem conflitos entre os dois sistemas

## 🎯 Próximo Passo: Configurar a Planilha

### 1. Acesse a Planilha

```
https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit
```

### 2. Configure a Aba "item"

Crie ou renomeie uma aba para "item" (exatamente esse nome, minúsculo).

### 3. Adicione os Cabeçalhos (Linha 1)

```
| A - Nome | B - Tipo | C - Level | D - Descrição | E - Local de Farm | F - Raridade | G - Imagem | H - Imagem Popup |
```

### 4. Adicione Dados de Exemplo (Linha 2+)

```
Linha 2:
A: Espada Flame
B: Arma
C: 50
D: Espada poderosa imbuída com poder de fogo
E: Boss HQ Bellato
F: Épico
G: https://i.imgur.com/thumb.png ou https://prnt.sc/abc123 (thumbnail - opcional)
H: https://i.imgur.com/large1.png, https://prnt.sc/xyz789 (múltiplas imagens, suporta prnt.sc - opcional)

Linha 3:
A: Armadura Dragon
B: Armadura
C: 50
D: Armadura lendária feita de escamas de dragão
E: Drop Boss Crag Mines
F: Lendário
G: https://i.imgur.com/thumb2.png
H: https://i.imgur.com/large2.png (uma única imagem também funciona)

Linha 4:
A: Poção de Vida
B: Item Especial
C: 1
D: Restaura 500 HP
E: NPC Shop Central
F: Comum
G: (vazio)

Linha 5:
A: Anel de Proteção
B: Acessório
C: 45
D: Aumenta defesa em 10%
E: Quest Daily Portal
F: Raro
G: (vazio)
```

### 5. Torne a Planilha Pública

**IMPORTANTE:**
1. Clique em **"Compartilhar"** (canto superior direito)
2. Em "Acesso geral", mude para: **"Qualquer pessoa com o link"**
3. Certifique-se de que está em **"Visualizador"** (não Editor)
4. Clique em "Concluído"

### 6. Teste no Navegador

1. Acesse: `http://localhost:3000`
2. Navegue até: **"Catálogo de Itens (Sheets)"** no menu
3. Aguarde alguns segundos para carregar

### 7. Verificar no Console do Navegador

Pressione **F12** e vá na aba "Console". Você deve ver:

```
✅ Usando cache para items (idade: Xs)
OU
🌐 Buscando dados da API para items...
✅ 4 itens carregados para items
💾 Cache salvo para items
```

## 🐛 Se Não Funcionar

### Erro: "Formato de resposta inválido"
- A planilha não está pública
- O nome da aba não é "item" (minúsculo)

### Erro: "API retornou status: error"
- Permissões incorretas na planilha
- Planilha vazia ou sem dados

### Nenhum erro mas não carrega
- Limpe o cache: `localStorage.clear()` no console
- Recarregue com Ctrl+F5

### Ver erros detalhados
```javascript
// Cole no console do navegador:
localStorage.clear();
location.reload();
```

## 📊 Estrutura das Raridades

O sistema suporta 5 níveis de raridade (com cores diferentes):

- **Comum** - Cinza
- **Raro** - Azul (com brilho)
- **Épico** - Roxo (com brilho)
- **Lendário** - Dourado (com brilho)
- **Mítico** - Vermelho (com animação pulsante)

## ✨ Recursos Funcionando

- ✅ Carregamento automático do Google Sheets
- ✅ Cache de 5 minutos (localStorage)
- ✅ Busca por nome, tipo ou descrição
- ✅ Filtros por tipo (checkboxes)
- ✅ Modal com detalhes ao clicar
- ✅ Responsivo (mobile e desktop)
- ✅ Tratamento de erros
- ✅ Fallback para cache em caso de erro

## 🎉 Após Funcionar

Você pode:

1. **Editar dados** diretamente na planilha Google Sheets
2. **Aguardar 5 minutos** ou limpar cache para ver atualizações
3. **Adicionar mais listas** seguindo o padrão em `configlists.js`
4. **Customizar** cores, estilos, filtros por lista

## 📝 Próximas Listas Sugeridas

Depois de testar items, você pode adicionar:

- Lista de Boss
- Lista de Quests
- Lista de NPCs
- Lista de Drops
- Lista de Localizações

Cada uma leva menos de 5 minutos para configurar!
