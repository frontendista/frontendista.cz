<script>
	import { isSideBarVisible } from "$stores/side-bar-store";
</script>

<button on:click={isSideBarVisible.toggle}>
	{#if $isSideBarVisible}
		Close
	{:else}
		Open
	{/if}
</button>
