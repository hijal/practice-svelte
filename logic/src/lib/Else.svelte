<script>
  export let user = {};
</script>

{#if user.loggedIn}
  <button on:click>Log out</button>
{:else}
  <button on:click>Log in</button>
{/if}
