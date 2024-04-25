<script>
	import '../styles.css';
</script>

<main>
	<slot />
</main>

<nav>
	<a href="/">Return to website</a>
</nav>

<style>
	main {
		border: 10px solid rebeccapurple;
		padding: 2rem;
	}

	nav {
		text-align: right;
	}
</style>
