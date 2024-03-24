<script>
  export let message;
  export let defaultMessage = ''; // it will set default props of a component
  export let name;
  export let age;

  // if export the props then it will be the $$props
  console.log($$props);

  // if export not defined and it is passed in the component then it will be the $$restProps
  console.log($$restProps);
</script>

<p>Main message: {message}</p>
<p>default Message: {defaultMessage}</p>
<p>Rest props Message: {$$restProps.restProp}</p>

<p>
  Name: {name}
  Age: {age}
</p>

<style>
</style>
