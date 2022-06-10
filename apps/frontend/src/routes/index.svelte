<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/__types/index";

	export const load: Load = async () => {
		return {
			stuff: {
				title: "Home",
				description: "TODO: Index page meta tag description"
			}
		};
	};
</script>

<script lang="ts">
	import Link from "$common/link.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Link href="https://seznam.cz" />
<Link href="/about" />
<Link href="mailto:test@test.cz" />
