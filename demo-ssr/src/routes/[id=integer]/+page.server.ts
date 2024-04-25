import { error, type ServerLoadEvent } from '@sveltejs/kit';

import { PUBLIC_BOBS_BURGERS_API_URL } from '$env/static/public';

type Character = {
	id: number;
	name: string;
	occupation: string;
	age: string;
	image: string;
	hairColor?: string;
	gender?: string;
	voicedBy?: string;
	firstEpisode?: string;
};

export const load = async (event: ServerLoadEvent) => {
	const { fetch, params } = event;

	const response = await fetch(`${PUBLIC_BOBS_BURGERS_API_URL}/characters/${params.id}`);

	console.log('Fetching character: ', params.id);

	if (!response.ok) {
		const err = await response.json();
		throw error(500, err.message);
	}

	const character: Character = await response.json();

	return { character };
};
