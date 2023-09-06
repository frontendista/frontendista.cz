import { defineConfig } from "astro/config";

const PORTS = {
	dev: 3000,
	preview: 3001,
} as const;

const SITES: Record<typeof process.env.VERCEL_ENV, string> = {
	development: `http://localhost:${PORTS.dev}`,
	preview: "https://staging.frontendista.cz",
	production: "https://frontendista.cz"
} as const;

export default defineConfig({
	site: SITES[process.env.VERCEL_ENV] || SITES.development,
	trailingSlash: "never",
	build: {
		format: "file"
	}
});
