// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite"; // 1. Importujemy loadEnv
import sanity from '@sanity/astro';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// 2. Pobieramy zmienne środowiskowe ręcznie
const { SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: 'https://custom-steel.eu',
  output: 'server',
  adapter: netlify(),
  i18n: {
    locales: ['pl', 'en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect'
    }
  },
  integrations: [
    sanity({
      // 3. Używamy pobranych zmiennych
      projectId: SANITY_PROJECT_ID,
      dataset: NEXT_PUBLIC_SANITY_DATASET,
      useCdn: false,
    }),
    icon(),
    sitemap(),
    robotsTxt(),
  ]
});
