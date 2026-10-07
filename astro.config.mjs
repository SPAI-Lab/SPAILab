// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://spai-lab.github.io/SPAI_LAB/
  site: 'https://spai-lab.github.io',
  base: '/SPAI_LAB',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    css: {
      preprocessorOptions: {
        // Lets every .scss / <style lang="scss"> write `@use 'tokens'` / `@use 'mixins'`
        scss: { loadPaths: ['src/styles'] },
      },
    },
    build: {
      assetsInlineLimit: 10240,
    },
  },

  integrations: [react()],
});
