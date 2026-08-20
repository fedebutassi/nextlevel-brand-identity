# Typography — nextlevel.

## Font Families

### Bricolage Grotesque — Display & Body
- **Source**: Google Fonts
- **Weights loaded**: 200-800 (variable, optical size 12-96pt)
- **CSS Variable**: `--font-display` and `--font-body`
- **Full Stack**: `"Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", sans-serif`
- **Character**: A geometric grotesque with distinctive personality — slightly quirky letterforms, optical size axis that allows it to look polished at both headline and body sizes. Not as neutral as Inter or Helvetica, not as decorative as a display face. The sweet spot.
- **Used for**: Everything — headings, body text, buttons, navigation

### Static Files for Social Content

The approved social-production files live in `fonts/`:

| File | Use |
|---|---|
| `BricolageGrotesque_24pt_Condensed-Bold.ttf` | Headlines, large numbers, emphasized phrases |
| `BricolageGrotesque_24pt_Condensed-SemiBold.ttf` | Subheadings and supporting statements |
| `BricolageGrotesque_24pt_Condensed-ExtraLight.ttf` | Descriptions and secondary copy |

Social content must use these exact files. System-font approximations are not accepted for final exports.

### JetBrains Mono — Monospace Accents
- **Source**: Google Fonts
- **Weights loaded**: 400, 500
- **CSS Variable**: `--font-mono`
- **Full Stack**: `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`
- **Character**: A developer-grade monospace font with excellent readability. Used as a design accent, not for code.
- **Used for**: Eyebrow labels/tags, process step numbers, captions, footer section headings, 404 error code

## Why This Pairing Works

- **Bricolage Grotesque** does the heavy lifting — it has enough personality to be interesting but stays readable at all sizes thanks to its optical size axis
- **JetBrains Mono** adds a **technical, editorial edge** — like marginalia in a printed book, or the technical annotations on an architect's drawing
- Together they say: *we're designers who code — craft meets precision*

## Font Weight Scale

| Weight | Value | CSS | Usage |
|---|---|---|---|
| ExtraBold | 800 | `font-weight: 800` | H1, H2, stat numbers |
| Bold | 700 | `font-weight: 700` | H3, H4, card titles, gallery item names, process titles |
| SemiBold | 600 | `font-weight: 600` | H5, H6, buttons, form labels, highlighted values |
| Medium | 500 | `font-weight: 500` | Nav links, JetBrains Mono labels, 404 code |
| Regular | 400 | `font-weight: 400` | Body text, paragraphs, mobile menu links |

## Text Size Hierarchy

### Headings (Bricolage Grotesque)

| Level | Size | Weight | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| H1 | `clamp(2.5rem, 5.6vw, 4.8rem)` | 800 | 1.04 | -0.035em | Hero heading (40px → 76.8px) |
| H2 | `clamp(1.75rem, 3.4vw, 2.8rem)` | 800 | 1.1 | -0.025em | Section headings (28px → 44.8px) |
| H3 | `clamp(1.25rem, 1.8vw, 1.5rem)` | 700 | 1.25 | -0.015em | Card titles (20px → 24px) |
| H4 | `clamp(1.1rem, 1.4vw, 1.25rem)` | 700 | 1.3 | -0.01em | Sub-headings (17.6px → 20px) |

**Note**: Negative letter-spacing on headings is a signature characteristic — tight tracking creates a dense, editorial feel.

### Mono Labels (JetBrains Mono)

| Element | Size | Weight | Letter-spacing | Transform | Color |
|---|---|---|---|---|---|
| Eyebrow/Tag | 0.72rem (11.5px) | 500 | 0.14em | UPPERCASE | `--sand` |
| Process number | 0.72rem | 500 | 0.14em | — | `--accent` |
| Footer heading | 0.72rem | 500 | 0.14em | UPPERCASE | `paper/50%` |
| Caption | 0.72rem | 500 | 0.14em | UPPERCASE | `--sand` |

### Body Text (Bricolage Grotesque)

| Element | Size | Weight | Line-height | Color |
|---|---|---|---|---|
| Body (desktop) | 1.05rem (16.8px) | 400 | 1.75 | `--fg` |
| Body (mobile) | 0.97rem (15.5px) | 400 | 1.72 | `--fg` |
| Section lead/intro | 1.15rem (18.4px) | 400 | 1.7 | `--ink-soft` |
| Small text | 0.85rem (13.6px) | 400 | 1.6 | `--muted` |

### Buttons (Bricolage Grotesque)

| Variant | Size | Weight | Letter-spacing | Transform |
|---|---|---|---|---|
| Primary/Secondary | 0.85rem (13.6px) | 600 | 0.04em | — |
| With arrow (→) | Same + arrow inline | 600 | 0.04em | Arrow translates on hover |

## Typographic Patterns

### Section Header Pattern
```
[MONO TAG: JetBrains Mono 500, 0.72rem, 0.14em spacing, UPPERCASE, sand]
↓ var(--s-3) = 12px
[H2: Bricolage 800, clamp(1.75-2.8rem), -0.025em tracking, ink]
↓ var(--s-4) = 16px
[LEAD: Bricolage 400, 1.15rem, line-height 1.7, ink-soft]
```

### Card Title Pattern
```
[H3: Bricolage 700, clamp(1.25-1.5rem), -0.015em tracking, ink]
[BODY: Bricolage 400, body size, line-height 1.75, ink-soft or muted]
```

### Process Step Pattern
```
[NUMBER: JetBrains Mono 500, 0.72rem, accent color]
[H3: Bricolage 700, step title]
[BODY: Bricolage 400, description]
```
