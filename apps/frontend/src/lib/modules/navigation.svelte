<script lang="ts">
	import { page } from "$app/stores";
	import SideBarItem from "$components/side-bar-item.svelte";
	import { list } from "./side-bar.css";

	import HiChatAlt2 from "$icons/hi/20/chat-alt-2.svg?component";
	import HiCollection from "$icons/hi/20/collection.svg?component";
	import HiHome from "$icons/hi/20/home.svg?component";
	import HiUser from "$icons/hi/20/user.svg?component";
	import HiArchive from "$icons/hi/20/archive.svg?component";

	const NAVIGATION_LINKS = [
		{ label: "Home", href: "/", icon: HiHome },
		{ label: "About", href: "/about", icon: HiUser },
		{ label: "Blog", href: "/blog", icon: HiChatAlt2 },
		{ label: "Contact", href: "/contact", icon: HiCollection },
		{ label: "Projects", href: "/projects", icon: HiArchive }
	];
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
