// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), pagefind()],

  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://lemon-lime-honey.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light-high-contrast',
      wrap: true,
    },
  },
});
