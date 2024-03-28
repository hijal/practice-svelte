<script>
  import { time } from './stores';
  const formatter = new Intl.DateTimeFormat('bn', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<main>
  <h1>
    {formatter.format($time)}
  </h1>
</main>

<style>
</style>
