// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite"; // 1. Importujemy loadEnv
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import icon from 'astro-icon';

// 2. Pobieramy zmienne środowiskowe ręcznie
const { SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['pl', 'en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [
    sanity({
      // 3. Używamy pobranych zmiennych
      projectId: SANITY_PROJECT_ID,
      dataset: NEXT_PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
    icon(),
  ]
});