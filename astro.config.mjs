import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
const port = Number(process.env.PORT) || 3000;

console.log('starting astro server on', PORT);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: { port, host: true, }
} );