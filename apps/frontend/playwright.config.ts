import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 3000
	},
	testMatch: /.*(e2e)\.(js|ts|mjs)/
};

export default config;
