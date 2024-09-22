<script lang="ts">
	import { IconSun, IconMoon } from '@tabler/icons-svelte';

	let isDarkMode: boolean = false;
	const toggleTheme = () => {
		isDarkMode = !isDarkMode;
		const html = document.documentElement;
	
		switch (isDarkMode) {
			case true:
				html.classList.add('dark');
				break;
			case false:
				html.classList.remove('dark');
				break;
		}
	}
</script>

<div class="flex items-center space-x-3 mx-auto px-3 py-1 rounded-full">
	<button
		on:click={toggleTheme}
		class="p-2 rounded-full border border-gray-300 dark:border-gray-300 bg-twitter-blue dark:bg-twitter-dark-base hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-opacity-30 transition-colors duration-300"
		aria-label="Toggle dark mode"
	>
		{#if isDarkMode}
			<IconSun stroke={1.5} size="25" class="text-yellow-400" />
		{:else}
			<IconMoon stroke={1.5} size="25" class="text-blue-500" />
		{/if}
	</button>
</div>