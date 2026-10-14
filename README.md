# The Stem Cell

Stack: Astro + React Islands + Tailwind CSS v4 + Framer Motion

## Start
```bash
npm install
npm run dev
```
Open http://localhost:4321

## Folder guide
| Folder | Use |
|---|---|
| `src/pages` | Routes (one file = one page) |
| `src/layouts` | Page wrappers (head, header, footer) |
| `src/components` | Static `.astro` components (no JS sent to browser) |
| `src/islands` | React components that need interaction or animation |
| `src/lib/motion` | Shared Framer Motion variants |
| `src/styles` | Global CSS and Tailwind theme tokens |
| `src/assets` | Images/icons that Astro optimizes |
| `public` | Files served as-is (favicon, fonts, robots.txt) |

## Island rules
- Use `.astro` for anything static. Use React only when needed.
- Hydrate with `client:visible` (animations), `client:idle`, or `client:load` (above the fold).
- Import paths: `@/`, `@components/`, `@islands/`, `@lib/`.

## Before launch (TODO)
- Replace the SAMPLE testimonials in `src/data/content.ts` with real, approved patient stories.
- Add real social links in `site.socials` and a real booking link in `site.bookingHref`.
- Set `PUBLIC_FORM_ENDPOINT` in `.env` so the contact form really sends.
- Confirm the $89 consultation price (`site.consultationPrice`).
- `public/images` holds your original files. The site uses the optimized copies in `src/assets/images`, so you can delete the originals.
