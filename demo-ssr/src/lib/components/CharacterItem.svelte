<script>
	export let name = '';
	export let image = '';
	export let id = 0;
	export let occupation = '';
</script>

<div class="card card-side bg-base-100 shadow-xl">
	<figure>
		<img src={image} alt={name} class="object-contain w-1/2 min-h-fit" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p>{occupation}</p>
		<div class="card-actions justify-end">
			<a href={'/' + id} class="border px-4 py-2 rounded-lg bg-indigo-500 text-white">Details</a>
		</div>
	</div>
</div>
