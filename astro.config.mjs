// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const isUserSite = repositoryName?.endsWith(".github.io");
const base = repositoryName && !isUserSite ? `/${repositoryName}` : undefined;

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://anvesh-gupta.vercel.app",
  base,
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
