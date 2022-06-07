<script lang="ts">
	import type { BlogPostContent } from "$utils/queries/post-content";

	export let post: BlogPostContent;
</script>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
