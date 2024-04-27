<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	export let form;

	$: movies = data?.movies ?? [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Movie Log</h1>

<form method="post" action="?/addMovieLog" use:enhance>
	<label>
		<span>Name</span>
		<input type="text" name="name" value={form?.name ?? ''} />
	</label>

	<label>
		<span>Release</span>
		<input type="text" name="release" value={form?.release ?? ''} />
	</label>

	<label for="rating"> Rating </label>
	<select name="rating" id="rating" value={form?.rating ?? ''}>
		<option value="1">1 (&#9733;)</option>
		<option value="2">2 (&#9733; &#9733;)</option>
		<option value="3">3 (&#9733; &#9733; &#9733;)</option>
		<option value="4">4 (&#9733; &#9733; &#9733; &#9733;)</option>
		<option value="5">5 (&#9733; &#9733; &#9733; &#9733; &#9733;)</option>
	</select>

	<label for="comment">Comment</label>
	<textarea
		name="comment"
		id="comment"
		placeholder="What did you think?"
		value={form?.comment ?? ''}
	></textarea>

	<div class="submission">
		<span class="error">{form?.error ?? ''}</span>
		<button type="submit">Add Movie Log</button>
	</div>
</form>

<table>
	<thead>
		<tr>
			<th class="name">name</th>
			<th class="release">release</th>
			<th class="rating">rating</th>
			<th class="comment">comment</th>
		</tr>
	</thead>
	<tbody>
		{#each movies as movie}
			<tr>
				<td class="name">{movie.name}</td>
				<td class="release">{movie.release}</td>
				<td class="rating">{movie.rating}</td>
				<td class="comment">{movie.comment}</td>
				<td class="action">
					<form method="post" action="?/deleteMovie" use:enhance>
						<button type="submit" name="movieToDelete" value={movie.id}>Delete</button>
					</form>
				</td>
			</tr>{/each}
	</tbody>
</table>
