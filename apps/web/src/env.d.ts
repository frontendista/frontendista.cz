/// <reference types="astro/client" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly VERCEL_ENV: "production" | "preview" | "development";
		}
	}
}

export {};
