import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://DorianMaliszewski.github.io",
  base: "/CoursJavascript",
  output: "static",
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
    routing: {
        prefixDefaultLocale: true
    }
	},
});
