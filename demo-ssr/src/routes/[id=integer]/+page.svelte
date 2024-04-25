<script lang="ts">
	export let data;

	$: character = data.character;
</script>

<div class="hero bg-base-200">
	<div class="hero-content flex-col lg:flex-row gap-10">
		<img
			alt={character.name}
			src={character.image}
			class="max-w-xs rounded-lg shadow-2xl object-contain"
		/>
		<div class="flex flex-col justify-between">
			<p>
				Name: <span class="font-semibold">
					{character.name}
				</span>
			</p>
			<p>
				Age: <span class="font-semibold">
					{character.age || 'N/A'}
				</span>
			</p>
			<p>
				Gender: <span class="font-semibold">
					{character.gender}
				</span>
			</p>
			<p>
				Hair Color: <span class="font-semibold">
					{character.gender}
				</span>
			</p>

			<p>
				Occupation: <span class="font-semibold">
					{character.occupation}
				</span>
			</p>
			<p>
				FirstEpisode: <span class="font-semibold">
					{character.firstEpisode}
				</span>
			</p>
			<p>
				Voiced By: <span class="font-semibold">
					{character.voicedBy}
				</span>
			</p>

			<a
				href="/"
				class="underline text-2xl font-semibold mt-10 mx-auto border px-10 py-1 text-center pb-3 bg-indigo-400 rounded-xl"
				>Back</a
			>
		</div>
	</div>
</div>
