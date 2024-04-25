import { readable, writable } from 'svelte/store';

export const isLoggedIn = writable(0);

export const user = readable({
	username: 'DEMO_WALLET',
	password: 'DEMO_WALLET'
});
