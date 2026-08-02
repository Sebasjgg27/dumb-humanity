// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_BASE_URL || 'https://sebasjgg27.github.io';

export default defineConfig({
  site,
  base: '/dumb-humanity',
  output: 'static',
  integrations: [mdx()],
  vite: {
    // @ts-expect-error - vite version mismatch between tailwind plugin and astro's bundled vite
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
