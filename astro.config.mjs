// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: echte Domain eintragen, sobald bekannt ([PRÜFEN])
// Wird für sitemap.xml, canonical-URLs und Open-Graph-Bilder verwendet.
const SITE = process.env.PUBLIC_SITE_URL || 'https://www.kraus-reinigung.de';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Rechtsseiten stehen auf noindex, solange sie Platzhalter enthalten –
      // sie gehören daher (noch) nicht in die Sitemap.
      filter: (page) =>
        !['/404', '/impressum', '/datenschutz'].some((p) => page.includes(p)),
    }),
  ],
});
