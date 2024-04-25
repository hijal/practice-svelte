<script>
	export let data;
	const URL = 'https://svelte.fun/api/bobs-burgers/characters';
	$: characters = data.characters;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<h1>Characters</h1>

<div>
	<ul>
		{#each characters as { id, name, image, occupation }}
			<li>
				<a href={`/characters/${id}`} class="picture">
					<img src={image} alt={name} />
				</a>
				<div>
					<a href={`/characters/${id}`}><b>{name}</b></a>
					<p class="occupation">{occupation ? occupation : 'Unknown'}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>

<a href="/">Home</a>

<style>
	h1 {
		color: rebeccapurple;
	}
	li {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	a {
		text-decoration: none;
	}

	.picture {
		display: flex;
		height: 100px;
		width: 100px;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.occupation {
		color: grey;
	}
</style>
