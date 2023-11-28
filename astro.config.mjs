import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import rehypeSlug from "rehype-slug"
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import rehypeToc from "rehype-toc"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    mdx(),
    react(),
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeParse, rehypeStringify, rehypeToc]
  }
});
