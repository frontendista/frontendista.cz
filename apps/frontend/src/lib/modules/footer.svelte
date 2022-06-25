<script>
	import SideBarItem from "$components/side-bar-item.svelte";

	import { list } from "./side-bar.css";
</script>

<footer>
	<section>
		<h1>Runs on</h1>
		<ul class={list}>
			<SideBarItem href="https://cloudflare.com">Cloudflare</SideBarItem>
			<SideBarItem href="https://sanity.io">Sanity</SideBarItem>
			<SideBarItem href="https://vercel.com">Vercel</SideBarItem>
			<SideBarItem href="https://wedos.cz">Wedos</SideBarItem>
		</ul>
	</section>
	<p>&copy; Pavel Sušický</p>
</footer>
