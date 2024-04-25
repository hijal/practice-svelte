import { error } from '@sveltejs/kit';
import { PUBLIC_BOBS_BURGERS_API_URL } from '$env/static/public';

type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch(PUBLIC_BOBS_BURGERS_API_URL + '/characters');

	if (!response.ok) {
		throw error(500, 'Error fetching characters from API');
	}

	console.log('Fetching characters');

	const characters: Character[] = await response.json();
	return {
		characters
	};
};
