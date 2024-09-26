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
	* {
	}

	.wrapper {
		@apply flex flex-col relative mx-auto  pt-5 pb-5 h-screen
        w-8/12;
	}
</style>
