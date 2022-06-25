<script>
	import SideBarItem from "$components/side-bar-item.svelte";
	import HiHome from "$icons/hi-home.svg";
	import { list } from "./side-bar.css";
</script>

<nav>
	<ul class={list}>
		<SideBarItem href="/" icon={HiHome}>Home</SideBarItem>
		<SideBarItem href="/about" icon={HiHome}>About</SideBarItem>
		<SideBarItem href="/blog" icon={HiHome}>Blog</SideBarItem>
		<SideBarItem href="/contact" icon={HiHome}>Contact</SideBarItem>
	</ul>
</nav>
