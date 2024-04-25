import { getPostBySlug } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const slug = params.slug;

	const post = await getPostBySlug(slug);

	if (!post) {
		throw error(404, 'Post not found!');
	}

	return { post };
};
