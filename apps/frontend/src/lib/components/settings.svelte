<script>
	import { motionStore } from "$stores/motion-store";
</script>

<a href="/">Home</a>

<label>
	<small>Reduce motion</small>
	<input
		type="checkbox"
		on:input={(e) => motionStore.setPreference(e.currentTarget.checked)}
		checked={$motionStore.value}
	/>
</label>
{#if $motionStore.source === "USER"}
	<button on:click={motionStore.clearPreference}>Reset</button>
{/if}
