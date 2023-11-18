import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import fuse from 'astro-fuse';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), react(),
    fuse({
      basedOn: 'output'
    })]
});