<script>
  export let catNames = [];
</script>

<ul>
  {#each catNames as { id, name }}
    <li>
      {id} - {name}
    </li>
  {/each}
</ul>
