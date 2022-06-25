<script>
	import SideBarItem from "$components/side-bar-item.svelte";
	import HiHome from "$icons/hi-home.svg";
	import HiUser from "$icons/hi-user.svg";
	import HiCollection from "$icons/hi-collection.svg";
	import HiChatAlt2 from "$icons/hi-chat-alt-2.svg";
	import { list } from "./side-bar.css";
</script>

<nav>
	<ul class={list}>
		<SideBarItem href="/" icon={HiHome}>Home</SideBarItem>
		<SideBarItem href="/about" icon={HiUser}>About</SideBarItem>
		<SideBarItem href="/blog" icon={HiCollection}>Blog</SideBarItem>
		<SideBarItem href="/contact" icon={HiChatAlt2}>Contact</SideBarItem>
	</ul>
</nav>
