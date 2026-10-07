// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
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
