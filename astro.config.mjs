import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://profegerman.cl",
  vite: {
    plugins: [tailwindcss()],
  },
});