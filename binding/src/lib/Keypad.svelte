<script>
  import { createEventDispatcher } from 'svelte';
  export let value = '';

  const dispatch = createEventDispatcher();
  const selected = (n) => () => (value += n);
  const clear = () => (value = '');
  const submit = () => dispatch('submit');
</script>

<div class="keypad">
  <button on:click={selected(1)}>1</button>
  <button on:click={selected(2)}>2</button>
  <button on:click={selected(3)}>3</button>
  <button on:click={selected(4)}>4</button>
  <button on:click={selected(5)}>5</button>
  <button on:click={selected(6)}>6</button>
  <button on:click={selected(7)}>7</button>
  <button on:click={selected(8)}>8</button>
  <button on:click={selected(9)}>9</button>
  <button on:click={clear}>clear</button>
  <button on:click={selected(0)}>0</button>
  <button on:click={submit}>submit</button>
</div>

<style>
  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 5em);
    grid-template-rows: repeat(4, 3em);
    grid-gap: 0.5em;
  }

  button {
    margin: 0;
  }
</style>
