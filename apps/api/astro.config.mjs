import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3002,
		host: true
	},
	output: "static",
	adapter: vercel()
});
