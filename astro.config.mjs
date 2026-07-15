// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import rehypeMermaid from "rehype-mermaid";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://css.jonathanbello.com",
  integrations: [react(), sitemap()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),

  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
    rehypePlugins: [rehypeMermaid],
  },
});