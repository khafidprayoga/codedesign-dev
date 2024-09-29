<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="wrapper">
	<Header />
	<Hero />
	<Footer />
</div>

<style lang="postcss">

	.wrapper {
		@apply flex flex-col mx-auto mt-2 md:mt-10  h-screen
        sm:w-8/12 relative;
	}
</style>
