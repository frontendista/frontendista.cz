/// <reference types="astro/client" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly VERCEL_ENV: "production" | "preview" | "development";
		}
	}
	
	interface ImportMetaEnv {
		readonly GITHUB_PERSONAL_TOKEN: string;
	}
	
	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}


export {};
