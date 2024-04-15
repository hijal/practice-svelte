<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user, isLoggedIn } from '../../store/store.js';

	let username = '';
	let password = '';

	function handleSubmit() {
		if ($user.username == username && $user.password == password) {
			isLoggedIn.set(true);

			goto('/dashboard');
		} else {
			alert('Please enter a username and password in the form below to continue the process');
			goto('/login');
		}
	}

	onMount(() => {
		if ($isLoggedIn) {
			goto('/dashboard');
		} else {
			goto('/login');
		}
	});
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username:</label>
	<input type="text" id="username" bind:value={username} required />

	<label for="password">Password:</label>
	<input type="password" id="password" bind:value={password} required />

	<button type="submit">Login</button>
</form>

<style>
	form {
		max-width: 300px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	label {
		display: block;
		margin-bottom: 10px;
	}

	input[type='text'],
	input[type='password'] {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		padding: 10px 15px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
