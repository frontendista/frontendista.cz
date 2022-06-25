<script>
	import SideBarItem from "$components/side-bar-item.svelte";

	import GitHub from "$icons/social/github.svg";
	import Npmjs from "$icons/social/npmjs.svg";
	import LinkedIn from "$icons/social/linkedin.svg";
	import Spotify from "$icons/social/spotify.svg";
	import Steam from "$icons/social/steam.svg";
	import Twitter from "$icons/social/twitter.svg";

	import Footer from "./footer.svelte";
	import Navigation from "./navigation.svelte";
	import { container, list, listHeader } from "./side-bar.css";
</script>

<div class={container}>
	<Navigation />
	<section>
		<h1 class={listHeader}>Development</h1>
		<ul class={list}>
			<SideBarItem href="https://github.com/thesoreon" icon={GitHub}>GitHub</SideBarItem>
			<SideBarItem href="https://npmjs.com/~pavelsusicky" icon={Npmjs}>npmjs</SideBarItem>
		</ul>
	</section>
	<section>
		<h1 class={listHeader}>Social</h1>
		<ul class={list}>
			<SideBarItem href="https://linkedin.com/in/pavel-susicky" icon={LinkedIn}>
				LinkedIn
			</SideBarItem>
			<SideBarItem href="https://open.spotify.com/user/thesoreon" icon={Spotify}>
				Spotify
			</SideBarItem>
			<SideBarItem href="https://steamcommunity.com/id/thesoreon" icon={Steam}>Steam</SideBarItem>
			<SideBarItem href="https://twitter.com/thesoreon" icon={Twitter}>Twitter</SideBarItem>
		</ul>
	</section>
	<Footer />
</div>
