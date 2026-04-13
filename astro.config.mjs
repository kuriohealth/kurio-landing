import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kurio.health",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
