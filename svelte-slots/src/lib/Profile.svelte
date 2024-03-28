<script>
  console.log($$slots);
</script>

<section>
  <div>Name</div>
  <slot name="name" />
  {#if $$slots.email}
    <div>email</div>
    <slot name="email" />
  {/if}

  {#if $$slots.phone}
    <div>phone</div>
    <slot name="phone" />
  {/if}
</section>
