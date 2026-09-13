# Cascalho.CC — Paleta de cores e direção visual

A logo tem uma linguagem **psicodélica, quente, orgânica e experimental**. Ela combina laranja, coral, amarelo, verde-limão, verde-menta, turquesa, rosa e vinho em formas sobrepostas. Para o site, a recomendação é preservar essa energia nos elementos de destaque, mas usar uma base escura e neutra para garantir leitura, navegação e contraste.

## Paleta principal

| Token | HEX | RGB aproximado | Função recomendada |
|---|---:|---:|---|
| `--cascalho-ink` | `#231926` | 35, 25, 38 | Texto principal, header escuro, rodapé e fundos de alto contraste. |
| `--cascalho-coral` | `#F04D2E` | 240, 77, 46 | CTA principal, links importantes, estados ativos e detalhes de energia. |
| `--cascalho-orange` | `#FA7F29` | 250, 127, 41 | Destaques, tags, botões secundários e chamadas comerciais. |
| `--cascalho-sun` | `#F5C77A` | 245, 199, 122 | Fundo quente, áreas de introdução e blocos editoriais leves. |
| `--cascalho-cream` | `#FFF1D6` | 255, 241, 214 | Fundo principal claro e alternativa ao branco puro. |
| `--cascalho-lime` | `#7CD87B` | 124, 216, 123 | Acentos psicodélicos, badges e indicadores positivos. |
| `--cascalho-green` | `#55A888` | 85, 168, 136 | Verde de apoio, categorias outdoor e elementos de sucesso. |
| `--cascalho-teal` | `#209C8A` | 32, 156, 138 | Links alternativos, categorias gravel e elementos interativos. |
| `--cascalho-pink` | `#F46E51` | 244, 110, 81 | Destaques expressivos e microinterações. |
| `--cascalho-magenta` | `#BA0046` | 186, 0, 70 | Cor dramática para chamadas especiais e contraste sobre fundo claro. |
| `--cascalho-olive` | `#C09C41` | 192, 156, 65 | Apoio terroso, relacionado a trilha, pedra, poeira e equipamento. |

## Tokens CSS prontos

```css
:root {
  /* Base */
  --color-ink: #231926;
  --color-paper: #FFF1D6;
  --color-white: #FFFFFF;

  /* Identidade Cascalho */
  --color-coral: #F04D2E;
  --color-orange: #FA7F29;
  --color-sun: #F5C77A;
  --color-lime: #7CD87B;
  --color-green: #55A888;
  --color-teal: #209C8A;
  --color-pink: #F46E51;
  --color-magenta: #BA0046;
  --color-olive: #C09C41;

  /* Aplicação semântica */
  --bg-page: var(--color-paper);
  --bg-surface: #FFF9ED;
  --bg-dark: var(--color-ink);
  --text-primary: var(--color-ink);
  --text-on-dark: var(--color-paper);
  --text-muted: #665A61;
  --border-soft: rgba(35, 25, 38, 0.16);
  --border-strong: rgba(35, 25, 38, 0.34);
  --action-primary: var(--color-coral);
  --action-primary-hover: var(--color-magenta);
  --action-secondary: var(--color-teal);
  --focus-ring: var(--color-magenta);

  /* Gradientes psicodélicos controlados */
  --gradient-sunrise: linear-gradient(135deg, #F5C77A 0%, #F46E51 48%, #F04D2E 100%);
  --gradient-mint: linear-gradient(135deg, #D3E86B 0%, #7CD87B 45%, #209C8A 100%);
  --gradient-orbit: linear-gradient(135deg, #BA0046 0%, #F04D2E 45%, #FA7F29 100%);
  --gradient-paper: linear-gradient(135deg, #FFF1D6 0%, #F5C77A 100%);
}

/* Botão principal */
.button-primary {
  background: var(--action-primary);
  color: var(--color-white);
  border: 2px solid var(--action-primary);
}

.button-primary:hover,
.button-primary:focus-visible {
  background: var(--action-primary-hover);
  border-color: var(--action-primary-hover);
}

/* Foco acessível */
:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 3px;
}
```

## Como aplicar a psicodelia sem perder usabilidade

A psicodelia deve aparecer como **ritmo visual**, não como ruído constante. A recomendação é trabalhar com uma base de aproximadamente 70% neutros, 20% cores de identidade e 10% acentos mais intensos.

| Área da interface | Tratamento sugerido |
|---|---|
| Header | Fundo `#231926`, logo colorida e navegação em `#FFF1D6`. |
| Hero da home | Fundo creme com uma forma orgânica usando `--gradient-sunrise` ou `--gradient-mint`. |
| Cards editoriais | Fundo claro, borda irregular ou sombra colorida discreta; não usar gradiente em todos os cards. |
| CTA primário | Coral com texto branco; hover em magenta. |
| CTA de newsletter | Fundo teal ou ink, com detalhe lime. |
| Categorias | Gravel em teal; Trail em orange/coral; Outdoor em green/lime; Pensamentos em magenta. |
| Vitrine afiliada | Fundo neutro; etiqueta “Afiliado” em olive ou orange; evitar aparência de anúncio agressivo. |
| Rodapé | Ink com formas translúcidas em coral, teal e lime. |
| Separadores | Formas orgânicas assimétricas ou linhas curvas, em vez de divisórias retas em excesso. |

## Combinações recomendadas

### Combinações fortes para chamadas

```css
/* Escuro + coral */
background: #231926;
color: #F04D2E;

/* Coral + branco */
background: #F04D2E;
color: #FFFFFF;

/* Teal + branco */
background: #209C8A;
color: #FFFFFF;

/* Creme + ink */
background: #FFF1D6;
color: #231926;

/* Magenta + branco */
background: #BA0046;
color: #FFFFFF;
```

### Combinações que devem ser evitadas para texto pequeno

- Lime sobre branco ou creme: decorativo, mas com pouco contraste.
- Amarelo sobre branco: usar apenas em áreas grandes e não informativas.
- Coral claro sobre creme: pode funcionar em fundos grandes, mas não para texto pequeno.
- Laranja sobre branco: usar com cuidado em texto corrido e controles pequenos.
- Teal claro sobre creme: preferir teal mais escuro ou fundo ink.

A análise da imagem mostra que `#231926` é a melhor âncora de contraste. A cor magenta `#BA0046` também funciona bem sobre fundos claros. O lime, o amarelo e os tons pastel devem ser tratados principalmente como fundo, textura, ilustração ou destaque visual — não como cor de texto principal.

## Gradientes e formas

A logo usa sobreposição e transparência. No site, isso pode ser traduzido em:

- blobs assimétricos no hero;
- círculos ou elipses parcialmente fora da tela;
- camadas com `mix-blend-mode: multiply` apenas em elementos decorativos;
- gradientes com duas ou três cores, nunca com dez cores ao mesmo tempo;
- bordas arredondadas variáveis;
- pequenas texturas de grão aplicadas com moderação;
- animações lentas de deslocamento, sempre respeitando `prefers-reduced-motion`.

Exemplo:

```css
.hero-cascalho {
  position: relative;
  overflow: hidden;
  background: var(--color-paper);
}

.hero-cascalho::before,
.hero-cascalho::after {
  content: "";
  position: absolute;
  border-radius: 48% 52% 62% 38% / 42% 38% 62% 58%;
  pointer-events: none;
  opacity: 0.78;
}

.hero-cascalho::before {
  width: 34rem;
  height: 25rem;
  top: -8rem;
  right: -7rem;
  background: var(--gradient-orbit);
  transform: rotate(-18deg);
}

.hero-cascalho::after {
  width: 28rem;
  height: 22rem;
  bottom: -10rem;
  left: -8rem;
  background: var(--gradient-mint);
  transform: rotate(22deg);
}

@media (prefers-reduced-motion: no-preference) {
  .hero-cascalho::before {
    animation: cascalho-float 14s ease-in-out infinite alternate;
  }
}

@keyframes cascalho-float {
  from { transform: rotate(-18deg) translate3d(0, 0, 0); }
  to { transform: rotate(-12deg) translate3d(-12px, 10px, 0); }
}
```

## Direção tipográfica

A logo tem formas arredondadas e um desenho quase manual. Para o site, vale combinar:

- uma fonte de display arredondada ou “blob” para títulos de campanha;
- uma sans-serif muito legível para textos longos;
- títulos em caixa normal, evitando transformar todo o site em letras psicodélicas;
- destaque de palavras com cor, sublinhado irregular ou marcador, não apenas negrito.

A personalidade pode estar nos títulos, nas imagens, nas formas e nos microtextos. O texto corrido precisa continuar confortável para leitura em celular.

## Regra final de identidade

> **A logo pode ser psicodélica; a interface precisa ser compreensível.**

O visitante deve perceber energia, humor e liberdade visual, mas sempre saber onde está, o que está lendo, qual é o próximo passo e quando existe uma relação comercial.
