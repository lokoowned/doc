# 🏷️ Guia de Uso: Sistema de Item Tags (ItemList)

## 📖 Visão Geral

O sistema **ItemList** permite criar tooltips interativos para itens em qualquer tabela do site. Ao passar o mouse sobre o nome de um item, um shadowbox aparece mostrando detalhes completos.

---

## 🚀 Como Configurar

### Passo 1: Criar a Aba ItemList

Na planilha `1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM`, crie uma aba chamada **`ItemList`** com as seguintes colunas:

| Coluna | Nome | Descrição | Exemplo |
|--------|------|-----------|---------|
| A | Item Name | Nome completo do item | `Espada Flamejante` |
| B | Item Type | Categoria do item | `Arma`, `Consumível`, `Acessório` |
| C | Item Icon | URL do ícone (48x48px recomendado) | `https://prnt.sc/abc123` |
| D | Item Description | Descrição detalhada do item | `Espada lendária que emana chamas eternas` |

**Exemplo de Dados:**

```
| Item Name           | Item Type    | Item Icon                    | Item Description                              |
|---------------------|--------------|------------------------------|-----------------------------------------------|
| Espada Flame        | Arma         | https://prnt.sc/E0EMeGIQ7fpw | Espada poderosa imbuída com poder de fogo     |
| Armadura Dragon     | Armadura     | https://i.imgur.com/def.png  | Armadura feita de escamas de dragão           |
| Poção de Vida       | Consumível   |                              | Restaura 500 HP instantaneamente              |
| Anel de Proteção    | Acessório    | https://prnt.sc/xyz789      | Aumenta defesa em 10%                         |
```

---

### Passo 2: Usar em Outras Listas

Em **qualquer outra aba/lista** da planilha, você pode criar uma coluna que lista itens:

#### Opção 1: Nomear a Coluna como "ItemList"

```
| Boss Name      | Level | ItemList                                    |
|----------------|-------|---------------------------------------------|
| Dragon King    | 60    | Espada Flame, Armadura Dragon               |
| Fire Elemental | 50    | Poção de Vida, Anel de Proteção             |
```

#### Opção 2: Nomear a Coluna como "Item List" (com espaço)

```
| Quest Name           | Difficulty | Item List                        |
|----------------------|------------|----------------------------------|
| A Lenda do Dragão    | Difícil    | Espada Flame, Armadura Dragon    |
| Missão de Cura       | Fácil      | Poção de Vida                    |
```

---

## 🎨 Como Aparece no Site

### 1. **Visualização na Tabela**

A coluna ItemList aparece como uma **badge "Drop"** com contador:

```
ItemList: [Drop (3)]
          ^^^^^^^^^^^
     (hover para ver detalhes)
```

### 2. **Tooltip ao Passar o Mouse sobre "Drop"**

Quando você passa o mouse sobre a badge "Drop", aparece um shadowbox ordenado com a lista completa de itens:

```
┌──────────────────────────────────────────┐
│  📦 Itens que Dropam                     │
│  ────────────────────────────────────    │
│                                          │
│  🖼️ Espada Flame                        │
│      Arma                                │
│                                          │
│  🖼️ Armadura Dragon                     │
│      Armadura                            │
│                                          │
│  🖼️ Poção de Vida                       │
│      Consumível                          │
└──────────────────────────────────────────┘
```

**Conteúdo do Tooltip:**
- Lista organizada de todos os itens
- Ícone de cada item (32x32px)
- Nome e tipo destacados
- Scroll automático se houver muitos itens

### 3. **Seção de Drops no Popup do Item**

Quando você **clica em uma linha da tabela**, o popup do item abre e mostra uma seção especial de drops na parte inferior:

```
┌────────────────────────────────────────────────┐
│  Item: Set Dragon Gold                         │
│  ───────────────────────────────────────────   │
│  Nome: Set Dragon Gold                         │
│  Tipo: Set                                     │
│  Level: 60                                     │
│  ...                                           │
│                                                │
│  📦 Itens que Dropam                           │
│  ───────────────────────────────────────────   │
│  ┌──────────────┐  ┌──────────────┐           │
│  │ 🖼️ Espada    │  │ 🖼️ Armadura  │           │
│  │    Flame     │  │    Dragon    │           │
│  │    Arma      │  │    Armadura  │           │
│  └──────────────┘  └──────────────┘           │
│                                                │
│  [Fechar]                                      │
└────────────────────────────────────────────────┘
```

**Recursos da Seção de Drops:**
- Grid responsivo com ícones maiores (48x48px)
- Nome e tipo de cada item
- Hover effect em cada card
- Indicação visual se item não foi encontrado

---

## 🔍 Detecção Automática

O sistema detecta automaticamente colunas com os seguintes nomes:
- `itemlist` (sem espaço, minúsculas/maiúsculas)
- `item list` (com espaço)
- `ItemList` (CamelCase)
- `Item List` (com espaço e maiúsculas)

**Não é necessário** configurar nada extra! Basta nomear a coluna corretamente.

---

## 💡 Dicas e Boas Práticas

### ✅ Faça

1. **Use nomes exatos**: O nome do item na coluna `ItemList` deve ser **idêntico** ao nome na aba `ItemList` (A coluna)
2. **Separe por vírgula**: `Item1, Item2, Item3`
3. **Adicione espaços**: `Item1, Item2` (mais legível que `Item1,Item2`)
4. **Use ícones pequenos**: 48x48px ou 64x64px são ideais
5. **Aproveite prnt.sc**: O sistema extrai automaticamente a imagem real

### ❌ Evite

1. **Nomes diferentes**: Se na aba ItemList o item se chama `Espada Flame`, não use `Espada de Fogo` na lista
2. **Espaços extras**: `Item1 ,  Item2` funciona, mas `Item1, Item2` é melhor
3. **Ícones grandes**: Imagens muito grandes (>200KB) podem demorar para carregar

---

## 🧪 Exemplo Completo

### Planilha: Aba "ItemList"

```
| A                | B          | C                             | D                                      |
|------------------|------------|-------------------------------|----------------------------------------|
| Espada Flame     | Arma       | https://prnt.sc/abc123       | Espada poderosa com poder de fogo      |
| Armadura Dragon  | Armadura   | https://i.imgur.com/def.png  | Armadura de escamas de dragão          |
| Poção de Vida    | Consumível |                               | Restaura 500 HP instantaneamente       |
```

### Planilha: Aba "Boss"

```
| A (Boss Name)    | B (Level) | C (ItemList)                      |
|------------------|-----------|-----------------------------------|
| Dragon King      | 60        | Espada Flame, Armadura Dragon     |
| Fire Elemental   | 50        | Poção de Vida                     |
```

### Resultado no Site

Quando a página "Boss" carregar:
- A coluna "ItemList" será detectada automaticamente
- Os itens `Espada Flame` e `Armadura Dragon` aparecerão como tags clicáveis
- Ao passar o mouse, o tooltip mostrará todas as informações do item

---

## 🐛 Solução de Problemas

### Item não aparece no tooltip

**Problema**: Aparece "Item não encontrado"

**Soluções**:
1. Verifique se o nome do item está **exatamente igual** na aba ItemList
2. Verifique se há espaços extras antes/depois do nome
3. Confirme que a aba ItemList foi carregada (veja o console do navegador - F12)

### Ícone não carrega

**Problema**: Ícone não aparece no tooltip

**Soluções**:
1. Verifique se a URL está correta e acessível
2. Para prnt.sc, aguarde alguns segundos (extração pode demorar)
3. Teste a URL diretamente no navegador

### Tooltip não aparece

**Problema**: Nada acontece ao passar o mouse

**Soluções**:
1. Verifique se a coluna se chama "ItemList" ou "Item List"
2. Recarregue a página (F5)
3. Abra o console (F12) e procure por erros
4. Confirme que há itens listados na célula (separados por vírgula)

---

## 📝 Checklist de Implementação

- [ ] Criar aba `ItemList` na planilha
- [ ] Adicionar colunas: Item Name, Item Type, Item Icon, Item Description
- [ ] Preencher dados dos itens
- [ ] Garantir que a planilha está pública ("Anyone with the link can view")
- [ ] Criar/editar outra aba com uma coluna chamada "ItemList"
- [ ] Preencher com nomes de itens separados por vírgula
- [ ] Recarregar o site e testar o hover

---

## 🎯 Perguntas Frequentes

### Posso usar em quantas listas?

Sim! Você pode criar uma coluna "ItemList" em **qualquer número de abas/listas** na planilha.

### Preciso configurar algo no código?

Não! O sistema detecta automaticamente qualquer coluna com nome "itemlist" ou "item list".

### Posso ter múltiplos itens na mesma célula?

Sim! Separe-os por vírgula: `Item1, Item2, Item3, Item4`

### O ícone é obrigatório?

Não. Se não houver ícone (coluna C vazia), o tooltip mostrará apenas nome, tipo e descrição.

### Funciona com prnt.sc?

Sim! O sistema extrai automaticamente a imagem real de links do prnt.sc.

---

## 📞 Suporte

Se tiver problemas:
1. Verifique o console do navegador (F12)
2. Procure por mensagens começando com `🔍`, `✅` ou `❌`
3. Confirme que o banco de dados foi carregado: procure por `"Banco de dados de itens carregado"`
