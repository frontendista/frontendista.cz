<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/blog/__types/[slug]";

	export const load: Load<{ post: BlogPostContent }> = async ({ props }) => {
		const { title, description, thumbnail } = props.post;

		return {
			props,
			stuff: {
				title,
				description,
				image: thumbnail.url
			}
		};
	};
</script>

<script lang="ts">
	import type { BlogPostContent } from "$utils/queries/post-content";
	import { PortableText } from "@portabletext/svelte";
	import Image from "$components/portable-text/image.svelte";

	export let post: BlogPostContent;
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="article:author" content={`https://frontendista/about`} />
	<meta property="article:published_time" content={post.publishedAt} />
	<meta property="article:modified_time" content={post._updatedAt} />
	{#each post.categories as { title }}
		<meta property="article:tag" content={title} />
	{/each}
</svelte:head>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
<div>
	<PortableText
		value={post.body}
		components={{
			types: {
				image: Image
			}
		}}
	/>
</div>
