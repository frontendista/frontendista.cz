<script lang="ts">
	import Image from "$components/rich-text/image.svelte";
	import type { BlogPostContent } from "$utils/queries/post-content";
	import { PortableText } from "@portabletext/svelte";

	export let post: BlogPostContent;
</script>

<h1>{post.title}</h1>
<time datetime={post.publishedAt}>{post.publishedAt}</time>
<PortableText
	value={post.body}
	components={{
		types: {
			image: Image
		}
	}}
/>
