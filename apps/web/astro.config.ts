import { resolve } from "node:path";
import { config } from "dotenv";

import { defineConfig } from "astro/config";
import { setupServer } from "msw/node";

import blist from "browserslist-to-esbuild";

import { handlers as githubMSW } from "./src/mocks/github";
import { handlers as spotifyMSW } from "./src/mocks/spotify";

// Integations
import MinifyHTML from "@frontendista/astro-html-minify";
import TailwindCSS from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

import { browserslist } from "./package.json";

config();

// Default environment variables
process.env = Object.assign({
	VERCEL_ENV: "development",
	ENABLE_MOCKS: "0",
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

if (process.env.VERCEL_ENV !== "production" || process.env.ENABLE_MOCKS === "1") {
	const server = setupServer(...githubMSW, ...spotifyMSW);
	server.listen();
}

const integrations = [
	TailwindCSS({
		applyBaseStyles: false
	}),
	MinifyHTML({
		html: {
			removeComments: process.env.VERCEL_ENV === "production",
			collapseWhitespace: true,
			conservativeCollapse: true,
			preserveLineBreaks: false,
			sortAttributes: false
		},
		css: {
			browserslist: browserslist.join(", ")
		}
	})
];

const rollupPlugins = [];

if (process.env.VERCEL_ENV === "production") {
	try {
		const { default: licence } = await import("rollup-plugin-license");
		const { default: sitemap } = await import("@astrojs/sitemap");

		rollupPlugins.push(
			licence({
				sourcemap: false,
				thirdParty: {
					output: resolve("./.vercel/output/static/legal.txt"),
				}
			})
		);

		integrations.push(
			sitemap({
				filter: (page) => new URL(page).pathname !== "/collaboration",
			})
		);
	} catch (error) {
		throw new Error("Couldn't finish production build\".", {
			cause: error
		});
	}
}

export default defineConfig({
	adapter: vercel(),
	site: SITES[process.env.VERCEL_ENV] || SITES.development,
	trailingSlash: "never",
	build: {
		format: "file",
		assets: "assets"
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
			cssMinify: "lightningcss",
			target: blist(browserslist),
			rollupOptions: {
				plugins: rollupPlugins,
				output: {
					entryFileNames: "assets/[hash:16].js",
					assetFileNames: "assets/[hash:16][extname]"
				}
			}
		}
	},
	server({ command }) {
		return {
			port: PORTS[command],
			host: true,
			open: process.platform !== "win32"
		};
	},
	integrations
});
