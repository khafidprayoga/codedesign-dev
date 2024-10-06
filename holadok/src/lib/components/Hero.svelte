<script lang="ts">
	import TypeWriter from 'svelte-typewriter';

	import doctor from '$lib/assets/brand/doctor.webp';
	import overlay from '$lib/assets/brand/background.svg';
	import card from '$lib/assets/brand/card.webp';

	import { fly, fade } from 'svelte/transition';
	import { linear, quadIn } from 'svelte/easing';

	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});

	const typeWriterProp = {
		interval: 21,
		mode: 'concurrent',
		cursor: true
	};
</script>

<div class="hero">
	{#if ready}
		<div class="hero-tagline">
			<h1 class="hero-header">Get the healthcare you need, when you need it.</h1>

			<TypeWriter {...typeWriterProp}>
				<p class="hero-description">
					Manage all of your healthcare needs in one convenient place – from booking appointments to
					tracking your health history.
				</p>
			</TypeWriter>
			<div class="hero-action">
				<span>
					<a href="#">Book an Appointment</a>
				</span>
			</div>
		</div>
	{/if}

	<div class="hero-artwork">
		{#if ready}
			<img
				id="artwork-doctor"
				src={doctor}
				alt="Holadoc Doctor Consultant"
				transition:fade={{ delay: 300, duration: 1500, easing: linear }}
			/>
			<img
				id="artwork-card"
				src={card}
				alt="what people say"
				transition:fly={{ delay: 3000, duration: 1500, x: 0, y: -500, opacity: 1, easing: quadIn }}
			/>
			<img
				id="artwork-overlay"
				src={overlay}
				alt="Overlay background"
				transition:fly={{ delay: 0, duration: 250, x: 0, y: -50, opacity: 1, easing: quadIn }}
			/>
		{/if}
	</div>
</div>

<style lang="postcss">
	.hero {
		@apply sm:min-h-screen  min-w-full flex flex-col px-5 sm:px-0 sm:m-0 sm:flex-row flex-1 justify-between items-center;
	}

	.hero-tagline {
		@apply flex flex-col gap-5;
	}

	.hero-header {
		@apply text-3xl md:text-5xl font-light text-gray-900;
	}

	.hero-description {
		@apply text-sm md:text-lg font-thin text-gray-700;
	}

	.hero-action {
		@apply bg-primary bg-opacity-90 text-white py-3 px-1 text-center md:text-base font-thin rounded-sm w-full lg:w-1/3;
	}

	.hero-artwork {
		@apply mt-5 md:mt-0 md:w-full h-full relative  overflow-hidden select-none;
	}

	#artwork-overlay {
		@apply xl:block bg-no-repeat sm:absolute -z-50 top-0 -right-0;
	}

	#artwork-doctor {
		@apply md:max-h-[720px] w-fit  object-cover absolute z-10 bottom-0 md:right-10;
	}

	#artwork-card {
		@apply w-[225px] md:h-52 md:w-fit object-cover absolute z-[9]  top-0 md:top-64 md:left-0;
	}
</style>
