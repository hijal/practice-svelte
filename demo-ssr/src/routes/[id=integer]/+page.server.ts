import { error, type ServerLoadEvent } from '@sveltejs/kit';

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

	const response = await fetch(`/api/characters/${params.id}`);

	if (!response.ok) {
		const err = await response.json();
		throw error(500, err.message);
	}

	const character: Character = await response.json();

	return { character };
};
