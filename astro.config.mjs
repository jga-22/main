import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://jga-22.github.io/main",
  base: "/main",
  trailingSlash: "always",
  output: "static",
  outDir: "./docs"
});
