<script>
  import { elapsed, time } from './stores';

  const formatter = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
</script>

<main>
  <h1>Time: {formatter.format($time)}</h1>
  <h1>
    This page has been open for {$elapsed}
    {$elapsed === 1 ? 'second' : 'seconds'}
  </h1>
</main>

<style>
</style>
