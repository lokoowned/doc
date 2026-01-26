# 📦 Gerenciamento do Catálogo de Itens

Este documento explica como gerenciar o catálogo de itens da DarkLegion usando o arquivo `itens.csv`.

---

## 📁 Estrutura do Arquivo CSV

O arquivo `itens.csv` utiliza **ponto e vírgula (`;`)** como delimitador e possui as seguintes colunas:

| Coluna | Nome | Descrição | Obrigatório | Exemplo |
|--------|------|-----------|-------------|---------|
| A | Nome | Nome completo do item | ✅ Sim | `Espada Flamejante` |
| B | Tipo | Categoria do item | ✅ Sim | `Arma`, `Armadura`, `Item Especial`, `Acessório` |
| C | Level | Nível ou range de nível | ✅ Sim | `40` ou `35-42` |
| D | Descrição | Descrição detalhada do item | ✅ Sim | `Espada de duas mãos com dano de fogo adicional` |
| E | Local de Farm | Onde o item pode ser obtido | ❌ Não | `Sette Desert - Vulcanic Area` |
| F | Raridade | Raridade do item | ✅ Sim | `Comum`, `Incomum`, `Raro`, `Épico`, `Lendário` |
| G | Imagem | Caminho para imagem do item | ❌ Não | `imagens/itens/espada-flamejante.png` |

---

## 🎨 Raridades e Cores

As raridades são exibidas com cores diferentes:

| Raridade | Cor | Descrição |
|----------|-----|-----------|
| **Comum** | Cinza | Itens básicos e facilmente obtidos |
| **Incomum** | Verde | Itens com propriedades moderadas |
| **Raro** | Azul | Itens difíceis de obter com boas propriedades |
| **Épico** | Roxo | Itens muito raros com propriedades poderosas |
| **Lendário** | Laranja (com brilho) | Itens extremamente raros e poderosos |

---

## 📝 Exemplo de Linha no CSV

```csv
Espada Flamejante;Arma;40;Espada de duas mãos com dano de fogo adicional;Sette Desert - Vulcanic Area;Épico;imagens/itens/espada-flamejante.png
```

---

## ✏️ Como Adicionar um Novo Item

1. Abra o arquivo `itens.csv` no Excel, LibreOffice Calc ou editor de texto
2. Adicione uma nova linha com os dados do item
3. **Importante**: Use ponto e vírgula (`;`) para separar as colunas
4. Salve o arquivo
5. Recarregue a página no navegador

### Exemplo Completo:

```csv
Nome;Tipo;Level;Descrição;Local de Farm;Raridade;Imagem
Espada Flamejante;Arma;40;Espada de duas mãos com dano de fogo adicional;Sette Desert - Vulcanic Area;Épico;imagens/itens/espada-flamejante.png
Armadura de Glory (Lv41);Armadura;35-42;Armadura com bonus especiais farmada por Glory Points;Sette Desert - Nova Área;Raro;imagens/itens/armadura-glory-41.png
Protetor de Recurso 24h;Item Especial;1;Evita que recursos dropem ao morrer por 24 horas;Cash Shop (500) ou NPC (5kk);Comum;imagens/itens/protetor-recurso.png
Anel de Proteção;Acessório;30;Aumenta defesa em 5%;Elan - Boss Calliana;Incomum;imagens/itens/anel-protecao.png
Elmo Lendário;Armadura;50;Elmo supremo com resistências elevadas;Crag Mine - Final Boss;Lendário;imagens/itens/elmo-lendario.png
```

---

## 🔍 Filtros Disponíveis

A página de itens oferece os seguintes filtros:

- **Busca por texto**: Filtra por nome, tipo ou descrição
- **Filtro por tipo**: 
  - ✅ Armas
  - ✅ Armaduras
  - ✅ Itens Especiais
  - ✅ Acessórios

---

## 💡 Dicas e Boas Práticas

### 1. **Nomeação Clara**
Use nomes descritivos e únicos para cada item.

❌ **Ruim**: `Espada`  
✅ **Bom**: `Espada Flamejante do Dragão`

### 2. **Descrições Detalhadas**
Inclua informações sobre bonus, efeitos especiais e como usar.

❌ **Ruim**: `Armadura boa`  
✅ **Bom**: `Armadura com bonus especiais farmada por Glory Points. Aumenta DEF em 15% e HP em 200`

### 3. **Local de Farm Específico**
Seja preciso sobre onde o item pode ser obtido.

❌ **Ruim**: `Mapa X`  
✅ **Bom**: `Elan - PB RJ, próximo ao portal de Crag Mine`

### 4. **Range de Level**
Para itens que funcionam em múltiplos níveis, use range.

- **Item fixo**: `50`
- **Item com range**: `35-42`
- **Item sem restrição**: `1` ou `Todos`

### 5. **Raridade Consistente**
Use sempre uma das raridades padrão:
- Comum
- Incomum
- Raro
- Épico
- Lendário

---

## 🛠️ Editando no Excel/LibreOffice

### Configuração Correta:

1. **Delimitador**: Configure para usar ponto e vírgula (`;`)
2. **Codificação**: UTF-8 (para suportar acentos)
3. **Sem cabeçalho visual**: A primeira linha deve conter dados de item

### ⚠️ Problemas Comuns:

#### Problema: Colunas misturadas
**Causa**: Delimitador errado (vírgula em vez de ponto e vírgula)  
**Solução**: Configure o Excel para usar `;` como separador de células

#### Problema: Caracteres estranhos
**Causa**: Codificação incorreta  
**Solução**: Salve o arquivo como "CSV UTF-8"

#### Problema: Itens não aparecem
**Causa**: Linhas vazias ou formatação incorreta  
**Solução**: Remova linhas vazias e verifique se todas as colunas obrigatórias estão preenchidas

---

## 🎯 Tipos de Itens Suportados

Você pode adicionar novos tipos conforme necessário. Os tipos atuais são:

- **Arma**: Espadas, lanças, arcos, rifles, bazucas, etc.
- **Armadura**: Capacetes, peitoral, calças, botas, etc.
- **Item Especial**: Consumíveis, recursos, protectores, etc.
- **Acessório**: Anéis, colares, brincos, talismãs, etc.

Para adicionar um novo tipo, basta incluir itens com o novo tipo no CSV e adicionar um checkbox correspondente no código HTML (se desejar filtro específico).

---

## 📊 Estatísticas

O sistema exibe automaticamente:

- **Total de itens**: Contagem total no catálogo
- **Mostrando**: Quantidade de itens visíveis após aplicar filtros

---

## 🖼️ Sobre as Imagens

### Estrutura de Pastas
Recomenda-se organizar as imagens em:
```
imagens/
  └── itens/
      ├── armas/
      ├── armaduras/
      ├── acessorios/
      └── especiais/
```

### Formatos Suportados
- PNG (recomendado para transparência)
- JPG/JPEG
- WEBP
- GIF

### Recomendações
- **Tamanho**: 128x128px ou 256x256px
- **Fundo**: Transparente ou escuro
- **Formato**: PNG com transparência
- **Nomenclatura**: Use kebab-case (ex: `espada-flamejante.png`)

### Se não tiver imagem
- Deixe a coluna G vazia
- Um placeholder será exibido automaticamente

## 🔄 Atualizações Futuras

Possíveis melhorias para o sistema de itens:

- [x] Imagens dos itens
- [ ] Ícones por tipo de item
- [ ] Comparação de itens
- [ ] Calculadora de stats
- [ ] Sistema de builds recomendados
- [ ] Avaliações/comentários da comunidade
- [ ] Tags adicionais (PvP, PvE, Farm, etc.)

---

## 📞 Suporte

Se tiver dúvidas ou encontrar problemas:

1. Verifique se o arquivo CSV está no formato correto
2. Confira se todas as colunas obrigatórias estão preenchidas
3. Entre em contato com a administração da guilda

---

**Última atualização**: Janeiro 2026
