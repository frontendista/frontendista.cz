/// <reference types="vitest" />

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })]
	// test: {
	// 	globals: true,
	// 	watch: false,
	// 	environment: "happy-dom",
	// 	setupFiles: "./tests/setup.ts"
	// }
});
