<script>
	import { isSideBarVisible } from "$stores/side-bar-store";

	import HiMenu from "$icons/24/hi-menu.svg?component";
	import HiX from "$icons/24/hi-x.svg?component";

	import { container } from "./side-bar-toggle.css";
</script>

<button
	class={container}
	aria-label={$isSideBarVisible ? "Close Sidebar" : "Open Sidebar"}
	aria-expanded={$isSideBarVisible}
	on:click={isSideBarVisible.toggle}
	type="button"
>
	{#if $isSideBarVisible}
		<HiX />
	{:else}
		<HiMenu />
	{/if}
</button>
