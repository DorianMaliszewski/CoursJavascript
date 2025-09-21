import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import nodeAdapter from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: 'server',                
  adapter: nodeAdapter({ mode: 'standalone' }),
  
  server: { host: true, port: 4321 }, 
  integrations: [tailwind(), react()],
  site: "https://doto.ovh",
  base: "/",
  prefetch: true
});
