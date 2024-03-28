<script>
  import FaUndoAlt from 'svelte-icons/fa/FaUndoAlt.svelte';
  import { count } from '../stores';
  
  function reset() {
    count.set(0);
  }
</script>

<button on:click={reset}>
  <FaUndoAlt />
</button>

<style>
  button {
    height: 20px;
    background: none;
  }
</style>
