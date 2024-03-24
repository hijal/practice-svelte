<script>
  import Counter from './lib/Counter.svelte';
  import Hello from './lib/Hello.svelte';

  const props = {
    name: 'Hello',
    age: 30
  };
</script>

<Hello
  message={'My name is Svelte'}
  defaultMessage={'Svelte KIT'}
  {...props}
  restProp="this is rest props of a component"
/>
<Counter />

<!-- <style>
</style> -->
