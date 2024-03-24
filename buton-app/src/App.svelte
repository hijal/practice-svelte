<script>
  import Hover from './lib/Hover.svelte';
  import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
  import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte';
</script>

<Hover>
  <div style:width="20px" slot="leftContent" let:isLeftHovered>
    {#if isLeftHovered}
      <FaAngellist />
    {:else}
      <FaAllergies />
    {/if}
  </div>
  Button Text
</Hover>

<style>
</style>
