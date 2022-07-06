<script lang="ts">
	import SideBarToggle from "$components/side-bar-toggle.svelte";
	import { container, logo, actionBar } from "./top-bar.css";
</script>

<div class={container}>
	<a class={logo} href="/">
		<span class="visuallyHidden">Frontendista</span>
	</a>
	<div class={actionBar}>
		<SideBarToggle />
	</div>
</div>
