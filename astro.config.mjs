import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mikesachs-gtm.github.io",
  base: "/Symptoms-Systems-Revenue-Rounds",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
