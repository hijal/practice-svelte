<script>
  let counter = 0;
  let counter1 = 0;
  // let str1, str2;

  // $: {
  //   str1 = 'You have clicked counter: ' + counter + ' times';
  //   str2 = 'You have clicked counter one: ' + counter1 + ' times';
  // }

  $: str1 = 'You have clicked counter: ' + counter + ' times';
  $: str2 = 'You have clicked counter one: ' + counter1 + ' times';

  $: total =
    'Total number of clicks: ' + totalClicked(counter, counter1) + ' times';

  // $: {
  //   if (counter > 5) {
  //     alert('You have clicked maxed times');
  //     counter = 0;
  //   }
  // }

  // function totalClicked() {
  //   return counter + counter1;
  // }

  function totalClicked(a, b) {
    return a + b;
  }

  $: if (counter > 5) {
    alert('You have clicked maxed times');
    counter = 0;
  }

  function clickHandler() {
    counter1++;
  }

  // order is important when one statement depend of another and define it before the state change
  // first reactive statement
  // then define the reactive things
</script>

<button
  on:click={() => {
    counter++;
  }}>Clicks {counter}</button
>

<button on:click={clickHandler}>Clicks {counter1}</button>

<p>{str1}</p>
<p>{str2}</p>
<p>{total}</p>

<style></style>
