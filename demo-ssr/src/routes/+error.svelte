<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen">
	<div class="m-auto">
		<h1 class="font-bold text-4xl text-red-500">{$page.status}</h1>
		<h1 class="font-semibold text-2xl text-red-500 mt-5">{$page.error?.message}</h1>

		<a href="/" class="underline text-base font-medium mt-5 mx-20">Home</a>
	</div>
</div>
