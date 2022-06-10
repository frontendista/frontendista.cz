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
	{#each post.categories as category}
		<meta property="article:tag" content={category.title} />
	{/each}
	<meta property="og:site_name" content="Frontendista" />
	<meta property="og:image" content={post.thumbnail.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@thesoreon" />
	<meta name="twitter:creator" content="@thesoreon" />
</svelte:head>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
