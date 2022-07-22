<script>
	import { page } from "$app/stores";
	import SideBarItem from "$components/side-bar-item.svelte";
	import { list } from "./side-bar.css";

	import HiChatAlt2 from "$icons/hi-chat-alt-2.svg?component";
	import HiCollection from "$icons/hi-collection.svg?component";
	import HiHome from "$icons/hi-home.svg?component";
	import HiUser from "$icons/hi-user.svg?component";
	import HiArchive from "$icons/hi-archive.svg?component";

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
