# 🚀 Guia Prático - Quest List

**Como usar e manter a Quest List integrada**

---

## 📝 Preenchendo a Planilha

### Acesso
1. Abra: [Planilha QuestList](https://docs.google.com/spreadsheets/d/1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM/edit#gid=0)
2. Navegue até a aba **QuestList**

### Formato das Colunas

```
┌──────┬─────────────────────┬────────┬─────────────────┐
│  A   │         B           │   C    │       D         │
├──────┼─────────────────────┼────────┼─────────────────┤
│  1   │ Matar Goblins       │ sette  │ 150,200         │
│  1   │ Matar Goblins       │ sette  │ 180,220         │
│  2   │ Coletar Crystals    │ elan   │ 100,150;120,160 │
│  3   │ Boss Dragon         │ chaos  │ 300,400         │
└──────┴─────────────────────┴────────┴─────────────────┘
```

### Regras

**Coluna A - Número da Quest:**
- Agrupa quests com mesmo número
- Exemplo: Quest `1` aparece 2x = todas coordenadas são agrupadas

**Coluna B - Nome:**
- Nome descritivo da quest
- Aparece na lista principal

**Coluna C - Mapa:**
- Nome do arquivo do mapa (SEM extensão `.png`)
- Deve existir em: `https://www.darklegionrf.com/docimages/maps/{nome}.png`
- Exemplos válidos: `sette`, `elan`, `chaos`

**Coluna D - Coordenadas:**
- **Uma coordenada:** `150,200` (x=150, y=200)
- **Múltiplas:** `150,200;180,220;300,400` (separadas por `;`)
- Cada coordenada plota um ícone de monstro no mapa

---

## 🗺️ Adicionando Novos Mapas

### 1. Preparar Imagem
- Formato: PNG
- Tamanho recomendado: 500-800px largura
- Nome: `{nome-do-mapa}.png` (sem espaços, minúsculas)

### 2. Upload
- Faça upload para: `https://www.darklegionrf.com/docimages/maps/`
- Exemplo: `https://www.darklegionrf.com/docimages/maps/sette.png`

### 3. Usar na Planilha
- Coluna C = `sette` (nome do arquivo sem extensão)

---

## 🎯 Pegando Coordenadas do Mapa

### Método 1: Paint / Editor de Imagem
1. Abra a imagem do mapa no Paint
2. Posicione o cursor no ponto desejado
3. Veja as coordenadas no canto inferior (geralmente em pixels)
4. Anote: `x,y`

### Método 2: Ferramentas Online
1. Use: [Image Map Generator](https://www.image-map.net/)
2. Upload da imagem
3. Clique nos pontos desejados
4. Copie as coordenadas

---

## 📊 Exemplos Práticos

### Exemplo 1: Quest Simples
Uma quest, um local.

```
A: 1
B: Matar 10 Slimes
C: elan
D: 200,300
```

**Resultado:** Quest "Matar 10 Slimes" no mapa Elan com 1 marcador em (200,300)

---

### Exemplo 2: Quest com Múltiplos Locais (Mesma Linha)
Uma quest, vários locais na mesma linha.

```
A: 2
B: Coletar Cristais
C: chaos
D: 100,150;300,400;500,200
```

**Resultado:** Quest "Coletar Cristais" no mapa Chaos com 3 marcadores

---

### Exemplo 3: Quest com Múltiplos Locais (Linhas Separadas)
Uma quest, vários locais em linhas diferentes (agrupados pelo número).

```
Linha 1: A=3, B=Boss Raid, C=dungeonX, D=150,200
Linha 2: A=3, B=Boss Raid, C=dungeonX, D=300,400
Linha 3: A=3, B=Boss Raid, C=dungeonX, D=450,100
```

**Resultado:** Quest "Boss Raid" com 3 marcadores (todas coordenadas agrupadas)

---

## ⚙️ Alterando Configurações

### Onde alterar?
Arquivo: `scripts/config-quest-list.js`

### Exemplos de alterações:

**Mudar duração do cache (padrão 5min):**
```javascript
CACHE_DURATION_MS: 10 * 60 * 1000, // 10 minutos
```

**Mudar URL base dos mapas:**
```javascript
MAP_BASE_URL: 'https://meusite.com/mapas/',
```

**Mudar mensagem de carregamento:**
```javascript
MESSAGES: {
  LOADING: '🔄 Buscando dados...',
  // ...
}
```

---

## 🐛 Problemas Comuns

### Mapa não aparece no tooltip
✅ **Verifique:**
- URL do mapa está correta?
- Arquivo `.png` existe no servidor?
- Nome na coluna C está correto (sem `.png`)?

### Coordenadas não aparecem
✅ **Verifique:**
- Formato correto: `x,y` ou `x,y;x2,y2`
- Sem espaços extras
- Coordenadas dentro do limite da imagem

### Lista não carrega
✅ **Verifique:**
- Planilha está pública (acesso de leitura)?
- ID da planilha está correto?
- Nome da aba é exatamente `QuestList`?
- Console do navegador (F12) mostra erros?

---

## 🔍 Testando Alterações

1. **Edite a planilha**
2. **Aguarde até 5 minutos** (cache)
3. **Ou force reload:** Ctrl+Shift+R no navegador
4. **Ou limpe o cache manualmente:**
   ```javascript
   // Console do navegador (F12)
   window.QuestListLoader.clearCache();
   location.reload();
   ```

---

## 📱 Visualização

### Desktop
- Tooltip aparece ao lado direito da lupa
- Mapa em tamanho completo (até 600px)

### Mobile
- ⚠️ Tooltip pode ficar cortado em telas pequenas
- Solução futura: Adaptar posicionamento

---

## ✅ Checklist de Manutenção

Ao adicionar nova quest:
- [ ] Preencher coluna A (número único ou existente)
- [ ] Preencher coluna B (nome descritivo)
- [ ] Preencher coluna C (nome do mapa sem extensão)
- [ ] Preencher coluna D (coordenadas no formato correto)
- [ ] Verificar se imagem do mapa existe online
- [ ] Testar no site após ~5 minutos

---

**Dúvidas?** Consulte `notes/01-quest-list-integration.md` para detalhes técnicos.
