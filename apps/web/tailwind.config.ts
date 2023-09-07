import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.astro"],
	corePlugins: {
		preflight: false
	}
};

export default config;
