import { error } from '@sveltejs/kit';

type Character = {
	id: number;
	name: string;
	occupation: string;
	image: string;
};

export const load = async ({ fetch }) => {
	const response = await fetch('/api/characters');

	if (!response.ok) {
		throw error(500, 'Error fetching characters from API');
	}

	const characters: Character[] = await response.json();
	return {
		characters
	};
};
