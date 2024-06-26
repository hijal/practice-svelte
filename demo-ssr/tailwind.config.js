/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'1440px': '90rem'
			}
		}
	},
	plugins: [require('daisyui')]
};
