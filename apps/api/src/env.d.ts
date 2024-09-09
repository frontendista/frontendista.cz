/// <reference path="../.astro/types.d.ts" />

declare global {
	interface ImportMetaEnv {
		readonly PRIVATE_KEY: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}

export {}
