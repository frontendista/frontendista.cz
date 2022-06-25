<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/blog/__types";

	export const load: Load = async ({ props }) => {
		return {
			props,
			stuff: {
				title: "Blog",
				description: "TODO: Blog page meta tag description"
				// TODO: image
			}
		};
	};
</script>

<script lang="ts">
	import type { BlogPostPreviews } from "$utils/queries/post-previews";

	export let posts: BlogPostPreviews;
</script>

<h1>Blog</h1>
{#each posts as { title, author, publishedAt, slug, thumbnail }}
	<article>
		<img src={thumbnail.url} alt="" />
		<h1>{title}</h1>
		<time datetime={publishedAt}>{new Date(publishedAt)}</time>
		<div>
			<span>By {author.name}</span>
		</div>
		<a sveltekit:prefetch href={`/blog/${slug}`}>Read</a>
	</article>
{/each}
