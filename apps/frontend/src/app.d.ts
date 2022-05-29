/// <reference types="@sveltejs/kit" />
/// <reference types="@testing-library/jest-dom" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare global {
	namespace Vi {
		type Assertion<T = any> = TestingLibraryMatchers<T, void>;
	}
}
