<script lang="ts">
	import { fade } from "svelte/transition";

	export let key: string;
</script>

{#key key}
	<main
		in:fade={{
			delay: 500,
			duration: 1000
		}}
		out:fade={{
			duration: 500
		}}
	>
		<slot />
	</main>
{/key}
