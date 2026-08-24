# Protomaker — Design Contract (v2 — user spec)

## Product Goal & Audience
- **Business**: Protomaker — custom 3D-printed accessories. Catalog per user spec: 3 categories (Phone Accessories, Personalized Keyrings, 3D Tech Gadgets), 6 products with fixed prices.
- **Audience**: Consumers buying custom 3D-printed phone/gadget accessories (FR + AR markets; site trilingual EN/FR/AR with RTL).
- **Purpose**: Product showcase + WhatsApp ordering. Each product card: image, name, customization input (where applicable), price above CTA, "Order on WhatsApp" button. WhatsApp message includes product name, price, and customization. No payments/cart.

## Visual Direction
"Precision-Grip Dark Tech" (from the canvas-designer contract, user spec authoritative): Deep Charcoal Slate `#1A1D20` background, Neon Tech Teal `#00F2FE` accents for CTAs, Crisp White text. Dark, high-contrast, technical. Flat surfaces, thin 1px borders (`#303030`), no gradients, no shadows. Monospaced technical type for headings/labels/buttons, system sans for body. Logo: inline SVG mark — 3D layer grid / nozzle forming the letter P in teal, with monospaced PROTOMAKER wordmark.

## Reference Sources
- `vendor/open-design/adapter/STATIC_POLICY.md` — static usage boundaries.
- `vendor/open-design/upstream/design-systems/Hardware-Clinical-Precision/DESIGN.md` — clinical/hardware aesthetic grounding (monospace stacks, thin borders, precision).
- `vendor/open-design/upstream/design-systems/Hardware-Clinical-Precision/tokens.css` — spacing rhythm + border tokens (components.manifest.json absent in this system; noted).
- `vendor/open-design/upstream/craft/anti-ai-slop.md` — no indigo family; no trust gradients; no emoji icons; monoline SVG currentColor; no invented metrics beyond user's prices.
- `vendor/open-design/upstream/craft/rtl-and-bidi.md` — Arabic RTL, logical properties, no letter-spacing on Arabic.
- `vendor/open-design/upstream/craft/typography.md` — all-caps tracking, mono line-heights.

## Vendor Grounding
- **Applies to**: material redesign (full visual system change).
- **Baseline**: Hardware-Clinical-Precision (adapted to user's palette).
- **Token source**: `tokens.css` → `:root` variables in `src/styles.css`.
- **Anti-ai-slop checks**: accent `#00F2FE` (cyan — not banned indigo); flat surfaces, no two-stop gradients; monoline lucide SVG icons; no emoji; prices are user-provided (not invented); no filler copy; real Pexels photos local.
- **Intentional deviations**: (1) IBM Plex Mono / DM Mono not self-hostable here → system monospace stack (`ui-monospace, 'SF Mono', Menlo, Consolas, monospace`) for technical type; Arabic display/body uses self-hosted Cairo (existing woff2 in `public/fonts/`); long body copy uses system-ui sans for readability. (2) Logo implemented as inline SVG component (not a generated raster). (3) Process/Why sections use monoline icons, no photos.

## Design Tokens
```css
:root {
  --bg-primary: #1a1d20;      /* deep charcoal slate */
  --bg-secondary: #24282c;    /* elevated surface */
  --accent: #00f2fe;          /* neon tech teal — CTAs only */
  --text-primary: #ffffff;
  --text-muted: #a0aec0;
  --border: #303030;
  --radius-container: 0px;
  --radius-action: 8px;
  --space-gutter: 24px;
  --grid-gap: 32px;
  --font-technical: ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace;
  --font-body: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
[lang='ar'] { --font-technical: 'Cairo', system-ui, sans-serif; }
```

## Page Structure
1. **Header (sticky)**: SVG logo mark + PROTOMAKER wordmark, nav (Products, FAQ), language switcher EN/FR/AR, WhatsApp order CTA.
2. **Hero**: dark bg photo with overlay, mono eyebrow, big all-caps headline, sub, WhatsApp CTA + browse link.
3. **Category Matrix (core)**: 3 columns desktop / 1 col mobile — (1) Phone Accessories, (2) Personalized Keyrings, (3) 3D Tech Gadgets. Each column: category header (image + title) then 2 product cards.
4. **Process**: 4 mono-indexed steps (Design → Print → Inspect → WhatsApp), icons.
5. **Why us**: feature grid (durable PETG, precision, fast on WhatsApp).
6. **FAQ**: accordion, 5 questions.
7. **CTA band**: teal strip, WhatsApp CTA + phone.
8. **Footer**: logo, links, contact.

## Component Plan
| data-component | Responsibility |
|---|---|
| `header` | Logo, nav, language switcher, order CTA |
| `hero` | First-screen hook |
| `category-grid` | 3-column category matrix |
| `product-card` | Image, name, customization input (conditional, max 10 chars), price, WhatsApp button |
| `wa-button` | Prefilled localized WhatsApp link (product + price + customization) |
| `process-step` | Mono-indexed step |
| `faq-item` | Accordion |
| `cta-band` | Final conversion |
| `site-footer` | Contact + links |

## Copy Tone
Technical, precise, no fluff. Cards show feature bullets ("Adjustable viewing angle, weighted base"). CTAs: "Order on WhatsApp" / "Commander sur WhatsApp" / "اطلب عبر واتساب". Prices in USD as given by user ($14.99 etc.).

## Responsive Rules
- 3-column grid → 2-col (768) → 1-col (<768). Full-width buttons on mobile. Touch targets ≥44px; focus-visible 2px teal outline.
- RTL: logical properties; `dir="rtl"` on html; Arabic headings Cairo, no letter-spacing/uppercase transforms; `overflow-wrap: anywhere` on wa links.

## Implementation Notes
- WhatsApp link: `https://wa.me/33654259348?text=<encoded>` where message = localized `Order details: {product} — {price}{ — Customization: {custom}}` (customization omitted when empty; input capped at 10 chars with live counter).
- i18n: LanguageContext (existing), dir/lang switch; keep number +33 6 54 25 93 48.
- ProductCard becomes stateful (customization input) — local state only, link rebuilt on change.
- Category columns component groups the 6 products by category; Products page keeps full grid + tabs.

## Image Manifest (10 images, each used exactly once)
| Local Path | Source | Usage |
|---|---|---|
| public/assets/images/hero/hero-tech.jpg | pexels:3861970 | Hero background (dark, low-opacity overlay) |
| public/assets/images/categories/cat-accessories.jpg | reuse-existing (pexels:15255845) | Category 1 header — Phone Accessories |
| public/assets/images/categories/cat-keyrings.jpg | reuse-existing (pexels:35101964) | Category 2 header — Personalized Keyrings |
| public/assets/images/categories/tech-gadgets.jpg | pexels:3861969 | Category 3 header — 3D Tech Gadgets |
| public/assets/images/products/prod-phone-stand.jpg | reuse-existing (pexels:16003882) | Product — Custom MagSafe Phone Stand |
| public/assets/images/products/prod-name-keyring.jpg | reuse-existing (pexels:16151368) | Product — Custom Name Keychain |
| public/assets/images/products/prod-phone-case.jpg | reuse-existing (pexels:19784109) | Product — Minimalist Phone Case Frame |
| public/assets/images/products/cable-clips.jpg | pexels:4549448 | Product — Modular Cable Management Clips |
| public/assets/images/products/plate-keyring.jpg | pexels:5413302 | Product — Custom Car License Plate Keyring |
| public/assets/images/products/headphone-hanger.jpg | pexels:3776606 | Product — Headphone Desk Hanger Mount |

Retired (removed from project): old hero-3d-printer.jpg, cat-cases.jpg, cat-gifts.jpg, prod-card-holder.jpg, prod-phone-charm.jpg, prod-figurine-keychain.jpg, prod-desk-organizer.jpg, prod-gift-box.jpg, process-tray.jpg, process-filament.jpg (replaced by new spec; sources recorded above for re-download if ever needed).

## Risks / Open Questions
- Prices shown as USD ($) per user spec; if owner wants EUR, swap currency strings.
- WhatsApp number +33 6 54 25 93 48 (shared with BichBich Phone; flagged earlier).
- Customization inputs apply to Custom Name Keychain and Custom Car License Plate Keyring only (per spec "if applicable").
