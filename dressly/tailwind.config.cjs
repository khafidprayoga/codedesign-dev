import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,svelte}',
		'./node_modules/@selemondev/svelte-marquee/dist/*.svelte'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: '#FDFDFD',
        },
        primary: {
          200: '#FBE3C9',
          300: '#F5CCAB',
          500: '#E09370',
          700: '#A14B38',
        },
      },
      fontFamily: {
        Lora: ['Lora', 'serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
				'marquee-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-up': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			},
			animation: {
				'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
				'marquee-up': 'marquee-up var(--duration, 40s) linear infinite'
			},
    },
  },
  plugins: [animate],
};