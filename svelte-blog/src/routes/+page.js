import { getPostSummaries } from '$lib/posts';

export const load = async () => {
	return {
		posts: await getPostSummaries()
	};
};
