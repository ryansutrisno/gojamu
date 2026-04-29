import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://gojamu.com',
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs20.x',
  }),
});
