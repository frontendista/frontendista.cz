import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.astro"],
	corePlugins: {
		preflight: false
	},
	theme: {
		padding: {
			sm: "0.25rem",
			md: "0.5rem",
			lg: "1rem",
			xl: "2rem"
		}
	},
	plugins: [
		plugin(({ matchUtilities }) => {
			matchUtilities({
				brand: (value: unknown) => {
					if (typeof value === "function") {
						return {
							color: value("brand")
						};
					}
				
					return {
						color: value
					};
				}
			}, {
				values: {
					"500": "oklch(65.35% 0.245 317.5 / <alpha-value>)"
				},
				type: "color"
			});
		})
	]
};

export default config;
