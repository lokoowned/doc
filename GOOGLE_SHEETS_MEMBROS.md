# Integração com Google Sheets - Lista de Membros

Este documento descreve como a página de membros foi configurada para buscar dados diretamente de uma planilha pública do Google Sheets.

## 📋 Visão Geral

A lista de membros da guilda agora é carregada automaticamente de uma planilha do Google Sheets, eliminando a necessidade de editar manualmente o arquivo CSV local. Isso facilita a manutenção e permite que múltiplas pessoas atualizem os dados sem precisar fazer commits no repositório.

## ⚙️ Configuração da Planilha

### Informações da Planilha

- **Spreadsheet ID**: `16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos`
- **Aba**: `ListaMembros`
- **Permissão**: Pública (somente leitura)

### Estrutura das Colunas

⚠️ **IMPORTANTE**: A planilha **NÃO deve ter linha de cabeçalho**. Comece direto com os dados na linha 1.

A planilha deve seguir exatamente esta estrutura:

| Coluna | Nome              | Descrição                                    | Exemplo                      |
|--------|-------------------|----------------------------------------------|------------------------------|
| A      | Member Name       | Nome/nickname do membro                      | `xLokoOwneD`                 |
| B      | Join date         | Data de entrada (formato: dd/mm/yyyy)        | `01/01/2011`                 |
| C      | Member rank       | Categoria do membro                          | `Member`, `Officer`, `Fundador` |
| D      | Server            | Servidor onde o membro jogou                 | `Biohazard (Internacional)`  |
| E      | Medals            | Medalhas separadas por vírgula               | `staff,retorno2025`          |
| F      | Active state      | Estado de atividade                          | `TRUE` (ativo) ou `FALSE` (inativo) |

**Exemplo de linha na planilha:**
```
xLokoOwneD | 01/01/2011 | Fundador | Biohazard (Internacional) | staff,retorno2025 | FALSE
```

**Observação sobre a coluna F**: Se você não tiver medalhas, pode deixar a coluna E vazia e colocar o estado de atividade na coluna E mesmo. O sistema detecta automaticamente.

### Importante sobre o Active State

- **TRUE** = Membro **ATIVO** (aparece na lista)
- **FALSE** = Membro **INATIVO** (não aparece na lista)

> **Nota**: Internamente, o sistema inverte esta lógica para manter compatibilidade com o código existente, mas na planilha use TRUE para ativos e FALSE para inativos.

## 🔧 Implementação Técnica

### Arquivos Criados/Modificados

1. **`members-loader.js`** (novo)
   - Classe responsável por buscar e processar dados da planilha
   - Implementa cache de 5 minutos para melhor performance
   - Faz o parse correto do CSV retornado pelo Google Sheets

2. **`index.html`** (modificado)
   - Adicionada referência ao script `members-loader.js`
   - Plugin de membros modificado para usar `MembersLoader` em vez de fetch direto do CSV

### Como Funciona

1. O `MembersLoader` é inicializado automaticamente ao carregar a página
2. Quando a página `membros.md` é acessada, o plugin detecta o painel de membros
3. O sistema busca os dados do Google Sheets através da API pública
4. Os dados são parseados e convertidos para o formato esperado
5. A lista é renderizada normalmente com todas as funcionalidades (medalhas, filtros, etc.)

## 🚀 Vantagens

✅ **Fácil manutenção**: Edite a planilha diretamente no Google Sheets  
✅ **Sem commits**: Atualizações não requerem alterações no repositório  
✅ **Colaborativo**: Múltiplas pessoas podem ter acesso de edição  
✅ **Cache inteligente**: Dados são cacheados por 5 minutos para melhor performance  
✅ **Fallback**: Em caso de erro, usa cache antigo se disponível  

## 🔄 Atualizando os Dados

Para adicionar, editar ou remover membros:

1. Acesse a planilha do Google Sheets
2. Faça as alterações necessárias respeitando a estrutura das colunas
3. Salve as alterações
4. Aguarde até 5 minutos ou limpe o cache do navegador para ver as mudanças

## 🐛 Troubleshooting

### Membros não aparecem

1. Verifique se o `Active state` está como `TRUE` na planilha
2. Verifique se a planilha está pública (compartilhamento: "Qualquer pessoa com o link")
3. Abra o console do navegador (F12) e procure por erros

### Dados desatualizados

- O cache é mantido por 5 minutos
- Force o refresh: Ctrl+Shift+R (Windows/Linux) ou Cmd+Shift+R (Mac)
- Ou aguarde 5 minutos após a edição

### Erros no console

Abra o Console do navegador (F12 > Console) e procure por mensagens:

- `✅` - Operação bem-sucedida
- `📊` - Carregando dados
- `📦` - Usando cache
- `⚠️` - Aviso (usando fallback)
- `❌` - Erro

## 🔐 Segurança

- A planilha é **somente leitura** através da API pública
- Não é possível modificar dados através da aplicação web
- Apenas pessoas com permissão de edição no Google Sheets podem alterar os dados

## 📝 Migração do CSV

O arquivo `membros.csv` antigo foi mantido como backup, mas não é mais utilizado pela aplicação. Se desejar, você pode:

1. Manter o arquivo como backup
2. Deletar o arquivo após confirmar que tudo funciona corretamente com o Google Sheets

## 🧪 Ferramentas de Teste

Há três ferramentas de teste disponíveis para validar a integração:

### 1. `test-members-loader.html` - Teste Completo do Sistema
- Testa o `MembersLoader` completo
- Exibe estatísticas detalhadas
- Mostra tabela formatada dos membros
- Permite exportar dados em JSON
- **Use esta ferramenta primeiro** para validar a integração

### 2. `test-fetch-direct.html` - Teste Direto da API
- Busca dados diretamente da API do Google Sheets
- Mostra dados brutos (CSV)
- Útil para debugging de problemas de conexão
- Verifica se a planilha está acessível
- **Use esta ferramenta** se os membros não aparecem

### 3. `test-parse.html` - Teste de Parse CSV
- Testa o algoritmo de parse de CSV
- Casos de teste simulados
- Não requer conexão com internet
- **Use esta ferramenta** para validar a lógica de parse

## 🔗 Links Úteis

- [Planilha de Membros](https://docs.google.com/spreadsheets/d/16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos/edit)
- [Documentação Google Sheets API](https://developers.google.com/sheets/api)

---

**Última atualização**: 03/02/2026  
**Versão**: 1.0
