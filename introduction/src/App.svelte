<script>
  import Nested from './lib/Nested.svelte';

  let name = 'Svelte';
  let src = 'https://svelte.dev/tutorial/image.gif';
  let string = `here's some <strong>HTML!!!</strong>`;
</script>

<main>
  <p>Vite {name}</p>
  <div class="img">
    <img {src} alt="dancing" />
  </div>
  <Nested />

  <div>
    {@html string}
  </div>
</main>

<style>
  .img {
    width: 50px;
  }

  p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
