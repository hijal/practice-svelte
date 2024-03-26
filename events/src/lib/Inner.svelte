<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function sayHello() {
    dispatch('message', {
      text: 'Hello Svelte'
    });
  }
</script>

<div>
  <button on:click={sayHello}>Click Me</button>
</div>
