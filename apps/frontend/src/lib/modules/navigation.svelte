<script>
	import { page } from "$app/stores";
	import SideBarItem from "$components/side-bar-item.svelte";
	import { NAVIGATION_LINKS } from "../../data";
	import { list } from "./side-bar.css";
</script>

<nav>
	<ul class={list}>
		{#each NAVIGATION_LINKS as { label, href, icon }}
			<SideBarItem {href} {icon} isActive={$page.url.pathname === href}>
				{label}
			</SideBarItem>
		{/each}
	</ul>
</nav>
