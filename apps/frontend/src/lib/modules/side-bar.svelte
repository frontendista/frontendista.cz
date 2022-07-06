<script lang="ts">
	import { fly, type FlyParams } from "svelte/transition";
	import SideBarItem from "$components/side-bar-item.svelte";

	import cx from "clsx";

	import GitHub from "$icons/social/github.svg";
	import Npmjs from "$icons/social/npmjs.svg";
	import LinkedIn from "$icons/social/linkedin.svg";
	import Spotify from "$icons/social/spotify.svg";
	import Steam from "$icons/social/steam.svg";
	import Twitter from "$icons/social/twitter.svg";

	import Footer from "./footer.svelte";
	import Navigation from "./navigation.svelte";
	import { container, list, listHeader, visible } from "./side-bar.css";
	import { isSideBarVisible } from "$stores/side-bar-store";
	import { beforeNavigate } from "$app/navigation";
	import { browser } from "$app/env";

	const showHideTransition: FlyParams = {
		x: -(browser ? window.innerWidth : 100),
		duration: 750
	};

	beforeNavigate(isSideBarVisible.close);
</script>

{#key $isSideBarVisible}
	<div
		in:fly={showHideTransition}
		out:fly={showHideTransition}
		class={cx(container, {
			[visible]: $isSideBarVisible
		})}
	>
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
{/key}
