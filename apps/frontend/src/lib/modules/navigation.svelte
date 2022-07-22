<script>
	import { page } from "$app/stores";
	import SideBarItem from "$components/side-bar-item.svelte";
	import { list } from "./side-bar.css";

	import HiChatAlt2 from "$icons/hi-chat-alt-2.svg";
	import HiCollection from "$icons/hi-collection.svg";
	import HiHome from "$icons/hi-home.svg";
	import HiUser from "$icons/hi-user.svg";
	import HiArchive from "$icons/hi-archive.svg";

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
