# 🔊 Sons e Vídeos das Raças

## 📁 Estrutura de Arquivos

Os sons e vídeos das raças devem estar nas pastas `sounds/` e `efeitos_vfx/` na raiz do projeto:

```
doc/
├── sounds/
│   ├── acc.wav              # Som da raça Accretia
│   ├── bcc.wav              # Som da raça Bellato
│   └── ccc.wav              # Som da raça Cora
├── efeitos_vfx/
│   ├── acc_transition.webm  # Vídeo overlay Accretia
│   ├── bell_transition.webm # Vídeo overlay Bellato
│   └── ccc_transition.webm  # Vídeo overlay Cora
├── index.html
├── config.js
└── README.md
```

## ⚙️ Configuração

No arquivo `config.js`, configure a raça da guild:

```javascript
server_guild_race: 'Bellato',  // Ou 'Cora' ou 'Accretia'
```

## 🎵 Funcionamento

Quando o **shadowbox de informações do servidor** for aberto (clicando no widget verde ou no botão da página inicial), o sistema irá:

1. Ler a configuração `server_guild_race` do `config.js`
2. Selecionar os arquivos de som e vídeo correspondentes:
   - **Bellato** → `sounds/bcc.wav` + `efeitos_vfx/bell_transition.webm`
   - **Cora** → `sounds/ccc.wav` + `efeitos_vfx/ccc_transition.webm`
   - **Accretia** → `sounds/acc.wav` + `efeitos_vfx/acc_transition.webm`
3. Reproduzir o som com volume ajustado (50%)
4. Exibir o vídeo como overlay fullscreen
5. Quando o vídeo terminar, fazer fade out e remover automaticamente

## 🎬 Vídeo Overlay

O vídeo é exibido como um **overlay fullscreen** com as seguintes características:

- **Z-index**: 100000 (acima de tudo)
- **Pointer-events**: none (não bloqueia interação)
- **Background**: rgba(0, 0, 0, 0.8) - **80% transparente** para ver o conteúdo por trás
- **Object-fit**: cover (preenche 100% da tela, pode cortar bordas)
- **Tamanho**: 100% da janela do usuário (viewport)
- **Fade out automático**: 0.5s após o vídeo terminar
- **Remoção automática**: O elemento é removido do DOM após o fade out
- **Suporte a transparência**: O vídeo pode ter alpha channel para efeitos transparentes

### 📱 Comportamento Responsivo:

**Desktop/Tablet (≥769px):**
- Vídeo ocupa 100% da tela
- Mantém proporções originais

**Mobile Portrait (≤768px, vertical):**
- Vídeo é **automaticamente rotacionado 90° para horizontal**
- Garante visualização em landscape mesmo com celular na vertical
- Dimensões ajustadas: altura vira largura e vice-versa

**Mobile Landscape (≤768px, horizontal):**
- Vídeo exibido normalmente
- Ocupa 100% da tela em landscape

## 🔇 Observações

- Se os arquivos não existirem, o sistema apenas registra um aviso no console e continua normalmente
- O volume do áudio está definido em 50% (0.5) para não ser muito alto
- Os arquivos de som devem estar no formato `.wav` para melhor compatibilidade
- Os arquivos de vídeo devem estar no formato `.webm` para melhor compatibilidade e tamanho
- Som e vídeo são reproduzidos simultaneamente ao abrir o shadowbox
- O vídeo é reproduzido automaticamente, sem interação do usuário

## 🎮 Exemplos de Uso

### Cenário 1: Guild Bellato
```javascript
server_guild_race: 'Bellato',
```
→ Toca `sounds/bcc.wav` + exibe `efeitos_vfx/bell_transition.webm`

### Cenário 2: Guild Cora
```javascript
server_guild_race: 'Cora',
```
→ Toca `sounds/ccc.wav` + exibe `efeitos_vfx/ccc_transition.webm`

### Cenário 3: Guild Accretia
```javascript
server_guild_race: 'Accretia',
```
→ Toca `sounds/acc.wav` + exibe `efeitos_vfx/acc_transition.webm`

## 🛠️ Customização

### Volume do Som

Para alterar o volume do som, edite a linha no `index.html`:

```javascript
raceSound.volume = 0.5;  // 0.0 (mudo) até 1.0 (máximo)
```

### Duração do Fade Out

Para alterar a duração do fade out do vídeo, edite no CSS:

```css
.race-video-overlay.fade-out {
  animation: videoFadeOut 0.5s ease-out forwards;  /* Altere 0.5s */
}
```

E no JavaScript:

```javascript
setTimeout(() => {
  if (videoOverlay.parentNode) {
    videoOverlay.parentNode.removeChild(videoOverlay);
  }
}, 500);  // Altere 500 (em milissegundos)
```

### Background do Overlay

Para alterar a transparência do background do overlay, edite no CSS:

```css
.race-video-overlay {
  background: rgba(0, 0, 0, 0.8);  /* 0.8 = 80% opaco / 20% transparente */
  /* Opções:
     rgba(0, 0, 0, 0.0) - totalmente transparente
     rgba(0, 0, 0, 0.5) - 50% transparente
     rgba(0, 0, 0, 0.8) - 80% opaco (padrão)
     rgba(0, 0, 0, 1.0) - totalmente opaco
  */
}
```

### Estilo do Vídeo

Para alterar como o vídeo preenche a tela, edite no CSS:

```css
.race-video-overlay video {
  object-fit: cover;  /* Opções: cover, contain, fill, scale-down */
  /* cover = preenche 100% da tela (padrão - pode cortar bordas)
     contain = mantém proporções completas (cria barras pretas)
  */
}
```

**⚠️ Importante:** 
- `cover` = **Preenche 100% da tela** (pode cortar bordas do vídeo)
- `contain` = **Mostra vídeo completo** (pode criar barras pretas nas laterais)

### 📱 Desabilitar Rotação em Mobile

Se NÃO quiser que o vídeo rotacione em celulares verticais, remova este bloco do CSS:

```css
/* REMOVA ESTE BLOCO para desabilitar rotação automática */
@media screen and (max-width: 768px) and (orientation: portrait) {
  .race-video-overlay video {
    transform: rotate(90deg);
    width: 100vh;
    height: 100vw;
    object-fit: contain;
  }
}
```

### 🔧 Ajustar Breakpoint Mobile

Para alterar o tamanho que define "mobile", mude o valor `768px`:

```css
/* Padrão: 768px */
@media screen and (max-width: 768px) and (orientation: portrait) {
  /* ... */
}

/* Exemplo: Considerar mobile até 1024px */
@media screen and (max-width: 1024px) and (orientation: portrait) {
  /* ... */
}
```

## 🎨 Dicas para os Vídeos

- **Duração recomendada**: 2-5 segundos
- **Formato**: `.webm` (melhor compressão e qualidade)
- **Resolução**: 1920x1080 (Full HD) ou 1280x720 (HD)
- **Aspect Ratio**: 16:9 recomendado (para preencher melhor a tela)
- **Codec**: VP9 ou VP8 para melhor compatibilidade
- **Transparência**: ✅ **RECOMENDADO** - Use alpha channel para vídeos transparentes
- **Background**: O overlay tem fundo 80% opaco (preto semi-transparente)
- **Áudio**: Opcional (pode ter áudio próprio ou ser mudo)
- **Object-fit**: cover (preenche 100% da tela, pode cortar bordas para manter proporção)

### ⚠️ Importante sobre `object-fit: cover`:
O vídeo agora **preenche 100% da tela**. Se o vídeo tiver proporções diferentes da tela do usuário:
- As bordas podem ser cortadas
- **Solução**: Crie vídeos em 16:9 (1920x1080) para melhor compatibilidade
- **Alternativa**: Use `contain` se preferir ver o vídeo completo (mas terá barras pretas)

## 📝 Comando FFmpeg para Converter

Para converter seus vídeos para `.webm` com transparência:

```bash
# ✅ RECOMENDADO: Com transparência (alpha channel)
# Use este comando se seu vídeo original tem transparência (.mov com alpha, .webm com alpha, etc)
ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 2M output.webm

# Criar vídeo transparente a partir de chroma key (fundo verde)
ffmpeg -i input.mp4 -filter_complex "[0:v]chromakey=0x00FF00:0.1:0.2,format=yuva420p[v]" -map "[v]" -c:v libvpx-vp9 -auto-alt-ref 0 output.webm

# Sem transparência (vídeo normal)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M output.webm

# Sem áudio
ffmpeg -i input.mp4 -c:v libvpx-vp9 -an output.webm

# Reduzir tamanho do arquivo (menor qualidade)
ffmpeg -i input.webm -c:v libvpx-vp9 -b:v 1M -crf 30 output_compressed.webm
```

### 💡 Explicação dos parâmetros:

- `-pix_fmt yuva420p`: Formato de pixel com suporte a transparência (alpha)
- `-auto-alt-ref 0`: Desabilita alternate reference frames (necessário para transparência)
- `-b:v 2M`: Bitrate de 2 Mbps (ajuste conforme necessário)
- `chromakey`: Remove fundo verde (0x00FF00) e cria transparência
- `-crf 30`: Constant Rate Factor (0-63, menor = melhor qualidade)

## 🧪 Testando

### Desktop/Laptop:
1. Configure `server_guild_race` no `config.js`
2. Adicione os arquivos na pasta `efeitos_vfx/`
3. Clique no widget verde do servidor
4. Vídeo deve aparecer em **fullscreen horizontal**

### Mobile (Celular):

**Teste em Portrait (vertical):**
1. Abra em um celular na vertical
2. Clique no widget do servidor
3. Vídeo deve aparecer **rotacionado 90° (horizontal)**
4. Ocupa toda a altura do celular

**Teste em Landscape (horizontal):**
1. Vire o celular para horizontal
2. Clique no widget do servidor
3. Vídeo aparece **normalmente horizontal**
4. Ocupa toda a tela

### 🔍 Debug via Console:

```javascript
// Ver configuração atual
console.log('Raça:', window.DLConfig.server_guild_race);

// Testar vídeo manualmente
ShadowBox.playRaceVideo('efeitos_vfx/bell_transition.webm');

// Verificar tamanho da tela
console.log('Largura:', window.innerWidth, 'Altura:', window.innerHeight);
console.log('Orientação:', window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait');
```

### 📐 Especificações Técnicas:

| Dispositivo | Largura | Comportamento |
|------------|---------|---------------|
| Desktop | ≥769px | Vídeo horizontal normal |
| Mobile Portrait | ≤768px + vertical | **Vídeo rotacionado 90°** |
| Mobile Landscape | ≤768px + horizontal | Vídeo horizontal normal |

---

✅ Sistema de som e vídeo responsivo implementado e funcional!

