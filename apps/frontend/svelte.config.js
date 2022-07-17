import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	preprocess: preprocess({
		postcss: true,
		replace: process.env.KEEP_TEST_ID ? [] : [[/data-test=".*"/g, ""]]
	}),
	kit: {
		adapter: vercel(),
		prerender: {
			default: true
		}
	}
};

export default config;
