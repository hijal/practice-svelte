<script>
  import { count } from './stores';
</script>

<main>
  <h1>{$count}</h1>
  <button on:click={count.increment}>Increment</button>
  <button on:click={count.decrement}>decrement</button>
  <button on:click={count.reset}>reset</button>
</main>

<style>
</style>
