<script context="module" lang="ts">
	import type { Load } from ".svelte-kit/types/src/routes/blog/__types/[slug]";

	export const load: Load<{ post: BlogPostContent }> = async ({ props }) => {
		const { title, description } = props.post;

		return {
			props,
			stuff: {
				title,
				description
			}
		};
	};
</script>

<script lang="ts">
	import type { BlogPostContent } from "$utils/queries/post-content";

	export let post: BlogPostContent;
</script>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
