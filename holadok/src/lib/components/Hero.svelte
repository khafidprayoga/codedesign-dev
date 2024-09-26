<script lang="ts">
	import Doctor from '$lib/assets/brand/doctor.svg';
	import Overlay from '$lib/assets/brand/background.svg';
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
		<img id="artwork-doctor" src={Doctor} alt="Holadoc Doctor Consultant" />
		<img id="artwork-overlay" src={Overlay} alt="Overlay background" />
	</div>
</div>

<style lang="postcss">
	.hero {
		@apply h-full flex flex-row flex-1 justify-between items-center;
	}

	.hero-tagline {
		@apply flex flex-col gap-5;
	}

	.hero-header {
		@apply text-5xl font-extralight text-gray-900;
	}

	.hero-description {
		@apply text-lg font-thin text-gray-700;
	}

	.hero-action {
		@apply bg-primary bg-opacity-90 text-white py-3 px-1 text-center font-thin rounded-sm w-1/3;
	}

	.hero-artwork {
		@apply w-full h-full relative overflow-hidden;
	}

	#artwork-overlay {
		@apply absolute -z-20 top-0 -right-0;
	}

	#artwork-doctor {
		@apply h-full w-fit max-w-full max-h-full object-cover absolute -z-10 bottom-0 right-10;
	}
</style>
