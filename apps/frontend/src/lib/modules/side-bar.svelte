<script>
	import Footer from "./footer.svelte";
	import Navigation from "./navigation.svelte";
	import { container } from "./side-bar.css";
</script>

<div class={container}>
	<Navigation />
	<section>
		<h1>Development</h1>
		<ul>
			<li>GitHub</li>
			<li>Npmjs</li>
		</ul>
	</section>
	<section>
		<h1>Social</h1>
		<ul>
			<li>LinkedIn</li>
			<li>Spotify</li>
			<li>Steam</li>
			<li>Twitter</li>
		</ul>
	</section>
	<Footer />
</div>
