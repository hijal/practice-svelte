<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { isLoggedIn } from '../../store/store.js';

	onMount(() => {
		if ($isLoggedIn) {
			goto('/dashboard');
		} else {
			goto('/login');
		}
	});
</script>

{#if $isLoggedIn}
	<h1>Welcome to Dashboard</h1>
{/if}

<a href="/">Home</a>
