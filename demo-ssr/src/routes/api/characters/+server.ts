import { PUBLIC_BOBS_BURGERS_API_URL } from '$env/static/public';

export const GET = async () => {
	const response = await fetch(`${PUBLIC_BOBS_BURGERS_API_URL}/characters`);

	return new Response(JSON.stringify(await response.json()), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
