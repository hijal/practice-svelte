<script>
  import Keypad from './Keypad.svelte';
  let pin;
  $: view = pin ? pin.replace(/\d(?!$)/g, '.') : 'Enter your pin';

  function handleSubmit() {
    alert(`submitted pin: ${pin}`);
  }
</script>

<div>Component binding</div>

<h3 class:pin>
  {view}
</h3>

<Keypad bind:value={pin} on:submit={handleSubmit} />

<style>
</style>
