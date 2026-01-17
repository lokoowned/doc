# 📋 Guia de Gerenciamento da Lista de Membros

## 📁 Localização
O arquivo de dados dos membros está localizado em: **`membros.csv`**

## 📊 Estrutura do CSV

O arquivo CSV usa **ponto e vírgula (;)** como delimitador para compatibilidade com Excel/LibreOffice em português.

O arquivo possui as seguintes colunas:

| Coluna | Nome | Descrição | Exemplo |
|--------|------|-----------|---------|
| **A** | Nickname | Nome do jogador | `xLokoOwneD` |
| **B** | Data de Entrada | Data de entrada na guilda (formato: dd/mm/yyyy) | `01/01/2011` |
| **C** | Status | Cargo do membro (Member, Officer, Fundador) | `Fundador` |
| **D** | Servidor | Servidor de entrada (opcional) | `Biohazard` |
| **E** | Medalhas | Códigos das medalhas separados por vírgula | `default` |
| **F** | Inativo | Se o membro está inativo (True/False) | `False` |

## ✏️ Como Editar

### Opção 1: Excel / LibreOffice Calc / Google Sheets
1. Abra o arquivo `membros.csv` no seu editor de planilhas favorito
2. Edite os dados conforme necessário
3. Salve o arquivo mantendo o formato CSV
4. **IMPORTANTE**: Certifique-se de salvar com encoding **UTF-8**

### Opção 2: Editor de Texto
1. Abra o arquivo `membros.csv` em um editor de texto (Notepad++, VSCode, etc.)
2. Edite as linhas mantendo o formato (use **ponto e vírgula** como delimitador):
   ```
   Nickname;Data de Entrada;Status;Servidor;Medalhas;Inativo
   ```
3. Salve o arquivo com encoding UTF-8

## 📝 Exemplos de Linhas

### Membro básico (sem medalhas, sem servidor, ativo)
```csv
TarZ;01/01/2012;Member;;;False
```

### Membro com medalhas (sem servidor, ativo)
```csv
ToN;01/01/2012;Member;;retorno2025;False
```

### Membro com servidor e medalhas (ativo)
```csv
xLokoOwneD;01/01/2011;Fundador;Biohazard;default;False
```

### Officer com medalhas (ativo)
```csv
G5 / GFive;01/01/2013;Officer;;staff;False
```

### Membro inativo
```csv
PlayerAntigo;01/01/2010;Member;;;True
```

## 🏅 Medalhas Disponíveis

Consulte o arquivo `config.js` (seção `honor_medals`) para ver os códigos de medalhas disponíveis:
- `default` - Default 2026
- `retorno2025` - O grande retorno!
- `staff` - Honra ao Comando
- `patrocinadorwebsite1` - Patrocinador website 2013
- *(Medalhas de atividade são atribuídas automaticamente com base na data de entrada)*

## 🔄 Status Disponíveis

- **Member**: Membro comum
- **Officer**: Oficial da guilda (ganha +200 peso no ranking e tag "Staff")
- **Fundador**: Fundador da guilda (ganha +200 peso no ranking e tag "Guild Leader")

## ⚠️ Atenções Importantes

1. **Não remova a primeira linha** (cabeçalho do CSV)
2. **Delimitador**: Use **ponto e vírgula (;)** para separar colunas
3. **Mantenha o formato de data**: dd/mm/yyyy
4. **Campos vazios**: Deixe vazio entre pontos e vírgula `;;` para campos vazios
5. **Medalhas**: Se tiver múltiplas medalhas, separe por vírgula SEM espaços (apenas na coluna E)
6. **Inativo**: Use exatamente `True` ou `False` (case-sensitive)
7. **Encoding**: Sempre salve o arquivo com encoding UTF-8 para preservar caracteres especiais
8. **Membros inativos**: Membros com `Inativo=True` não aparecem na lista por padrão

## 🔍 Campos Vazios vs Preenchidos

```csv
# Servidor vazio, ativo:
TarZ;01/01/2012;Member;;retorno2025;False

# Servidor preenchido, ativo:
xLokoOwneD;01/01/2011;Fundador;Biohazard;default;False

# Sem medalhas, ativo:
Hiroshima;01/01/2012;Member;;;False

# Com medalhas, ativo:
ToN;01/01/2012;Member;;retorno2025;False

# Membro inativo (não será exibido na lista por padrão):
PlayerAntigo;01/01/2010;Member;;;True
```

## 🚀 Atualizações Automáticas

- **Medalhas de Atividade**: São calculadas automaticamente baseadas na data de entrada
  - Menos de 1 ano = Medalha "Novato"
  - 1-20 anos = Medalha correspondente ao número de anos
- **Ranking**: Calculado automaticamente com base no peso total das medalhas
- **Filtragem**: Membros com `Inativo=True` são automaticamente ocultados da lista

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas sobre o formato, verifique:
1. Se o arquivo está salvo com encoding UTF-8
2. Se não há linhas vazias no meio do arquivo
3. Se o formato de data está correto (dd/mm/yyyy)
4. Se os códigos de medalhas existem no `config.js`
