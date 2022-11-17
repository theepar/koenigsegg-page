import { copyFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubPagesFallback = {
  name: "github-pages-fallback",
  apply: "build",
  async closeBundle() {
    await copyFile(resolve("docs/index.html"), resolve("docs/404.html"));
    await writeFile(resolve("docs/.nojekyll"), "");
  },
};

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/koenigsegg-page/" : "/",
  plugins: [react(), githubPagesFallback],
  publicDir: "static",
  build: { outDir: "docs" },
}));
