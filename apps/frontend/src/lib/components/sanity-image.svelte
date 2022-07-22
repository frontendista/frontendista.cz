<script lang="ts">
	import { DESKTOP_START_MQ, MOBILE_START_MQ, SIDE_BAR_WIDTH } from "$stylesheets/constants.css";

	import { container } from "./sanity-image.css";

	export let url: string;
	export let lqip: string;
	export let width: number;
	export let height: number;
	export let loading: "lazy" | "eager" = "lazy";

	const SIZES = [320, 560, 768, 1300, 1920, 2560];

	$: srcset = SIZES.reduce((srcset, size) => {
		srcset += `${url}&w=${size}&q=75 ${size}w, `;
		return srcset;
	}, "");

	export let caption: string | null = null;
</script>

<figure class={container} style:--placeholder={`url(${lqip})`}>
	<img
		src={url}
		{width}
		{height}
		{srcset}
		{loading}
		sizes={`${MOBILE_START_MQ} 100vw, ${DESKTOP_START_MQ} calc(48em - ${SIDE_BAR_WIDTH})`}
		alt=""
	/>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>
