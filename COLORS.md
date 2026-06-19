# Color Palette — nextlevel.

## Design Philosophy

A **four-color palette** inspired by editorial print design — warm paper, dark ink, terracotta accent, and muted sand. No blues, no grays, no cool tones. Everything feels **handcrafted, warm, and intentional**, like a well-designed printed book or magazine.

## Core Palette

### Ink (Text & Dark)
- **HEX**: `#1A1410`
- **RGB**: `rgb(26, 20, 16)`
- **CSS Variable**: `--ink`, `--fg`
- **Usage**: Primary text, headings, dark backgrounds (contact section, footer). This is NOT black — it's a warm, brownish near-black, like dark ink on aged paper.

### Paper (Background)
- **HEX**: `#F1E8D8`
- **RGB**: `rgb(241, 232, 216)`
- **CSS Variable**: `--paper`, `--bg`
- **Usage**: Main background, canvas. This is NOT white — it's a warm cream/parchment tone that gives the site its editorial feel.

### Accent (Terracotta)
- **HEX**: `#D24322`
- **RGB**: `rgb(210, 67, 34)`
- **CSS Variable**: `--accent`
- **Usage**: Primary CTAs, the dot in the logo, hover accents, card top-line decorations, link underlines. Used sparingly but with maximum impact.

### Sand (Muted Support)
- **HEX**: `#9D8B75`
- **RGB**: `rgb(157, 139, 117)`
- **CSS Variable**: `--sand`, `--muted`
- **Usage**: Secondary text, captions, labels, borders, muted information. A warm tan that bridges ink and paper.

## Derived Colors

| Token | Value | Usage |
|---|---|---|
| `--paper-2` | `#E6DCC6` | Slightly darker paper — card backgrounds |
| `--ink-soft` | `rgba(26, 20, 16, 0.65)` | Soft text — secondary descriptions |
| `--line` | `rgba(26, 20, 16, 0.12)` | Subtle borders and dividers |
| `--line-strong` | `rgba(26, 20, 16, 0.32)` | More visible borders |
| `--accent-hover` | `#B5371A` | Darkened accent for button hover |
| `--ink-hover` | `#2c211a` | Lightened ink for secondary button hover |

## Utility Colors

| Color | HEX | Usage |
|---|---|---|
| WhatsApp Green | `#25D366` | Floating WhatsApp button |
| WhatsApp Hover | `#1ebc5a` | WhatsApp button hover |
| Success Green | `#4ade80` | Form success state |
| Error Red | `#f87171` | Form error state |
| macOS Red | `#ff5f57` | Browser mockup traffic light |
| macOS Yellow | `#febc2e` | Browser mockup traffic light |
| macOS Green | `#28c840` | Browser mockup traffic light |

## Opacity Scale (on Paper)

The brand uses paper-color at various opacities for text and UI on dark backgrounds:

| Opacity | Value | Usage |
|---|---|---|
| 85% | `rgba(241, 232, 216, 0.85)` | Footer links |
| 72% | `rgba(241, 232, 216, 0.72)` | Navbar scrolled background |
| 70% | `rgba(241, 232, 216, 0.70)` | Footer paragraph text |
| 65% | `rgba(241, 232, 216, 0.65)` | Contact section intro text |
| 50% | `rgba(241, 232, 216, 0.50)` | Footer bottom copyright |
| 45% | `rgba(241, 232, 216, 0.45)` | Contact method labels |
| 30% | `rgba(241, 232, 216, 0.30)` | Form placeholders |
| 15% | `rgba(241, 232, 216, 0.15)` | Input borders on dark |
| 12% | `rgba(241, 232, 216, 0.12)` | Footer border |
| 10% | `rgba(241, 232, 216, 0.10)` | Contact form border |
| 7% | `rgba(241, 232, 216, 0.07)` | Input background on dark |
| 5% | `rgba(241, 232, 216, 0.05)` | Contact form background |

## Opacity Scale (Accent)

| Opacity | Value | Usage |
|---|---|---|
| 70% | `rgba(210, 67, 34, 0.7)` | Primary button hover shadow |
| 60% | `rgba(210, 67, 34, 0.6)` | Primary button shadow |
| 35% | `rgba(210, 67, 34, 0.35)` | Card hover border glow |
| 18% | `rgba(210, 67, 34, 0.18)` | Intro animation ring background |

## Section Color Mapping

| Section | Background | Text | Accent |
|---|---|---|---|
| Navbar | Transparent → `paper/72%` (on scroll) | `--ink` | `--accent` |
| Hero | `--paper` | `--ink` | `--accent` on CTA |
| Nosotros | `--paper` | `--ink` | — |
| Servicios | `--paper` | `--ink` | `--accent` on card hover |
| Proceso | `--paper` | `--ink` | `--accent` on step hover |
| Galería | `--paper` | `--ink` | `--accent` on hover |
| Contacto | `--ink` (dark section) | `--paper` variants | `--accent` on CTA |
| Footer | `--ink` | `--paper` variants | `--accent` |

## Color Usage Rules

1. **Only 4 colors** — ink, paper, accent, sand. Never add more.
2. **Paper is NOT white** — it's warm cream `#F1E8D8`. Pure white `#FFFFFF` is never used as a background.
3. **Ink is NOT black** — it's warm charcoal `#1A1410`. Pure black `#000000` is never used for text.
4. **Accent is used sparingly** — only for CTAs, the logo dot, hover states, and decorative highlights. If everything is terracotta, nothing stands out.
5. **Sand handles muted information** — anything secondary or supportive uses sand, not light gray.
6. **On dark sections** (contact, footer), use paper at varying opacities for text hierarchy — never introduce new colors.
7. **No dark mode** — the brand IS its warm palette. The paper-on-ink inversion in the contact/footer section provides built-in contrast variety.
