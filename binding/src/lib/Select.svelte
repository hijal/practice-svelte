<script>
  let questions = [
    { id: 1, text: 'Where did you go to school?' },
    { id: 2, text: "What is your mother's name?" },
    {
      id: 3,
      text: 'What is another personal fact that an attacker could easily find with Google?'
    }
  ];

  let selected;
  let answer;

  function submitHandler() {
    alert(
      `answer question: \n ${selected.id}) ${selected.text} with "${answer}"`
    );
  }
</script>

<div>Select binding</div>

<h4>Insecurity questions</h4>
<form on:submit|preventDefault={submitHandler}>
  <select bind:value={selected} on:change={() => (answer = '')}>
    {#each questions as q}
      <option value={q}> {q.text}</option>
    {/each}
  </select>

  <input type="text" bind:value={answer} />
  <button disabled={!answer}>submit</button>
</form>

<p>
  selected question {selected ? selected.id : '[waiting...]'}
</p>

<style>
</style>
