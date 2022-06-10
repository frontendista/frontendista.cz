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

	export let post: BlogPostContent;
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<meta property="article:author" content={`https://frontendista/author/${post.author.slug}`} />
	<meta property="article:published_time" content={post.publishedAt} />
	<meta property="article:modified_time" content={post._updatedAt} />
	{#each post.categories as { title }}
		<meta property="article:tag" content={title} />
	{/each}
</svelte:head>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
