<script>
  let promise;
  async function getRandomNumber() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await res.json();
    return data;
  }

  function clickHandler() {
    promise = getRandomNumber();
  }
</script>

<button on:click={clickHandler}>Get Random Number</button>

{#await promise}
  <p>...waiting</p>
{:then data}
  {#if data}
    <p>{JSON.stringify(data)}</p>
  {/if}
{:catch er}
  <p>
    Error: {er.message}
  </p>
{/await}
