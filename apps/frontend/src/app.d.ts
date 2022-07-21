// TODO: Kamo TypeScript je občas k pomrdání, přidat tohle jakmile zjistím jak overridnout vite client.d.ts pro vlastni *.svg typ
// /// <reference types="@sveltejs/kit" />
// /// <reference types="@testing-library/jest-dom" />
// /// <reference types="vite/client" />

declare module "*.svg" {
	import { SvelteComponentTyped } from "svelte";

	// NOTE: This should be some general type exported by Svelte, but it's not.
	// The type used by VSCode is exported by the Svelte VSCode extension.
	type SVGProps = Partial<{
		height: string | number;
		width: string | number;
		viewBox: string;
		class: string;
	}>;

	export default class SVGComponent extends SvelteComponentTyped<SVGProps> {}
}

declare namespace App {
	// https://kit.svelte.dev/docs/types#app

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
