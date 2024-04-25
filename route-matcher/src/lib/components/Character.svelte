<script>
	export let image = 'https://via.placeholder.com/150';
	export let name;
	export let gender;
	export let hairColor;
	export let occupation;
	export let firstEpisode;
	export let voicedBy;
</script>

<article class="article-card">
	<header>
		<i>Bob's burger</i> characters
	</header>

	<figure class="image">
		<img src={image} alt={name} loading="lazy" />
	</figure>
	<section>
		<h1>{name}</h1>
		<dl>
			<dt>Gender</dt>
			<dd>{gender}</dd>
			<dt>Hair</dt>
			<dd>{hairColor}</dd>
			<dt>Occupation</dt>
			<dd>{occupation || 'N/A'}</dd>
		</dl>
	</section>
	<section>
		<h3>Behind the scenes</h3>
		<dl>
			<dt>First Episode</dt>
			<dd>{firstEpisode}</dd>
			<dt>Voice Actor</dt>
			<dd>{voicedBy}</dd>
		</dl>
	</section>
</article>

<style>
	.article-card {
		max-width: 400px;
		margin: 20px auto;
		padding: 20px;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}

	.article-card header {
		font-style: italic;
		margin-bottom: 10px;
		text-align: center;
		background-color: #f0f0f0;
		padding: 10px;
		border-radius: 8px;
	}

	.article-card .image {
		text-align: center;
		margin-bottom: 20px;
        width: 100%;
	}

	.article-card section {
		margin-bottom: 15px;
	}

	.article-card h1,
	.article-card h3 {
		margin-bottom: 5px;
		text-align: center;
		background-color: #f0f0f0;
		padding: 10px;
		border-radius: 8px;
	}

	.article-card dl {
		margin-bottom: 10px;
	}

	.article-card dt {
		font-weight: bold;
		margin-bottom: 5px;
	}

	.article-card dd {
		margin-left: 0;
		margin-bottom: 10px;
	}
</style>
