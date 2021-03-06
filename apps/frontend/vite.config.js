import { defineConfig } from "vite";
import { resolve } from "path";

import svg from "vite-plugin-svelte-svg";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	resolve: {
		alias: {
			$common: resolve("./src/lib/components/__common__"),
			$components: resolve("./src/lib/components"),
			$modules: resolve("./src/lib/modules"),
			$stores: resolve("./src/lib/stores"),
			$stylesheets: resolve("./src/lib/stylesheets"),
			$utils: resolve("./src/lib/utils"),
			$icons: resolve("./src/lib/icons"),
			$root: resolve("./src"),
			$types: resolve("./src/types")
		}
	},
	server: {
		port: 3000
	},
	preview: {
		port: 3300
	},
	plugins: [sveltekit(), svg(), vanillaExtractPlugin()]
});
