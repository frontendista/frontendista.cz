// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly VERCEL_ENV: "production" | "preview" | "development";
			readonly ENABLE_MOCKS: "0" | "1";
		}
	}

	interface ImportMetaEnv {
		readonly GITHUB_PERSONAL_TOKEN: string;
		readonly SPOTIFY_CLIENT_ID: string;
		readonly SPOTIFY_CLIENT_SECRET: string;
		readonly SPOTIFY_REFRESH_TOKEN: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}

	interface Number {
		round(): number;
		isBetween(start: number, end: number): boolean;
	}
}


export { };
