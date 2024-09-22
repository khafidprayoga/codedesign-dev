/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				'twitter-blue': '#ECF8FF',
				'twitter-dark': '#243447',
				'twitter-dark-base': '#243447'
			},
			textColor: {
				'twitter-hashtag': '#1DA1F2'
			}
		}
	},
	plugins: []
};
