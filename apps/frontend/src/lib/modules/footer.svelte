<script>
	import SideBarItem from "$components/side-bar-item.svelte";
	import { container, copyright } from "./footer.css";
	import { listHeader, list } from "./side-bar.css";
</script>

<footer class={container}>
	<section>
		<h1 class={listHeader}>Runs on</h1>
		<ul class={list}>
			<SideBarItem href="https://cloudflare.com">Cloudflare</SideBarItem>
			<SideBarItem href="https://sanity.io">Sanity</SideBarItem>
			<SideBarItem href="https://vercel.com">Vercel</SideBarItem>
			<SideBarItem href="https://wedos.cz">Wedos</SideBarItem>
		</ul>
	</section>
	<p class={copyright}>&copy; 2022, Pavel Sušický</p>
</footer>
