<script>
  import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
  import { count } from '../stores';

  function increment() {
    count.update((n) => {
      return n + 1;
    });
  }
</script>

<button on:click={increment}>
  <FaPlus />
</button>

<style>
  button {
    height: 20px;
    background: none;
  }
</style>
