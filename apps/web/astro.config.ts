import { defineConfig } from "astro/config";

import minify from "@frontendista/astro-html-minify";

import blist from "browserslist-to-esbuild";

import { browserslist } from "./package.json";

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
			target: blist(browserslist)
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
		minify({
			css: {
				browserslist: browserslist.join(", ")
			}
		})
	]
});
