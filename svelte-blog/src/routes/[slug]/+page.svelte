<script>
	export let data;
	$: post = data.post;
</script>

<svelte:head>
	<title>SvelteKit Blog | {post.title}</title>
</svelte:head>

<article>
	<h1>{post.title}</h1>
	<p class="excerpt">{post.excerpt}</p>
	<p>{post.content}</p>
</article>

<style>
	article {
		max-width: min(600px, 90%);
		margin: auto;
	}

	h1,
	.excerpt {
		margin: 0;
		padding: 0;
	}

	.excerpt {
		font-size: 18px;
		font-weight: lighter;
	}
</style>
