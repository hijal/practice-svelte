<script>
  import Numeric from './lib/Numeric.svelte';
  import Text from './lib/Text.svelte';
  import CheckBox from './lib/CheckBox.svelte';
  import Group from './lib/Group.svelte';
</script>

<main>
  <Text />
  <Numeric />
  <CheckBox />

  <Group />
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
