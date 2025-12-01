# 🌐 Problema de Caminhos no GitHub Pages

## 🐛 Problema

Imagens e recursos funcionam no **localhost** mas **não carregam no GitHub Pages**.

### Por que isso acontece?

**GitHub Pages URL Structure:**
```
https://lokoowned.github.io/doc/#/
                           ^^^^ subpasta do projeto
```

Quando você usa caminhos absolutos como `/imagens/foto.png`:

- ❌ **No GitHub Pages**: tenta acessar `https://lokoowned.github.io/imagens/foto.png` (ERRADO!)
- ✅ **Correto**: deveria acessar `https://lokoowned.github.io/doc/imagens/foto.png`

- ✅ **No localhost**: funciona porque está na raiz `http://localhost:3000/imagens/foto.png`

## ✅ Solução

Use **caminhos relativos** (sem a barra inicial `/`):

### ❌ ERRADO (caminho absoluto):
```html
<img src="/imagens/foto.png">
```

### ✅ CORRETO (caminho relativo):
```html
<img src="imagens/foto.png">
```

## 📝 Arquivos Corrigidos

### 1. `README.md`
```diff
- <img src="/imagens/icones/emblema.png">
+ <img src="imagens/icones/emblema.png">

- <img src="/imagens/inviteds.png">
+ <img src="imagens/inviteds.png">

- <img src="/imagens/calendario.webp">
+ <img src="imagens/calendario.webp">

- <img src="/imagens/faq.webp">
+ <img src="imagens/faq.webp">
```

### 2. `_sidebar.md`
```diff
- <img src="/imagens/icones/emblema.png">
+ <img src="imagens/icones/emblema.png">

- <img src="/imagens/icones/rf.png">
+ <img src="imagens/icones/rf.png">
```

### 3. `paginas/inicio/como-entrar.md`
```diff
- src="/imagens/inviteds.png"
+ src="../../imagens/inviteds.png"
```
**Nota:** Subpastas precisam subir níveis com `../`

### 4. `paginas/inicio/como-entrar2.md`
```diff
- src="/imagens/inviteds.png"
+ src="../../imagens/inviteds.png"
```

## 📐 Regras para Caminhos Relativos

### Arquivos na raiz (README.md, _sidebar.md):
```html
<!-- Raiz do projeto → pasta imagens -->
<img src="imagens/foto.png">
```

### Arquivos em subpastas (paginas/inicio/arquivo.md):
```html
<!-- Sobe 2 níveis (../../) → pasta imagens -->
<img src="../../imagens/foto.png">
```

### Estrutura do Projeto:
```
doc/
├── README.md              → usa "imagens/"
├── _sidebar.md            → usa "imagens/"
├── imagens/
│   ├── foto.png
│   └── icones/
│       └── emblema.png
└── paginas/
    └── inicio/
        └── arquivo.md     → usa "../../imagens/"
```

## 🔍 Como Verificar

### Buscar caminhos absolutos:
```bash
# Buscar todas as imagens com caminho absoluto
grep -r 'src="/' . --include="*.md" --include="*.html"

# Buscar CSS com caminhos absolutos
grep -r 'url(/' . --include="*.css"
```

### Testar localmente antes do deploy:

```bash
# Simula estrutura do GitHub Pages
npx serve -s . -p 3000
```

Acesse: `http://localhost:3000/doc/#/` (note o `/doc/`)

## ✅ Checklist

Antes de fazer deploy no GitHub Pages:

- [ ] Todas as imagens usam caminhos relativos (sem `/` inicial)
- [ ] Arquivos em subpastas ajustam o caminho com `../`
- [ ] Testado localmente simulando a estrutura do GitHub Pages
- [ ] Links internos não usam caminhos absolutos
- [ ] CSS/JS não referenciam caminhos absolutos

## 🚀 Deploy

Após corrigir todos os caminhos:

```bash
git add .
git commit -m "Fix: Corrigir caminhos absolutos para GitHub Pages"
git push
```

Aguarde 1-2 minutos e acesse: https://lokoowned.github.io/doc/

---

✅ **Problema resolvido!** Agora as imagens carregam corretamente no GitHub Pages.

