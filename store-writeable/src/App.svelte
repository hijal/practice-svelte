<script>
  import { count } from './stores';
  import Increment from './lib/Increment.svelte';
  import Decrement from './lib/Decrement.svelte';
  import Reset from './lib/Reset.svelte';

  let countValue;

  count.subscribe((value) => {
    countValue = value;
  });
</script>

<main>
  <h4>
    The count is {countValue}
  </h4>
  <Increment />
  <Decrement />
  <Reset />
  <div>Auto Subscription</div>

  <h4>
    The count with auto subscription is {$count}
  </h4>
</main>

<style>
</style>
