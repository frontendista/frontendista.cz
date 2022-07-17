/// <reference types="@types/node" />

import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm cross-env KEEP_TEST_ID=true pnpm build && pnpm preview",
		port: 3300
	},
	testMatch: /.*(e2e)\.(js|ts|mjs)/,
	retries: process.env.CI ? 2 : 0
};

export default config;
