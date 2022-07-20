<script lang="ts">
	import SanityImage from "$components/sanity-image.svelte";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	interface ImageProps {
		_key: string;
		_type: "image";
		asset: {
			lqip: string;
			url: string;
			width: number;
			height: number;
			aspectRatio: number;
		};
	}

	export let portableText: CustomBlockComponentProps<ImageProps>;

	const { width, height, url, lqip } = portableText.value.asset;
</script>

<SanityImage {height} {width} url={url + "?auto=format"} {lqip} />
