<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="wrapper">
	<Header />
	<div class="hero">
		<h1 class="tagline">Get the healthcare you need, when you need it.</h1>
		<p class="description">
			Manage all of your healthcare needs in one convenient place – from booking appointments to
			tracking your health history.
		</p>

		<span>
			<a href="#">Book an Appointment</a>
		</span>
	</div>
    <Footer />
</div>

<style lang="postcss">
	* {
	}

	.wrapper {
		/* border: 1px solid red; */
        
		@apply flex flex-col relative mx-auto   pt-5 pb-5
        w-8/12;
	}

	.hero {
		/* border: 3px dashed blue; */
		@apply pt-52 h-screen;
	}

    .tagline {
        @apply text-4xl font-extralight text-gray-900;
    }

</style>
