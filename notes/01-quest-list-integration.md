# 📝 Nota 01 - Integração Quest List com Google Sheets

**Data:** 2026-02-10  
**Módulo:** Quest List / DQ Portais  
**Status:** ✅ Implementado

---

## 🎯 Objetivo

Criar uma seção interativa no arquivo `dq-portais.md` que busca dados de quests de uma planilha do Google Sheets e exibe com mapa interativo.

## 📦 O que foi criado

### Arquivos Novos

1. **`scripts/config-quest-list.js`**
   - Configurações centralizadas (IDs, URLs, cache, mensagens)
   - Facilita manutenção futura

2. **`scripts/quest-list-loader.js`**
   - Classe para carregar dados da planilha
   - Renderiza lista de quests
   - Gerencia tooltip com mapa e marcadores

3. **`scripts/README.md`**
   - Documentação técnica dos scripts

4. **`notes/01-quest-list-integration.md`** (este arquivo)
   - Anotações sobre a implementação

### Arquivos Modificados

1. **`custom.css`**
   - Estilos para lista de quests
   - Estilos para shadowbox/tooltip
   - Animações para marcadores de monstros

2. **`default/dq-portais.md`**
   - Nova seção `<details>` com Quest List
   - Scripts integrados

---

## 🔗 Planilha do Google Sheets

**ID:** `1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM`  
**Tab:** `QuestList`

### Estrutura das Colunas

| Coluna | Nome | Descrição | Exemplo |
|--------|------|-----------|---------|
| A | Número da Quest | Agrupa quests com mesmo número | `1`, `2`, `3` |
| B | Nome | Nome da quest | `Matar Goblins` |
| C | Mapa | Nome do arquivo do mapa (sem extensão) | `sette`, `elan` |
| D | Coordenadas | Formato `x,y` ou múltiplas separadas por `;` | `150,200` ou `150,200;300,400` |

---

## 🎨 Funcionalidades

### Lista de Quests
- ✅ Exibe Nome e Mapa
- ✅ Ícone de lupa 🔍 para cada quest
- ✅ Hover animado nos itens
- ✅ Design moderno com neon azul

### Tooltip/Shadowbox
- ✅ Aparece ao passar mouse na lupa
- ✅ Mostra imagem do mapa
- ✅ Plota marcadores de monstro nas coordenadas
- ✅ Animação de pulse nos marcadores
- ✅ Efeito neon no contorno

### Sistema de Cache
- ⏱️ 5 minutos de cache
- 💾 Reduz requisições à planilha
- 🔄 Fallback para cache antigo em caso de erro

---

## 📁 URLs de Recursos

**Mapas:** `https://www.darklegionrf.com/docimages/maps/{nome-mapa}.png`  
**Ícone Mob:** `https://www.darklegionrf.com/docimages/maps/mob.png`

---

## 🔧 Como Usar em Outros Arquivos

```html
<div id="meu-container"></div>

<script src="../scripts/config-quest-list.js"></script>
<script src="../scripts/quest-list-loader.js"></script>
<script>
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.QuestListLoader.renderQuestList('meu-container');
    });
  } else {
    window.QuestListLoader.renderQuestList('meu-container');
  }
</script>
```

---

## ⚙️ Configurações Disponíveis

Edite `scripts/config-quest-list.js` para alterar:

- 🆔 IDs da planilha
- 🌐 URLs base de imagens
- ⏱️ Duração do cache
- 💬 Mensagens de feedback
- 🎨 Configurações visuais

---

## ⚠️ Possíveis Melhorias Futuras

1. **Filtros:** Adicionar filtro por mapa
2. **Busca:** Campo de busca por nome de quest
3. **Zoom:** Permitir zoom nas imagens do mapa
4. **Mobile:** Adaptar tooltip para telas pequenas
5. **Lazy Load:** Carregar imagens sob demanda
6. **Paginação:** Se houver muitas quests

---

## 🧪 Testando

1. Abra `default/dq-portais.md` no navegador
2. Role até "Lista de Quests por Monstros"
3. Expanda o details
4. Passe o mouse sobre a lupa 🔍
5. Verifique se o mapa aparece com marcadores

---

## 📊 Exemplo de Dados na Planilha

| A | B | C | D |
|---|---|---|---|
| 1 | Matar Goblins | sette | 150,200;180,220 |
| 1 | Matar Goblins | sette | 300,400 |
| 2 | Coletar Crystals | elan | 100,150 |

**Resultado:** Quest 1 terá 3 marcadores (coordenadas são agrupadas)

---

## ✅ Checklist de Implementação

- [x] Criar pasta `scripts/`
- [x] Criar arquivo de configuração
- [x] Criar script de carregamento
- [x] Adicionar estilos CSS
- [x] Integrar no arquivo MD
- [x] Criar documentação técnica
- [x] Criar anotações (este arquivo)
- [x] Testar funcionalidade

---

**Implementado por:** Cursor AI  
**Baseado nas regras do projeto:** Organização, modularização, configurações centralizadas
