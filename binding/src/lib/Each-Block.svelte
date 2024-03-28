<script>
  let todos = [
    { done: true, text: 'finish Svelte tutorial' },
    { done: false, text: 'build an app' },
    { done: false, text: 'world domination' }
  ];
  $: remaining = todos.filter((t) => !t.done).length;

  function add() {
    todos = todos.concat({ done: false, text: '' });
  }

  function clear() {
    todos = todos.filter((t) => !t.done);
  }
</script>

<div>Each Block Binding</div>
<h4>Todo List</h4>

{#each todos as todo}
  <div>
    <input type="checkbox" bind:checked={todo.done} />
    <input
      type="text"
      placeholder="What needs to be done?"
      bind:value={todo.text}
      disabled={todo.done}
    />
  </div>
{/each}

<p>
  {remaining} remaining
</p>

<button on:click={add}>Add</button>
<button on:click={clear}>Clear</button>

<style>
</style>
