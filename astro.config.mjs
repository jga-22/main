import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://juan-galvis.example.com",
  output: "static",
  outDir: "./docs"
});
