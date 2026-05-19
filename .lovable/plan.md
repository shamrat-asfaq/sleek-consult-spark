## Build Plan — Multiple Icon Technologies website

Build a multi-page marketing site for Multiple Icon Technologies using the chosen **Command Center** direction (Noir & Gold, Space Grotesk + DM Sans, hero-grid composition with telemetry-style sidebars and hairline dividers).

### Pages (TanStack Start routes)
- `/` — Home (hero with telemetry sidebar, industries ticker, 6-service core pillars grid, delivery framework, leadership quote, contact CTA)
- `/services` — All 6 service pillars expanded with capabilities and outcomes
- `/industries` — 8 sectors served (Government, Smart Cities, Banking, Telecom, Energy, Manufacturing, Logistics, Healthcare)
- `/about` — Company positioning, strategic pillars, leadership statements
- `/contact` — Full contact form + global office list

### Design tokens (verbatim from chosen direction)
- `--noir-bg: #0d0d0d`, `--noir-surface: #1a1a1a`, `--gold-brand: #c9a84c`, `--gold-light: #f0d78c`
- Headings: Space Grotesk (300–700); Body: DM Sans
- Hairline `zinc-800/50` borders, gold pulse status dots, `gap-px` grid separators
- All colors mapped to semantic tokens in `src/styles.css` (oklch), then exposed via `@theme inline`

### Components
- `SiteNav` — sticky noir nav with brand wordmark + Initialize Project CTA
- `SiteFooter` — multi-column footer with legal links and global office strip
- `HeroGrid` — 8/4 split with main headline and telemetry stat sidebar
- `IndustriesTicker` — horizontal scrolling industry strip
- `ServiceCard`, `PillarTimeline`, `LeadershipQuote`, `ContactForm`

### Assets
- Generate two hero images via `imagegen` (gold-on-noir circuit telemetry + dark server-facility wireframe with gold accents). No stock photos.

### SEO
- Per-route `head()` with unique title + meta description + og tags
- Single H1 per page; semantic sectioning

### Technical
- Replace placeholder `src/routes/index.tsx`
- Add Google Fonts (Space Grotesk + DM Sans) via stylesheet link in `__root.tsx` head
- Update `src/styles.css` with the Noir & Gold token set (light + dark unified — site is permanently dark)
- All shared components in `src/components/site/`

No backend, auth, or Lovable Cloud needed for this build.
