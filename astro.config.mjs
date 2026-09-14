import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://profegerman.cl",
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});