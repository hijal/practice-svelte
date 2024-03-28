import { writable } from 'svelte/store';

function createCount() {
  const { update, subscribe, set } = writable(0);

  function increment() {
    return update((n) => n + 1);
  }

  function decrement() {
    return update((n) => n - 1);
  }

  function reset() {
    return set(0);
  }

  return {
    subscribe,
    increment,
    decrement,
    reset
  };
}

export const count = createCount();
