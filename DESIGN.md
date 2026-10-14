# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Calm, tidy light finance UI with a warm emerald accent — trustworthy like a banking app, but soft and single-purpose for a one-screen mobile tip calculator.

## Colors

- `--color-bg`: **#F6F7F9**
- `--color-surface`: **#FFFFFF**
- `--color-fg`: **#16181D**
- `--color-muted`: **#6B7280**
- `--color-border`: **#E4E7EB**
- `--color-accent`: **#0E9F6E**
- `--color-accentPressed`: **#0B7D56**
- `--color-accentSoft`: **#E6F5EF**
- `--color-danger`: **#D64545**
- `--color-dangerSoft`: **#FDECEC**
- `--color-focusRing`: **#9BE3C6**

## Typography

- `font_family`: System, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `label_weight`: 600
- `size_title`: 28px
- `size_label`: 15px
- `size_input`: 20px
- `size_result`: 17px
- `size_result_emphasis`: 22px
- `size_error`: 14px
- `line_height`: 1.4

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px

## Border-Radii

- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 20px
- `--radius-pill`: 999px

## Components

### Button

Primary action button. Padding 14px 24px, radius=pill, bg=accent (#0E9F6E), label=surface (#FFFFFF), weight 600, size 16px, min-height 44px (mobile tap target), full-width on the mobile screen. States: default bg=accent; hover bg=#0C8D61, no size shift; active/pressed bg=accentPressed (#0B7D56) with 150ms ease-out, slight scale 0.98; focus 2px ring focusRing (#9BE3C6) offset 2px; disabled bg=#D3D7DC, label=#9AA1AA, opacity 1. Note: the current single-screen app has no submit button (results are live), so Button is reserved for future actions; keep the spec ready so any added action looks consistent.

### InputField

Labelled text field for 'Betrag', 'Trinkgeld (%)' and 'Personenzahl'. Vertical stack: label (size_label 15px, weight 600, color fg, margin-bottom 8px) above the input. Input box: bg=surface, border 1px border (#E4E7EB), radius=md (12px), padding 14px 16px, text size_input 20px, weight 400, color fg, placeholder color muted (#6B7280), min-height 48px, keyboardType='decimal-pad' for Betrag and Trinkgeld, 'number-pad' for Personenzahl. States: default border=border; focus border=accent + 2px focusRing glow; error border=danger (#D64545) + bg stays surface; disabled bg=#F0F1F3, color muted. Full input width, 16px gap between fields.

### ResultRow

One of the three live result lines ('Trinkgeld', 'Gesamt', 'Pro Person'). Horizontal flex, space-between, align center, padding 16px 20px, bg=surface, radius=md (12px), border 1px border. Left: label, size_result 17px, weight 500, color muted. Right: value, size_result_emphasis 22px, weight 700, color fg, font-variant-numeric: tabular-nums so digits do not jitter while typing. The 'Gesamt' row is emphasised: bg=accentSoft (#E6F5EF), border transparent, value color=accentPressed (#0B7D56). Rows stacked with 8px gap; the whole result block sits 24px below the last input. Hidden entirely when an input is invalid.

### ErrorMessage

Short inline German error text shown only for the field the user has actually typed in. Hidden when the field is untouched (fresh screen shows no error). Layout: row, bg=dangerSoft (#FDECEC), radius=sm (8px), padding 10px 14px, text size_error 14px, weight 500, color=danger (#D64545). Sits directly under the affected input, 8px below it, replaces nothing else on screen. When any error is present the whole ResultRow block is not rendered.

### ScreenContainer

Single-screen scaffold. Safe-area padding: top 24px, horizontal 20px, bottom 32px. Scrollable content (ScrollView) so the result rows stay readable with the keyboard open: nested layout places the result block above the keyboard and uses automaticallyAdjustKeyboardInsets / KeyboardAvoidingView with behavior 'padding' on iOS, 'height' on Android. Vertical rhythm between blocks: title 24px below top padding, inputs group, 24px, results block. No second screen, no navigation bar.

### ScreenTitle

The one heading 'Trinkgeld-Rechner'. Size_title 28px, weight 700 (heading_weight), color fg, line-height 1.2, margin-bottom 24px, left-aligned. Keep one screen title only with no subtitle.

## Layout Principles

- Single column, mobile-first: content max-width 480px, centered horizontally; on the web build it sits in a centered card on the bg, on phones it fills the width minus 20px side padding.
- Fixed vertical order on the only screen: title 'Trinkgeld-Rechner' → three InputFields ('Betrag', 'Trinkgeld (%)', 'Personenzahl') → spacer 24px → three ResultRows ('Trinkgeld', 'Gesamt', 'Pro Person'). No navigation, no secondary screen.
- Spacing scale is the only rhythm source: 8px between a label and its input, 16px between fields, 8px between result rows, 24px between major blocks, 32px bottom padding.
- Breakpoints (web build only): <480px full-bleed single column; 480–768px centered 480px card; >768px same centered card on bg. Nothing changes structurally — it is always one column.
- One number format for everything the app shows: amounts use German locale, two decimals, comma as decimal separator, '.' as thousands separator, trailing ' €'. Examples: '10,00 €', '110,00 €', '55,00 €', '1.234,56 €'. Values are rounded half-up to whole cents before display.
- The percent field is plain input for 'Trinkgeld (%)': accept digits and an optional comma/dot, render the typed value as entered, and treat the '%' only as the field label — never append a unit inside the input.
- Visual hierarchy: neutral grey inputs at rest, emerald accent only for focus and the emphasised 'Gesamt' row, red reserved exclusively for error messages — so red never appears on a fresh, valid screen.
- Accessibility & readability: every tappable element ≥44px tall, input text ≥16px to prevent iOS zoom, contrast of fg (#16181D) on surface (#FFFFFF) ~15:1 and accent text (#0B7D56) on accentSoft (#E6F5EF) ~4.8:1, both at or above WCAG AA.
- Keep it quiet: no shadows heavier than a 1px border, no gradients, one accent hue only — clarity and consistency beat decoration on a utility screen.
