<script lang="ts">
	import doctor from '$lib/assets/brand/doctor.svg';
	import overlay from '$lib/assets/brand/background.svg';
	import card from '$lib/assets/brand/card.svg';
</script>

<div class="hero">
	<div class="hero-tagline">
		<h1 class="hero-header">Get the healthcare you need, when you need it.</h1>
		<p class="hero-description">
			Manage all of your healthcare needs in one convenient place – from booking appointments to
			tracking your health history.
		</p>
		<div class="hero-action">
			<span>
				<a href="#">Book an Appointment</a>
			</span>
		</div>
	</div>

	<div class="hero-artwork">
		<img id="artwork-doctor" src={doctor} alt="Holadoc Doctor Consultant" />
		<img id="artwork-overlay" src={overlay} alt="Overlay background" />
		<img id="artwork-card" src={card} alt="what people say" />
	</div>
</div>

<style lang="postcss">
	.hero {
		@apply min-h-screen  min-w-full flex flex-col mt-16 px-5 sm:px-0 sm:m-0 sm:flex-row flex-1 justify-between items-center;
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
		@apply  xl:block bg-no-repeat sm:absolute -z-50 top-0 -right-0;
	}

	#artwork-doctor {
		@apply  md:max-h-[720px] w-fit  object-cover absolute z-10 bottom-0 md:right-10;
	}

	#artwork-card {
		@apply   w-[225px] md:h-52 md:w-fit object-cover absolute z-[9]  top-0 md:top-64 md:left-0;
	}
</style>
