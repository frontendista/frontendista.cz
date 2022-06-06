<script lang="ts">
	import type { BlogPostPreview } from "$utils/queries/post-previews";

	export let posts: BlogPostPreview[];
</script>

<main>
	<h1>Blog</h1>
	{#each posts as { title, author }}
		<article>
			<h1>{title}</h1>
			<div>
				<span>By {author.name}</span>
			</div>
		</article>
	{/each}
</main>
