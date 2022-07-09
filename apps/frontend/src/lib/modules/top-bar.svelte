<script lang="ts">
	import SideBarToggle from "$components/side-bar-toggle.svelte";

	import HiCog from "$icons/hi-cog.svg";
	import HiSun from "$icons/hi-sun.svg";
	import HiMoon from "$icons/hi-moon.svg";
	import { themeStore } from "$stores/theme-store";

	import { container, logo, actionBar, actionButton, actionBarButtonGroup } from "./top-bar.css";
</script>

<div class={container}>
	<a class={logo} href="/">
		<span class="visuallyHidden">Frontendista</span>
	</a>
	<div class={actionBar}>
		<SideBarToggle />
		<div class={actionBarButtonGroup}>
			<button
				aria-label={`Switch to ${$themeStore === "dark" ? "light" : "dark"} themes`}
				class={actionButton}
				on:click={themeStore.toggle}
			>
				{#if $themeStore === "dark"}
					<svelte:component this={HiMoon} height="1em" />
				{:else}
					<svelte:component this={HiSun} height="1em" />
				{/if}
				<span>Theme</span>
			</button>
			<button class={actionButton}>
				<svelte:component this={HiCog} height="1em" />
				<span>Settings</span>
			</button>
		</div>
	</div>
</div>
