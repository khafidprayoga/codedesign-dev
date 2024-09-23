<script lang="ts">
	import { format } from 'fecha';
	import ProfilePicture from '$lib/assets/profile-pic.jpg';
	import { IconHeart, IconBrandTwitterFilled } from '@tabler/icons-svelte';

	let likeCount: string = '1K';
	let text = `Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? #programming #coding #debugging`;
	const getFormattedText = (text: string) => {
		return text.replace(
			/#(\w+)/g,
			'<span class="text-blue-500 dark:twitter-text-hashtag hover:underline hover:cursor-pointer">#$1</span>'
		);
	};

	let publishedAt = format(new Date(), 'MMM D, YYYY');
</script>

<div
	id="tweet-card"
	class="
flex 
flex-col
md:w-1/2
px-8 py-6
max-w-lg rounded overflow-hidden shadow-
bg-white hover:shadow-3xl transition-shadow duration-300
dark:bg-twitter-dark dark:text-white dark:bg-opacity-100
sm:border-solid sm:border-2 border-gray-100 sm:border-gray-200
"
>
	<div id="tweet-head" class="flex flex-col sm:flex-row mb-0 sm:border-0 border-x-2 border-y-2 border-b-0 border-gray-100 dark:border-white px-3 pt-3">
		<div id="tweet-meta" class="flex flex-col sm:flex-row sm:w-1/2 sm:flex-[3]">
			<img
				class="rounded-full w-16 h-16 md:w-10 md:h-10 object-cover self-center ml-1 mr-1"
				src={ProfilePicture}
				alt="tweet author profile"
			/>
			<div class="p-5 text-center sm:text-left">
				<h3 id="tweet-author" class=" uppercase">Jane Doe Clinton</h3>
				<p id="tweet-name">@janedoe.xyz</p>
			</div>
		</div>
		<div id="tweet-icon" class="hidden sm:flex sm:flex-[1] sm:self-center sm:ml-auto">
			<div class="ml-auto"> 
				<IconBrandTwitterFilled stroke={1} size="30" />
			</div>
		</div>
	</div>
	<div id="tweet-body" class="sm:border-0 border-x-2 border-y-2 border-t-0 border-gray-100 dark:border-white px-3 pb-3">
		<div id="tweet-content">
			{@html getFormattedText(text)}
		</div>
		<div id="tweet-action" class="mt-3 flex flex-row">
			<IconHeart
				stroke={2}
				size="25"
				class="cursor-pointer hover:fill-gray-800 dark:hover:fill-white"
			/>
			<span id="like-count" class="ml-2">{likeCount}</span>
			<span id="tweet-published-at" class="ml-2">{publishedAt}</span>
		</div>
	</div>
</div>


