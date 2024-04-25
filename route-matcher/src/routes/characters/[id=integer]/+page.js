const URL = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch, params }) => {
	const { id } = params;

	const response = await fetch(URL + `/characters/${id}`);
	const character = await response.json();
	return {
		character
	};
};
