// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://padtanakran.github.io',
  base: '/kamirim-dev',
  integrations: [sitemap()],
  output: 'static',
});
