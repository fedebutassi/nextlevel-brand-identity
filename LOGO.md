# Logo — nextlevel.

## Description

The nextlevel. logo is a **typographic wordmark** — no icon, no symbol, just the name rendered in a specific way.

### Construction

- **Text**: "nextlevel" in lowercase, set in **Bricolage Grotesque ExtraBold (800 weight)**
- **Period**: A dot "." at the end, in **terracotta accent color** (`#D24322`)
- **Text color**: Ink (`#1A1410`) — or Paper (`#F1E8D8`) on dark backgrounds
- **Background**: Transparent

### The Terracotta Dot

The dot is the single most important brand element. It:
- Adds a **punctuation mark as visual identity** — deliberate, final, confident
- Introduces the **only color** in an otherwise monochrome wordmark
- Creates a **visual anchor** — the eye lands on it
- Suggests **completion** — "we finish what we start"
- Is carried into the **favicon** ("nl.") and the **intro animation** (the dot shrinks from full-screen ring to its position in the logo)

## Logo Files

| File | Format | Description |
|---|---|---|
| `assets/logo.svg` | SVG (350×60) | Primary logo — ink text + terracotta dot |
| `assets/logo-dark.svg` | SVG (350×60) | Dark-background logo — paper text + terracotta dot |
| `assets/logo.png` | PNG | Fallback raster version |
| `assets/favicon.svg` | SVG (512×512) | Favicon — paper background, "nl." text |

## Logo Variants

### Primary (Light Background)
- Text: `#1A1410` (ink)
- Dot: `#D24322` (accent)
- Background: Transparent
- **Usage**: Navbar, hero, general placement on paper backgrounds

### Dark Background
- Text: Paper (`#F1E8D8`)
- Dot: Terracotta (`#D24322`), igual que en la versión principal
- Background: Ink (`#1A1410`)
- Asset: `assets/logo-dark.svg`
- **Usage**: Footer on ink background
- **Note**: El punto terracota debe conservarse siempre porque es el gesto distintivo de la marca.

### Favicon
- Background: Paper cream `#F1E8D8` (rounded square, rx/ry=72)
- Text: "nl" in Bricolage Grotesque 800 (ink/black)
- Dot: Terracotta `#D24322`
- **Usage**: Browser tab, bookmarks, app icon

## Dimensions

| Context | Height | Width |
|---|---|---|
| Navbar (desktop) | 22px | auto |
| Navbar (mobile) | 20px | auto |
| Footer | 22px | auto (`assets/logo-dark.svg`) |
| Favicon | 512×512 viewBox | — |

## Usage Rules

1. The logo is **always lowercase** — "nextlevel." never "NextLevel." or "NEXTLEVEL."
2. The **dot is mandatory** — without it, it's just a word, not a logo
3. The dot is **always terracotta** (`#D24322`) on every background
4. **Never** add outlines, shadows, glows, or effects to the logo
5. **Never** change the typeface — it must be Bricolage Grotesque 800
6. **Never** separate the dot from the wordmark or use it as a standalone element (except in the intro animation)
7. Maintain **minimum clear space** equal to the height of the lowercase "n" on all sides
8. The logo is **horizontal only** — never stack or rearrange the letters
9. On dark backgrounds, set only the wordmark to Paper and preserve the dot in terracotta (`#D24322`)
10. Use `assets/logo-dark.svg` on Ink backgrounds; never apply a global CSS or SVG inversion to `assets/logo.svg`
