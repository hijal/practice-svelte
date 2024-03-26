<script>
  // import Inner from './lib/Inner.svelte';
  import Custom from './lib/Custom.svelte';
  import Outer from './lib/Outer.svelte';

  let m = {
    x: 0,
    y: 0
  };

  function mouseMoveHandler(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function mouseOverHandler(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function clickHandler() {
    alert('No more alerts');
  }

  function messageHandler(e) {
    console.log(e);
    alert(e.detail.text);
  }

  function customClickHandler() {
    alert('Clicked custom handler');
  }
</script>

<main>
  <h4>DOM events</h4>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:mousemove={mouseMoveHandler}>
    The mouse position is {m.x} X {m.y}
  </div>

  <h4>Inline handlers</h4>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    on:mouseover={(e) =>
      (m = {
        x: e.clientX,
        y: e.clientY
      })}
  >
    Inline Mouse position is {m.x} X {m.y}
  </div>

  <h4>event modifiers</h4>
  <div>
    <button on:click|once={clickHandler}>Click me</button>
  </div>

  <h4>Component events and Event Forwarding</h4>
  <Outer on:message={messageHandler} />

  <h4>DOM event forwarding</h4>
  <Custom on:click={customClickHandler} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 100%;
  }
</style>
