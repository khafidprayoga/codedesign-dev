<script lang="ts">
	import {format} from "fecha";
	import ProfilePicture from '$lib/assets/profile-pic.jpg';
	import { IconHeart, IconBrandTwitterFilled } from '@tabler/icons-svelte';

	let likeCount: string = "1K";
	let text = "Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? #programming #coding #debugging";

	const getFormattedText = (text: String) => {
	return text.replace(/#(\w+)/g, '<span class="text-blue-500 hover:underline hover:cursor-pointer">#$1</span>');
	};

	let publishedAt = format(new Date(), "MMM D, YYYY");
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
				<h3 id="tweet-author" class="py-1 uppercase">Jane Doe</h3>
				<p id="tweet-name">@realjanedoe</p>
			</div>
		</div>
		<div id="tweet-icon" class="self-center ml-auto mr-3">
			<IconBrandTwitterFilled stroke={1} size="30" />
		</div>
	</div>
	<div id="tweet-body">
		<div id="tweet-content">
			{@html getFormattedText(text)}
		</div>
		<div id="tweet-action" class="mt-3 flex flex-row">
			<IconHeart stroke={2} size="25" class="cursor-pointer hover:fill-gray-800"/>
			<span id="like-count" class="ml-2">{likeCount}</span>
			<span id="tweet-published-at" class="ml-2">{publishedAt}</span>
		</div>
	</div>
</div>

<style>

</style>
