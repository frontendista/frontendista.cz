/// <reference types="@sveltejs/kit" />
/// <reference types="@testing-library/jest-dom" />
/// <reference types="vite/client" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	import type { SvelteComponent } from "svelte";

	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		title: string;
		description: string;
		image: string;
		components: SvelteComponent[];
	}
}

declare global {
	namespace Vi {
		type Assertion<T = any> = TestingLibraryMatchers<T, void>;
	}
}

declare namespace NodeJS {
	interface ProcessEnv {
		readonly SANITY_PROJECT_ID: string;
		readonly SANITY_DATASET_ID: string;
		readonly SANITY_AUTH_TOKEN: string;
		readonly API_URL: string;
	}
}

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
