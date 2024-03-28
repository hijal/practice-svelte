<script>
  let files;

  $: if (files) {
    console.log(files);
    for (const file of files) {
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
    }
  }
</script>

<div>File Input binding</div>

<label for="avatar">Upload a picture</label>
<input
  type="file"
  id="avatar"
  accept="image/png, image/jpeg"
  name="avatar"
  bind:files
/>

<label for="many">Upload multiple files of any type</label>
<input type="file" name="many" id="many" bind:files multiple />

{#if files}
  <h4>Selected files information</h4>
  {#each files as { name, size, type }}
    <p>name: {name}</p>
    <p>size: {size} bytes</p>
    <p>type: {type}</p>
  {/each}
{/if}

<style>
</style>
