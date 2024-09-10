import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3002,
		host: true
	},
	output: "hybrid",
	adapter: vercel({
		includeFiles: ["./src/og/test.ttf"]
	})
});
