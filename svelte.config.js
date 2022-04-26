import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$common: resolve('./src/lib/components/__common__'),
					$components: resolve('./src/lib/components'),
					$modules: resolve('./src/lib/modules'),
					$stores: resolve('./src/lib/stores'),
					$stylesheets: resolve('./src/lib/stylesheets'),
					$utils: resolve('./src/lib/utils')
				}
			}
		}
	}
};

export default config;
