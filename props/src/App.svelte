<script>
  import Nested from './lib/Nested.svelte';
  import Info from './lib/Info.svelte';

  const pkg = {
    name: 'Svelte',
    version: '4.2.12',
    speed: 'blazing',
    website: 'https://svelte.dev'
  };
</script>

<main>
  <Nested answer={Math.floor(Math.random() * 100 + 1)} />
  <Nested />
  <Info {...pkg} />
</main>

<style>
</style>
