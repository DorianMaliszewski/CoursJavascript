import { defineConfig, envField } from "astro/config";
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
	prefetch: true,
	env: {
	schema: {
		QUIZ_PASSWORD: envField.string({ context: "client", access: "public", optional: true }),
	}
  }
});
