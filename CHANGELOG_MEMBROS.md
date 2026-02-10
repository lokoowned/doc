# Changelog - Sistema de Membros

## [3.0.0] - 2026-02-03

### 🚀 Adicionado
- **Integração com Google Sheets**: Sistema agora carrega dados diretamente de uma planilha pública
  - Spreadsheet ID: `16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos`
  - Aba: `ListaMembros`
- **Novo arquivo**: `members-loader.js` - Classe responsável por buscar e processar dados da planilha
- **Sistema de cache**: Implementado cache de 5 minutos para otimizar performance
- **Fallback inteligente**: Em caso de erro, usa cache antigo se disponível
- **Página de teste**: `test-members-loader.html` para validar a integração
- **Documentação completa**: `GOOGLE_SHEETS_MEMBROS.md` com todas as informações técnicas

### 🔄 Modificado
- **index.html**: Plugin de membros atualizado para usar `MembersLoader` em vez de fetch direto
- **sobredl/membros.md**: Comentário atualizado para refletir nova fonte de dados
- **MEMBROS_README.md**: Reescrito para focar na integração com Google Sheets
- **Estrutura de dados**: 
  - Campo "Active state" agora usa lógica intuitiva (TRUE = ativo, FALSE = inativo)
  - Conversão automática para manter compatibilidade com código existente

### 📝 Detalhes Técnicos

#### Estrutura da Planilha
```
Coluna A: Member Name (Nickname)
Coluna B: Join date (Data de Entrada - dd/mm/yyyy)
Coluna C: Member rank (Member/Officer/Fundador)
Coluna D: Server (Servidor)
Coluna E: Medals (códigos separados por vírgula)
Coluna F: Active state (TRUE = ativo / FALSE = inativo)
```

#### URL da API
```
https://docs.google.com/spreadsheets/d/16ZmFjvIJ5ta54ZkWupPhMsg8-rmZ_OhrCRkJjiAKqos/gviz/tq?tqx=out:csv&sheet=ListaMembros
```

#### Fluxo de Dados
1. Plugin detecta painel de membros na página
2. Chama `MembersLoader.loadMembers()`
3. Verifica cache (válido por 5 minutos)
4. Se cache inválido/ausente, busca do Google Sheets
5. Parseia CSV retornado
6. Converte para formato esperado pela aplicação
7. Atualiza cache
8. Retorna dados para renderização

### 🐛 Correções
- Resolvido problema de encoding ao ler CSV do Google Sheets
- Corrigida lógica de parse de campos vazios
- Melhorado tratamento de aspas em valores CSV

### 📊 Benefícios
- ✅ Atualizações em tempo real (respeitando cache de 5 minutos)
- ✅ Não requer commits no repositório para adicionar/editar membros
- ✅ Múltiplas pessoas podem editar simultaneamente
- ✅ Interface familiar (Google Sheets)
- ✅ Histórico de alterações nativo do Google Sheets
- ✅ Backup automático pelo Google

### ⚠️ Notas de Migração
- O arquivo `membros.csv` foi mantido como backup mas não é mais utilizado
- Lógica do campo "inativo" foi invertida na planilha para ser mais intuitiva:
  - **Antes (CSV)**: FALSE = ativo, TRUE = inativo
  - **Agora (Sheets)**: TRUE = ativo, FALSE = inativo
- Conversão automática acontece no `members-loader.js` para manter compatibilidade

### 🔐 Segurança
- Planilha configurada como pública (somente leitura) via API
- Edição requer permissões específicas no Google Sheets
- Aplicação web não tem capacidade de modificar dados

### 📚 Documentação
- `GOOGLE_SHEETS_MEMBROS.md` - Documentação completa da integração
- `MEMBROS_README.md` - Guia rápido de uso
- `test-members-loader.html` - Ferramenta de teste e validação
- `CHANGELOG_MEMBROS.md` - Este arquivo

### 🧪 Como Testar
1. Abra o arquivo `test-members-loader.html` no navegador
2. Clique em "Carregar Membros"
3. Verifique se os dados são carregados corretamente
4. Teste os botões de cache e exportação

### 🔮 Próximos Passos (Sugestões)
- [ ] Implementar atualização automática periódica (opcional)
- [ ] Adicionar indicador visual de carregamento
- [ ] Implementar modo offline com IndexedDB
- [ ] Criar painel administrativo para edição inline
- [ ] Adicionar webhooks para notificações de alterações

---

## [2.0.0] - 2026-01-15
- Sistema de medalhas de honra
- Ranking automático por peso
- Medalhas de atividade automáticas

## [1.0.0] - 2011-01-01
- Versão inicial com CSV local
- Sistema básico de listagem
