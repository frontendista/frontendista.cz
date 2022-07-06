<script>
	import { isSideBarVisible } from "$stores/side-bar-store";

	import HiMenu from "$icons/24/hi-menu.svg";
	import HiX from "$icons/24/hi-x.svg";

	import { container } from "./side-bar-toggle.css";
</script>

<button
	class={container}
	aria-label={$isSideBarVisible ? "Close Sidebar" : "Open Sidebar"}
	aria-expanded={$isSideBarVisible}
	on:click={isSideBarVisible.toggle}
>
	{#if $isSideBarVisible}
		<svelte:component this={HiX} height="1em" />
	{:else}
		<svelte:component this={HiMenu} height="1em" />
	{/if}
</button>
