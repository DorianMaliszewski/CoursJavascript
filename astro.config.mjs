process.env.DEBUG = "*"; // Active tous les logs de débogage

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import nodeAdapter from '@astrojs/node'; // ✅ nom explicite, plus d'ambiguïté


// https://astro.build/config
export default defineConfig({
  output: 'server',                
  adapter: nodeAdapter({ mode: 'standalone' }),
  
  server: { host: true, port: 4321 }, 
  integrations: [tailwind(), react()],
  site: "https://doto.ovh",
  base: "/",
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      fallbackType: "redirect",
    }
	},
});
