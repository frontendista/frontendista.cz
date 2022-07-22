<script lang="ts">
	import { buttonStyle } from "$stylesheets/global.css";
	import HiChevronDoubleRight from "$icons/hi/20/chevron-double-right.svg?component";

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
		<HiChevronDoubleRight />
	</a>
</div>
