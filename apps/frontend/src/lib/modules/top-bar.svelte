<script lang="ts">
	import SideBarToggle from "$components/side-bar-toggle.svelte";
	import { container, logo } from "./top-bar.css";
</script>

<div class={container}>
	<a class={logo} href="/">Frontendista</a>
	<div>
		<SideBarToggle />
	</div>
</div>
