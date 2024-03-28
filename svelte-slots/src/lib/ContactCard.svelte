<article class="contact-card">
  <h2>
    <slot name="name">
      <span class="missing">Unknown name</span>
    </slot>
  </h2>

  <div class="address">
    <slot name="address">
      <span class="missing">Unknown address</span>
    </slot>
  </div>

  <div class="email">
    <slot name="email">
      <span class="missing">Unknown email</span>
    </slot>
  </div>
</article>

<style>
  .contact-card {
    width: 300px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border: 1px solid aquamarine;
  }
</style>
