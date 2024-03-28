<script>
  import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte';
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';

  import Box from './lib/Box.svelte';
  import ContactCard from './lib/ContactCard.svelte';
  import Hoverable from './lib/Hoverable.svelte';
  import Profile from './lib/Profile.svelte';
  import Modal from './lib/Modal.svelte';

  let showModal = false;
</script>

<main>
  <h4>Slots with no fallbacks</h4>
  <Box>
    <h3>hello</h3>
    <p>This is a box. It can contain anything.</p>
  </Box>

  <h4>Slots with fallbacks</h4>
  <Box />

  <h4>Named slots</h4>

  <ContactCard>
    <h3 slot="name">Svelte</h3>
    <p slot="address" class="address">
      <FaMapMarkerAlt />
      United States
    </p>
    <p slot="email">
      <FaEnvelope />
      svelte@svelte.com
    </p>
  </ContactCard>

  <h4>Slot props</h4>

  <Hoverable let:hovering={active}>
    <div class:active>
      {#if active}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hovered over</p>
      {/if}
    </div>
  </Hoverable>

  <h4>Conditional Slots</h4>

  <Profile>
    <span slot="name">Svelte</span>
    <span slot="email">svelte@svelte.com</span>
  </Profile>

  <Profile>
    <span slot="name">Svelte</span>
    <span slot="phone">123455</span>
  </Profile>

  <h4>Modal Slots</h4>

  <button on:click={() => (showModal = true)}>Show Modal</button>

  <Modal bind:showModal>
    <h2 slot="header">Modal</h2>

    <ol class="definition-list">
      <li>of or relating to modality in logic</li>
      <li>
        containing provisions as to the mode of procedure or the manner of
        taking effect —used of a contract or legacy
      </li>
      <li>of or relating to a musical mode</li>
      <li>of or relating to structure as opposed to substance</li>
      <li>
        of, relating to, or constituting a grammatical form or category
        characteristically indicating predication
      </li>
      <li>of or relating to a statistical mode</li>
    </ol>
  </Modal>
</main>

<style>
  .address {
    width: 300px;
  }
</style>
