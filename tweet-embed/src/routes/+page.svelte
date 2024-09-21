<script>
	import ProfilePicture from '$lib/assets/profile-pic.jpg';
	import { IconHeart, IconBrandTwitterFilled } from '@tabler/icons-svelte';
</script>

<div
	id="tweet-card"
	class="
flex flex-col
w-1/2
px-6 py-6
max-w-lg rounded overflow-hidden shadow-lg
bg-white hover:shadow-xl transition-shadow duration-300
"
>
	<div id="tweet-head" class="flex flex-row mb-3">
		<div id="tweet-meta" class="flex flex-row w-1/2">
			<img
				class="rounded-full w-10 h-10 object-cover self-center ml-1 mr-1"
				src={ProfilePicture}
				alt="tweet author profile"
			/>
			<div class="p-5">
				<h3 id="tweet-author py-3">Jane Doe</h3>
				<p id="tweet-name py-3">@realjanedoe</p>
			</div>
		</div>
		<div id="tweet-icon" class="self-center ml-auto mr-3">
			<IconBrandTwitterFilled stroke={1} size="30" />
		</div>
	</div>
	<div id="tweet-body">
		<div id="tweet-content">
			Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the
			best'? #programming #coding #debugging
		</div>
		<div id="tweet-action" class="mt-3 flex flex-row">
			<IconHeart stroke={2} size="25" />
			<span id="like-count" class="ml-2">123</span>
			<span id="tweet-published-at" class="ml-2">3:40 PM - 24 February 2022</span>
		</div>
	</div>
</div>

<style>
#tweet-card{
    cursor: pointer;
}
</style>
