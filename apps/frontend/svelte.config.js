import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		// TODO: See usage https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel#usage
		adapter: vercel(),
		prerender: {
			default: true
		}
	}
};

export default config;
