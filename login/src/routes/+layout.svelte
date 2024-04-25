<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { isLoggedIn } from '../store/store.js';

	onMount(() => {
		if ($isLoggedIn) {
			goto('/dashboard');
		} else {
			goto('/login');
		}
	});
</script>

<slot />
