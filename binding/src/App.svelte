<script>
  import Numeric from './lib/Numeric.svelte';
  import Text from './lib/Text.svelte';
  import CheckBox from './lib/CheckBox.svelte';
  import Group from './lib/Group.svelte';
  import Textarea from './lib/Textarea.svelte';
  import File from './lib/File.svelte';
  import Select from './lib/Select.svelte';
  import EachBlock from './lib/Each-Block.svelte';
  import Component from './lib/Component.svelte';
</script>

<main>
  <Text />
  <Numeric />
  <CheckBox />
  <Group />
  <Textarea />
  <File />
  <Select />
  <EachBlock />
  <Component />
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
