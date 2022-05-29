<script>
	import Settings from "$components/settings.svelte";
	import { motionStore } from "$stores/motion-store";
</script>

<div>
	<Settings />
	<small>Reduce motion is: {JSON.stringify($motionStore)}</small>
</div>
