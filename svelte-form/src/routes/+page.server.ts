import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type Movie = {
	id: string;
	name: string;
	release: number;
	rating: number;
	comment?: string;
};

let movies: Movie[] = [
	{
		id: 'df5105ff-9d87-4bd9-be62-4743c0a243b9',
		name: 'Everything Everywhere All at Once',
		release: 2022,
		rating: 5,
		comment: `Unlike anything I have ever seen before. I loved it!`
	},
	{
		id: '446e2ae1-5cc4-4b84-9ea0-1e77428e46f6',
		name: 'The Shawshank Redemption',
		release: 1994,
		rating: 5,
		comment: 'Amazing, if a little over-hyped'
	}
];

export const load: PageServerLoad = () => {
	return {
		movies: movies
	};
};

const validatedMovie = (
	movieData: Partial<Movie>
): { success: false; error: string } | { success: true; movie: Omit<Movie, 'id'> } => {
	if (!movieData.name) {
		return {
			success: false,
			error: 'Name is required'
		};
	}

	if (!movieData.release) {
		return {
			success: false,
			error: 'Release date is required'
		};
	}

	if (!movieData.rating) {
		return {
			success: false,
			error: 'Rating is required'
		};
	}

	return {
		success: true,
		movie: {
			name: movieData.name,
			release: movieData.release,
			rating: movieData.rating,
			comment: movieData.comment
		}
	};
};

export const actions = {
	async addMovieLog({ request }) {
		const formData = await request.formData();

		const movieData = {
			name: (formData.get('name') ?? '') as string,
			release: formData.get('release') ?? (Number(formData.get('release')) as number),
			rating: formData.get('rating') ?? (Number(formData.get('rating')) as number),
			comment: (formData.get('comment') ?? '') as string
		};

		const isValidMovieData = validatedMovie({
			...movieData
		});

		if (!isValidMovieData.success) {
			return fail(400, {
				error: isValidMovieData.error,
				...movieData
			});
		}

		movies.push({
			id: crypto.randomUUID(),
			name: isValidMovieData.movie.name,
			release: isValidMovieData.movie.release,
			rating: isValidMovieData.movie.rating,
			comment: isValidMovieData.movie.comment
		});

		return {
			success: true
		};
	},

	async deleteMovie({ request }) {
		const movieId = (await request.formData()).get('movieToDelete');

		movies = movies.filter((movie) => movie.id !== movieId);

		return;
	}
};
