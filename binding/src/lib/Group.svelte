<script>
  let menu = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple'];
  let flavours = [];
  let scoops = 0;

  function join(flavours) {
    if (flavours.length == 1) return flavours[0];
    return `
    ${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
  }
</script>

<div>
  Group Binding <hr />
  <h4>Size</h4>
  <label>
    <input type="radio" bind:group={scoops} value={1} />
    one Scoop
  </label>

  <label>
    <input type="radio" bind:group={scoops} value={2} />
    two Scoops
  </label>

  <label>
    <input type="radio" bind:group={scoops} value={3} />
    three Scoops
  </label>
  <h4>Flavour</h4>

  {#each menu as flavour}
    <label>
      <input type="checkbox" bind:group={flavours} value={flavour} />
      {flavour}
    </label>
  {/each}

  {#if flavours.length === 0}
    <p>please select at least one flavour</p>
  {:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops</p>
  {:else}
    <p>
      You ordered {scoops}
      {scoops === 1 ? 'scoop' : 'scoops'} of {join(flavours)}
    </p>
  {/if}
</div>
