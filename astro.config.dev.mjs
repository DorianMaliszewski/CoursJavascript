process.env.DEBUG = "*"; // Active tous les logs de débogage

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	site: "http://localhost:4321",
	base: "/",
	output: "server",
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
    routing: {
        prefixDefaultLocale: true
    }
	},
});
