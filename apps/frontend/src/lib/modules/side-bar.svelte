<script>
	import SideBarItem from "$components/side-bar-item.svelte";
	import Footer from "./footer.svelte";
	import Navigation from "./navigation.svelte";
	import { container, list } from "./side-bar.css";
</script>

<div class={container}>
	<Navigation />
	<section>
		<h1>Development</h1>
		<ul class={list}>
			<SideBarItem href="https://github.com/thesoreon">GitHub</SideBarItem>
			<SideBarItem href="https://www.npmjs.com/~pavelsusicky">npmjs</SideBarItem>
		</ul>
	</section>
	<section>
		<h1>Social</h1>
		<ul class={list}>
			<SideBarItem href="https://www.linkedin.com/in/pavel-susicky">LinkedIn</SideBarItem>
			<SideBarItem href="https://open.spotify.com/user/thesoreon">Spotify</SideBarItem>
			<SideBarItem href="https://steamcommunity.com/id/thesoreon">Steam</SideBarItem>
			<SideBarItem href="https://twitter.com/thesoreon">Twitter</SideBarItem>
		</ul>
	</section>
	<Footer />
</div>
