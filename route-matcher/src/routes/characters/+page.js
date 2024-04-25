const URL = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch }) => {
	const response = await fetch(URL + '/characters');
	const characters = await response.json();
	return {
		characters
	};
};
