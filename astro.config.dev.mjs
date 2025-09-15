import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import nodeAdapter from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	adapter: nodeAdapter({ mode: 'standalone' }),
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
