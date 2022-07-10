<script lang="ts">
	import SettingsButton from "$components/settings-button.svelte";
	import SideBarToggle from "$components/side-bar-toggle.svelte";
	import ThemeToggle from "$components/theme-toggle.svelte";

	import { container, logo, actionBar, actionBarButtonGroup } from "./top-bar.css";
</script>

<div class={container}>
	<a class={logo} href="/">
		<span class="visuallyHidden">Frontendista</span>
	</a>
	<div class={actionBar}>
		<SideBarToggle />
		<div class={actionBarButtonGroup}>
			<ThemeToggle />
			<SettingsButton />
		</div>
	</div>
</div>
