<script lang="ts">
	import { buttonStyle } from "$stylesheets/global.css";
	import HiChevronDoubleRight from "$icons/hi-chevron-double-right.svg";

	import { container } from "./skip-navigation-links.css";
</script>

<div class={container} data-test="skip-navigations-link">
	<span>A11Y</span>
	<a
		class={buttonStyle({
			size: "large"
		})}
		href="#content"
	>
		Skip to content
		<svelte:component this={HiChevronDoubleRight} height="1em" />
	</a>
</div>
