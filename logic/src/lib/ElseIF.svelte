<script>
  export let DIGIT = undefined;
</script>

{#if DIGIT > 10}
  <p>{DIGIT} is greater than 10</p>
{:else if DIGIT < 10}
  <p>{DIGIT} is less than 10</p>
{:else}
  <p>{DIGIT} is equal to 10</p>
{/if}
