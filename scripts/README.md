# 📂 Scripts - Módulos JavaScript

Pasta contendo scripts modulares para funcionalidades específicas do projeto.

## 📋 Estrutura Atual

### Quest List Module

Sistema de integração com Google Sheets para exibir quests com mapas interativos.

**Arquivos:**
- `config-quest-list.js` - Configurações centralizadas
- `quest-list-loader.js` - Lógica de carregamento e renderização

**Funcionalidades:**
- ✅ Carrega dados de planilha do Google Sheets
- ✅ Agrupa quests por número
- ✅ Exibe lista com Nome, Mapa e ícone de lupa
- ✅ Tooltip/shadowbox ao passar mouse na lupa
- ✅ Plota marcadores de monstros no mapa
- ✅ Sistema de cache (5 minutos)

**Configuração da Planilha:**
- ID: `1KBeQwNcjc7SrbeF_Rw6g59tdrOMiPC4uOtdd1GUo2AM`
- Tab: `QuestList`
- Colunas:
  - **A** - Número da quest (agrupa quests com mesmo número)
  - **B** - Nome da quest
  - **C** - Nome do mapa
  - **D** - Coordenadas (formato: `x,y` ou múltiplas separadas por `;`)

**Uso no Markdown:**
```html
<!-- Carrega configurações primeiro -->
<script src="../scripts/config-quest-list.js"></script>
<!-- Depois carrega o loader principal -->
<script src="../scripts/quest-list-loader.js"></script>
<script>
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.QuestListLoader.renderQuestList('quest-list-container');
    });
  } else {
    window.QuestListLoader.renderQuestList('quest-list-container');
  }
</script>
```

## 🔧 Manutenção

Para alterar configurações (URLs, cache, mensagens), edite apenas o arquivo `config-quest-list.js`.

## ⚠️ Notas Importantes

- **Ordem de carregamento:** Sempre carregar `config-*.js` antes do script principal
- **Cache:** Dados são cacheados por 5 minutos (configurável)
- **Imagens:** Mapas devem estar em `https://www.darklegionrf.com/docimages/maps/{nome-mapa}.png`
- **Ícone mob:** `https://www.darklegionrf.com/docimages/maps/mob.png`

## 📝 Histórico de Alterações

**v1.0 (2026-02-10)**
- ✅ Criação do módulo Quest List
- ✅ Integração com Google Sheets
- ✅ Sistema de tooltip com mapa interativo
- ✅ Configurações centralizadas
