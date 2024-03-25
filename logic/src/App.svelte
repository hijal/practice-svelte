<script>
  import If from './lib/If.svelte';
  import Else from './lib/Else.svelte';
  import ElseIF from './lib/ElseIF.svelte';
  import Each from './lib/Each.svelte';
  import KeyedEach from './lib/KeyedEach.svelte';
  import Await from './lib/Await.svelte';

  let user = { loggedIn: false };

  let catNames = [
    { id: 1, name: 'Lucy' },
    { id: 2, name: 'Charlie cat' },
    { id: 3, name: 'Pepper' }
  ];

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' }
  ];

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }

  /**
   * @param {number} id
   */
  function remove(id) {
    things = things.filter((t) => t.id !== id);
  }

  const DIGIT = 10;
</script>

<main>
  <If {user} on:click={toggle} />
  <Else {user} on:click={toggle} />
  <ElseIF {DIGIT} />
  <Each {catNames} />

  <Await />

  <div class="things">
    {#each things as thing (thing.id)}
      <span
        ><KeyedEach name={thing.name} />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span
          on:click={() => {
            remove(thing.id);
          }}>X</span
        >
      </span>
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100%;
  }

  .things {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100%;
  }
</style>
