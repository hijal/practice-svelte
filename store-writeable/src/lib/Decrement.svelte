<script>
  import FaMinusCircle from 'svelte-icons/fa/FaMinusCircle.svelte';
  import { count } from '../stores';

  function decrement() {
    count.update((n) => {
      if (n <= 0) {
        alert('Negative number is not allowed');
        return 0;
      }
      return n - 1;
    });
  }
</script>

<button on:click={decrement}>
  <FaMinusCircle />
</button>

<style>
  button {
    height: 20px;
    background: none;
  }
</style>
