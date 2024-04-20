<script>
	export let data;

	$: posts = data.posts;
</script>

<svelte:head>
	<title>SvelteKit Blog | Home</title>
</svelte:head>

<h1>SvelteKit Blog</h1>

<ul>
	{#each posts as { slug, title, excerpt, content }}
		<li>
			<article>
				<h2>
					<a href={slug}>{title}</a>
				</h2>
				<p class="excerpt">{excerpt}</p>
				<p>{content}</p>
			</article>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: rebeccapurple;
		margin-bottom: 3rem;
	}
	ul {
		list-style: none;
	}

	h2 {
		margin: 0;
	}

	.excerpt {
		margin: 0;
	}

	article {
		margin-bottom: 3rem;
	}
</style>
