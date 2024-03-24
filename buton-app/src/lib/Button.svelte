<script>
  let hovering;
  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<button on:mouseenter={enter} on:mouseleave={leave}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div>
    <slot name="icon" />
  </div>
  <slot {hovering}>Button</slot>
</button>

<style lang="scss">
  button {
    display: flex;
    gap: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.8em 1.5em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
</style>
