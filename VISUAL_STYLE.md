# Visual Style — nextlevel.

## Design Philosophy

**Editorial minimalism with warmth.** The site feels like a well-designed print piece brought to the screen — warm paper texture, dark ink, intentional typography, and a single pop of terracotta. Every element earns its space. Nothing is decorative without purpose.

Reference: [foursevenmedia.co.uk](https://foursevenmedia.co.uk/) — the design draws from this editorial web aesthetic.

## Design Tokens

### Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--r-sm` | `6px` | Hamburger menu |
| `--r-md` | `10px` | Browser mockups (shots), form inputs |
| `--r-lg` | `16px` | Cards, contact form, case study cards |
| `--r-pill` | `999px` | Buttons, tags, WhatsApp button |

**Design rule**: Buttons are **always pill-shaped** (`999px`). Cards are **softly rounded** (`16px`). The contrast between pill buttons and rectangular cards creates visual rhythm.

### Spacing Scale (base 4px)

| Token | Value | Usage |
|---|---|---|
| `--s-1` | `4px` | Micro spacing |
| `--s-2` | `8px` | Tight spacing |
| `--s-3` | `12px` | Tag-to-heading gap |
| `--s-4` | `16px` | Heading-to-body gap |
| `--s-5` | `24px` | Element spacing |
| `--s-6` | `32px` | Section sub-spacing |
| `--s-7` | `48px` | Card gaps |
| `--s-8` | `64px` | Inter-section spacing |
| `--s-9` | `96px` | Major section padding |

### Timing

| Token | Value | Usage |
|---|---|---|
| `--dur-fast` | `180ms` | Micro interactions |
| `--dur-base` | `320ms` | Standard transitions |
| `--dur-slow` | `600ms` | Entrance animations, reveals |
| Easing | `cubic-bezier(0.2, 0.65, 0.25, 1)` | Primary easing — smooth deceleration |

## Layout

### Container
```css
max-width: 1280px; /* --maxw */
margin: 0 auto;
/* Responsive gutters: */
padding: 0 20px;   /* mobile */
padding: 0 32px;   /* 768px+ */
padding: 0 56px;   /* 1280px+ */
```

### Navbar
```css
height: 64px;  /* mobile */
height: 72px;  /* 768px+ */
height: 80px;  /* 1280px+ */
/* On scroll: backdrop-blur + semi-transparent paper background */
backdrop-filter: saturate(140%) blur(14px);
background: rgba(241, 232, 216, 0.72);
```

### Section Spacing
- Major sections use `--s-9` (96px) vertical padding
- Content within sections uses `--s-7` (48px) and `--s-8` (64px) gaps

### Grid Patterns
- **Services**: 3-column grid on desktop, 1-column on mobile
- **Process**: 4 items in a row on desktop, 2-column on tablet, 1-column on mobile
- **Gallery**: Full-width stacked case studies

## Shadows

### Elevation System

| Element | Shadow | Description |
|---|---|---|
| Cards (hover) | `0 24px 60px -32px rgba(26,20,16, 0.35)` | Deep, soft — card lifts dramatically |
| Primary button | `0 8px 22px -10px rgba(210,67,34, 0.6)` | Terracotta glow |
| Primary button (hover) | `0 10px 28px -10px rgba(210,67,34, 0.7)` | Stronger terracotta glow |
| Browser mockup (shot) | `0 4px 24px -4px rgba(26,20,16, 0.12)` | Subtle page shadow |
| WhatsApp button | `0 8px 28px -8px rgba(37,211,102, 0.6)` | Green glow |
| Coverflow active | `0 24px 64px rgba(0,0,0, 0.28)` | Strong depth for 3D carousel |

**Signature**: The **terracotta glow** on primary buttons is the most distinctive shadow — buttons emit a warm orange light.

## Animations

### Intro Animation (Page Load)
A full-screen overlay with an SVG ring in terracotta that **shrinks from screen-center into the dot of the logo**:
1. Ring appears center-screen (`intro-ring-fill` animation — stroke draws)
2. Ring shrinks to the dot position in the navbar logo
3. Overlay fades out, revealing the page
4. Page content animates in with staggered `rise` animations

### Rise Animation (Entrance)
```css
@keyframes rise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Duration: 0.6s, staggered delays: 80ms, 180ms, 280ms, 380ms, 500ms */
```

### Scroll Reveal
```css
/* Elements start: */
opacity: 0;
transform: translateY(22px);
/* Revealed via IntersectionObserver: */
opacity: 1;
transform: translateY(0);
transition: 0.6s cubic-bezier(0.2, 0.65, 0.25, 1);
/* Process steps stagger: 110ms between each */
```

### Hover Effects

| Element | Effect |
|---|---|
| Buttons | `translateY(-1px)` + arrow `translateX(4px)` |
| Cards | `translateY(-4px)` + shadow + top accent line `scaleX(0→1)` |
| Process steps | Left/top accent line `scaleY/scaleX(0→1)` + padding shift |
| Gallery items | `padding-left: 12px` shift + arrow appears |
| Contact methods | `padding-left: 12px` shift |
| Nav links | Underline accent color `scaleX(0→1)` from left |

### Coverflow 3D Carousel (Gallery)
```css
perspective: 1400px;
/* Active slide: */
transform: scale(1) translateZ(0);
/* Adjacent slides: */
transform: scale(0.72) translateZ(-120px) translateX(±58%);
/* Auto-rotate: 3800ms interval */
/* Supports: touch swipe, keyboard arrows, click navigation */
```

## Decorative Elements

### Card Top Accent Line
A thin line at the top of service cards that scales in on hover:
```css
height: 3px;
background: var(--accent); /* #D24322 */
transform: scaleX(0);
/* On hover: */ transform: scaleX(1);
transition: transform var(--dur-base);
```

### Process Step Left Line
A vertical (desktop) or horizontal (mobile) accent line on process steps:
```css
width: 3px; /* vertical on desktop */
height: 3px; /* horizontal on mobile */
background: var(--accent);
transform: scaleY(0); /* or scaleX(0) */
/* On hover: */ transform: scaleY(1);
```

### Browser Mockup (Shot Frame)
Screenshots are displayed inside a browser-like frame with:
- macOS traffic light dots (red `#ff5f57`, yellow `#febc2e`, green `#28c840`)
- URL bar with paper-2 background
- Rounded corners (`--r-md` = 10px)
- Subtle shadow

### Inline Arrow (→)
CTAs include an arrow character that translates right on hover:
```css
.btn-arrow { transition: transform var(--dur-fast); }
:hover .btn-arrow { transform: translateX(4px); }
```

## Button Variants

### Primary (Terracotta Pill)
```css
background: var(--accent);     /* #D24322 */
color: var(--paper);           /* #F1E8D8 */
border-radius: 999px;          /* pill */
padding: 14px 32px;
font: Bricolage 600, 0.85rem, letter-spacing 0.04em;
box-shadow: 0 8px 22px -10px rgba(210,67,34, 0.6);
/* Hover: */
background: #B5371A;
transform: translateY(-1px);
box-shadow: 0 10px 28px -10px rgba(210,67,34, 0.7);
```

### Secondary (Ink Pill)
```css
background: var(--ink);        /* #1A1410 */
color: var(--paper);           /* #F1E8D8 */
border-radius: 999px;
padding: 14px 32px;
/* Hover: */
background: #2c211a;
transform: translateY(-1px);
```

### Ghost / Outline
```css
background: transparent;
color: var(--ink);
border: 1.5px solid var(--line-strong);
border-radius: 999px;
/* Hover: */
background: var(--ink);
color: var(--paper);
```

### Nav CTA
```css
background: var(--accent);
color: var(--paper);
border-radius: 999px;
padding: 10px 22px;
font-size: 0.82rem;
```

## Image Treatment

- **Portfolio screenshots**: Displayed inside browser mockup frames with macOS traffic lights
- **Gallery carousel**: 3D coverflow with perspective, active slide at full scale, adjacent at 72%
- **No decorative photos** — the site uses no stock photography or lifestyle imagery
- **SVG illustrations** preferred for portfolio mockups
- **OG Image**: 1200×630 branded image for social sharing

## Dark Sections

The **contact section and footer** use inverted colors (ink background, paper text) — this is NOT a dark mode, it's a compositional choice:
- Creates visual weight at the bottom of the page
- Frames the contact form as a distinct, focused space
- The transition from paper→ink signals: "this is where you take action"
