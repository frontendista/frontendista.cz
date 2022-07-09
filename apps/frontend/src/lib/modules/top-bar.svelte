<script lang="ts">
	import SideBarToggle from "$components/side-bar-toggle.svelte";
	import ThemeToggle from "$components/theme-toggle.svelte";

	import HiCog from "$icons/hi-cog.svg";

	import { container, logo, actionBar, actionButton, actionBarButtonGroup } from "./top-bar.css";
</script>

<div class={container}>
	<a class={logo} href="/">
		<span class="visuallyHidden">Frontendista</span>
	</a>
	<div class={actionBar}>
		<SideBarToggle />
		<div class={actionBarButtonGroup}>
			<ThemeToggle />
			<button class={actionButton}>
				<svelte:component this={HiCog} height="1em" />
				<span>Settings</span>
			</button>
		</div>
	</div>
</div>
