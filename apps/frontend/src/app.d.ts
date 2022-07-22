/// <reference types="@sveltejs/kit" />
/// <reference types="@testing-library/jest-dom" />
/// <reference types="vite/client" />

declare module "*.svg?component" {
	import { SVGComponent } from "$types/svg";
	export default SVGComponent;
}

// https://kit.svelte.dev/docs/types#app
declare namespace App {
	import type { SvelteComponentTyped } from "svelte";

	class SomeSvelteComponent extends SvelteComponentTyped<unknown> {}

	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		title: string;
		description: string;
		image: string;
		components: SomeSvelteComponent[];
	}
}

declare global {
	namespace Vi {
		type Assertion<T> = TestingLibraryMatchers<T, void>;
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
