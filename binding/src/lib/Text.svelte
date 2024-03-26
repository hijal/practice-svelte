<script>
  let name = '';
</script>

<div>
  Text Input binding <hr />

  <input type="text" placeholder="Enter your name" bind:value={name} />

  <p>Entered Value: {name}</p>
</div>

<style>
  div {
    display: block;
  }
</style>
