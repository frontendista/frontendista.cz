<script>
	import Footer from "./footer.svelte";
	import Navigation from "./navigation.svelte";
</script>

<div class="w-sidebar h-screen bg-[#231F23] border-r-[1px] border-r-[#333333] fixed left-0 top-0">
	<div class="h-[5rem] border-b-[1px] border-b-[#333333] flex justify-center items-center">
		<a class="uppercase font-extrabold text-[1.75rem]" href="/">Frontendista</a>
	</div>
	<Navigation />
	<Footer />
</div>
