<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/blog/__types";

	export const load: Load = async ({ props }) => {
		return {
			props,
			stuff: {
				title: BLOG_PAGE_TITLE,
				description: BLOG_PAGE_DESCRIPTION
				// TODO: image
			}
		};
	};
</script>

<script lang="ts">
	import Divider from "$common/divider.svelte";
	import SanityImage from "$components/sanity-image.svelte";
	import { BLOG_PAGE_DESCRIPTION, BLOG_PAGE_TITLE } from "$root/seo.json";

	import type { BlogPostPreviews } from "$utils/queries/post-previews";

	export let posts: BlogPostPreviews;
</script>

<h1>Blog</h1>
<Divider />
{#each posts as { title, author, publishedAt, slug, thumbnail }}
	<article>
		<SanityImage {...thumbnail} />
		<h1>{title}</h1>
		<time datetime={publishedAt}>{new Date(publishedAt)}</time>
		<div>
			<span>By {author.name}</span>
		</div>
		<a sveltekit:prefetch href={`/blog/${slug}`}>Read</a>
	</article>
{/each}
