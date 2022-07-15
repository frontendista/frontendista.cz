<script lang="ts">
	import { motionStore } from "$stores/motion-store";

	import { fade, fly } from "svelte/transition";

	export let key: string;

	$: transition = $motionStore.value ? fade : fly;
</script>

{#key key}
	<main
		id="content"
		in:transition={{
			delay: 500,
			duration: 500,
			y: -256
		}}
		out:transition={{
			duration: 500,
			y: 256
		}}
	>
		<slot />
	</main>
{/key}
