<script lang="ts">
	import CharacterItem from '$lib/components/CharacterItem.svelte';

	export let data;
</script>

<svelte:head>
	<title>Bobs Burgers Characters</title>
</svelte:head>

<div
	class="mx-auto grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 flex-wrap lg:flex-nowrap gap-5 sm:mb-5 mt-3 px-5 sm:space-y-3 space-x-2"
>
	{#each data.characters as character}
		<CharacterItem {...character} />
	{/each}
</div>
