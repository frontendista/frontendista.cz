import { resolve } from "path";
import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// TODO: See usage https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel#usage
		adapter: vercel(),
		prerender: {
			default: true
		},
		vite: {
			resolve: {
				alias: {
					$common: resolve("./src/lib/components/__common__"),
					$components: resolve("./src/lib/components"),
					$modules: resolve("./src/lib/modules"),
					$stores: resolve("./src/lib/stores"),
					$stylesheets: resolve("./src/lib/stylesheets"),
					$utils: resolve("./src/lib/utils")
				}
			},
			server: {
				host: "frontendista.internal",
				port: 80
			}
		}
	}
};

export default config;
