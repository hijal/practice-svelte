<script>
  let count = 1;

  // let doubleCount = 0;
  // let quadrupleCount = 0;

  $: doubleCount = count * 2;
  $: quadrupleCount = doubleCount * 2;

  $: if (count > 10) {
    alert('Count is dangerously high');
    count = 1;
  }

  function clickHandler() {
    count++;
  }
</script>

<main>
  <button on:click={clickHandler}
    >Clicked {count} {count === 1 ? 'time' : 'times'}</button
  >

  <p>
    {count} * 2 = {doubleCount}
  </p>
  <p>
    {doubleCount} * 2 = {quadrupleCount}
  </p>
</main>

<style>
</style>
