import { defineConfig } from "astro/config";

// Integations
import MinifyHTML from "@frontendista/astro-html-minify";
import UnoCSS from "unocss/astro";

import { browserslist } from "./package.json";

// Default environment variables
process.env = Object.assign({
	VERCEL_ENV: "development"
} as typeof process.env, process.env);

export const PORTS = {
	dev: 3000,
	preview: 3001,
} as const;

export const SITES: Record<typeof process.env.VERCEL_ENV, string> = {
	development: `http://localhost:${PORTS.dev}`,
	preview: "https://staging.frontendista.cz",
	production: "https://frontendista.cz"
} as const;

export default defineConfig({
	site: SITES[process.env.VERCEL_ENV] || SITES.development,
	trailingSlash: "never",
	build: {
		format: "file"
	},
	vite: {
		css: {
			transformer: "lightningcss"
		},
		build: {
			cssMinify: "lightningcss",
		}
	},
	server({ command }) {
		return {
			port: PORTS[command],
			host: true,
			open: true
		};
	},
	integrations: [
		MinifyHTML({
			css: {
				browserslist: browserslist.join(", ")
			}
		}),
		UnoCSS()
	]
});
