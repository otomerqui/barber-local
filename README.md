# Barbería ES (Next.js + Tailwind v4 + Cal.com)

Next.js port of the "Blade & Co." WordPress barbershop theme: same sections, same CSS, same fonts and behaviors, in Spanish with prices in COP. Content is hardcoded.

## Run it
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_CAL_USERNAME and NEXT_PUBLIC_SITE_URL
npm run dev
```

## What was ported from the WordPress theme
- Section order: Hero, Marquee, About, Services (3-column grid + modal), Gallery, Barbers, Testimonials, Location, then Booking (Cal.com) and Footer.
- `app/blade.css` is the theme's `main.css` (BEM classes kept as-is), loaded inside Tailwind's `components` layer. Tailwind v4 utilities still override it.
- Design tokens (colors, fonts) live in `@theme` in `app/globals.css`, so `bg-gold`, `text-gray-light`, `font-display`, etc. work in new components.
- Fonts: the theme's own woff2 files in `app/fonts`, loaded with `next/font/local`.
- Behaviors from `main.js`: custom cursor, navbar scroll state, mobile drawer, fade-in on scroll, service modal, marquee, smooth anchor scroll with 80px offset.

## Per-client setup
1. **Content:** everything is in `lib/site.ts` (name, address, phone, hours, hero, about, services and COP prices, gallery, barbers, testimonials).
2. **Photos:** the images are the same Unsplash placeholders the theme falls back to. Put real photos in `public/images/` and change the URLs in `lib/site.ts` (e.g. `"/images/hero.jpg"`). Once none use Unsplash, remove `remotePatterns` from `next.config.ts`.
3. **Cal.com:** create one event type per service. The event type slug must match `calSlug` in `lib/site.ts`:
   `dar-forma-barba`, `acondicionamiento-aceite`, `corte-estandar`, `degradado-rapado`, `cabello-largo`.
   Connect Google Calendar, set availability, and check the language setting of your Cal.com account for the booking page text.
4. **Map:** built from the address in `lib/site.ts`. Replace `mapEmbedUrl` if you want a specific pin.
5. **Legal pages:** `app/politica-de-privacidad` and `app/terminos-de-servicio` contain placeholder text. Replace before launch.

## Notes
- Names, phone, testimonials, hours and address are placeholders.
- The "Desarrollado por En la Web Pro" credit comes from the original theme footer (`site.credit`).
