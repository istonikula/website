import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://istonikula.netlify.app',
  integrations: [
    icon({
      include: {
        heroicons: ['bars-3', 'chevron-down', 'home', 'swatch'],
        mdi: ['github', 'linkedin']
      }
    }),
    mdx(),
    sitemap(),
    tailwind()
  ]
});