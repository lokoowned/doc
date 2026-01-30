# 🚫 Sistema de Membros Banidos - DarkLegion

## 📋 Visão Geral

Este sistema gerencia e exibe automaticamente a lista de membros banidos da guilda DarkLegion, carregando os dados diretamente de uma planilha CSV.

## 📁 Arquivos do Sistema

- **`banidos.csv`**: Planilha com os dados dos membros banidos
- **`sobredl/banidos.md`**: Página que exibe a lista (carrega automaticamente do CSV)
- **`BANIDOS_README.md`**: Este arquivo (documentação)

## 📊 Formato do CSV

O arquivo `banidos.csv` deve seguir este formato:

### Estrutura das Colunas (separadas por ponto e vírgula `;`)

| Coluna | Nome | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| A | Nickname | ✅ Sim | Nome do jogador banido | `xXHackerXx` |
| B | Data do Ban | ✅ Sim | Data em que ocorreu o banimento | `15/01/2024` |
| C | Motivo | ✅ Sim | Razão do banimento | `Uso de hack comprovado` |
| D | Servidor | ❌ Não | Nome do servidor | `Default` |
| E | Observações | ❌ Não | Informações adicionais | `Múltiplas advertências` |

### Exemplo de Linha CSV

```csv
xXHackerXx;15/01/2024;Uso de hack comprovado;Default;Detectado usando speed hack
```

## 🏷️ Sistema de Tags de Severidade

O sistema classifica automaticamente os banimentos por severidade baseado no motivo:

### 🔴 PERMANENTE (Vermelho Escuro)
- **Gatilhos**: hack, cheat, trapaça, fraud
- **Descrição**: Violações graves que resultam em banimento permanente
- **Exemplos**: Uso de hacks, cheats, fraudes

### 🟠 GRAVE (Vermelho)
- **Gatilhos**: toxic, racism, ofensa grave
- **Descrição**: Comportamento tóxico ou discriminatório grave
- **Exemplos**: Racismo, toxicidade extrema, ofensas graves

### 🟡 MÉDIO (Laranja)
- **Gatilhos**: spam, flood, desrespeito
- **Descrição**: Comportamento inadequado moderado
- **Exemplos**: Spam repetido, flood de chat, desrespeito

### 🟢 LEVE (Amarelo)
- **Padrão**: Qualquer motivo que não se encaixe nas categorias acima
- **Descrição**: Violações leves das regras
- **Exemplos**: Pequenas infrações, avisos acumulados

## 🎨 Características Visuais

### Esquema de Cores
- **Fundo**: Tom escuro com nuances vermelhas (#1a1515)
- **Bordas**: Vermelho escuro (#3a2020)
- **Texto**: Variações de vermelho claro (#ff6b6b, #ffaaaa)
- **Hover**: Destaque sutil em vermelho transparente

### Funcionalidades
- ✅ Busca em tempo real por nickname, motivo ou observações
- ✅ Numeração automática dos registros
- ✅ Scroll customizado com tema vermelho
- ✅ Tags de severidade automáticas
- ✅ Layout responsivo para mobile
- ✅ Contador de total e resultados visíveis

## 📝 Como Adicionar um Novo Banimento

1. **Abra o arquivo `banidos.csv`**
2. **Adicione uma nova linha no final** seguindo o formato:
   ```csv
   Nickname;Data;Motivo;Servidor;Observações
   ```
3. **Salve o arquivo**
4. **Recarregue a página** - os dados são carregados automaticamente

### Exemplo Prático

```csv
NovoPlayer;26/01/2025;Spam comercial repetido;Default;Ignorou 3 advertências
```

## 🔒 Boas Práticas

### ✅ Fazer

- Use descrições claras e objetivas no motivo
- Mantenha a data no formato dd/mm/yyyy
- Documente observações importantes
- Seja profissional e imparcial nas descrições
- Verifique duas vezes antes de adicionar

### ❌ Evitar

- Linguagem ofensiva ou pessoal
- Informações privadas ou sensíveis
- Acusações sem provas documentadas
- Motivos vagos como "comportamento ruim"
- Emojis ou caracteres especiais em excesso

## 🛠️ Solução de Problemas

### Problema: Lista não carrega

**Possíveis causas:**
1. Arquivo `banidos.csv` não está na raiz do projeto
2. Formato do CSV está incorreto
3. Erro de codificação do arquivo

**Solução:**
```bash
# Verifique se o arquivo existe
ls banidos.csv

# Verifique a codificação (deve ser UTF-8)
file -i banidos.csv
```

### Problema: Caracteres estranhos (��)

**Causa:** Codificação incorreta do CSV

**Solução:**
- Salve o arquivo CSV como UTF-8
- No Excel: Salvar Como → Mais Opções → CSV UTF-8

### Problema: Dados não aparecem

**Verificar:**
1. Console do navegador (F12) para erros
2. Formato do delimitador (deve ser `;`)
3. Primeira linha é o header (não será exibida)

## 🔍 Exemplos de Uso

### Exemplo 1: Banimento por Hack
```csv
HackerPro;20/01/2025;Uso de speed hack comprovado;Default;Reportado por múltiplos membros
```

### Exemplo 2: Banimento por Toxicidade
```csv
ToxicUser;21/01/2025;Ofensas graves e racismo no chat;Default;3 advertências ignoradas
```

### Exemplo 3: Banimento por RMT
```csv
GoldSeller;22/01/2025;Venda ilegal de gold (RMT);Default;Confirmado pela administração
```

## 📱 Responsividade

O sistema é totalmente responsivo:

- **Desktop**: Exibição em grade com 3 colunas
- **Tablet**: Layout adaptado automaticamente
- **Mobile**: Colunas empilhadas verticalmente

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com grid e flexbox
- **JavaScript (Vanilla)**: Carregamento e manipulação de dados
- **CSV**: Formato de dados simples e editável

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique este README completo
2. Consulte o console do navegador (F12)
3. Entre em contato com a administração da guilda
4. Verifique o arquivo de exemplo incluído

## 📜 Changelog

### Versão 1.0.0 (26/01/2025)
- ✨ Sistema inicial de lista de banidos
- 🎨 Interface com tema vermelho
- 🔍 Busca em tempo real
- 🏷️ Tags automáticas de severidade
- 📱 Layout responsivo
- 📊 Carregamento automático de CSV

---

**Mantido por**: Administração DarkLegion  
**Última atualização**: 26/01/2025  
**Versão**: 1.0.0
