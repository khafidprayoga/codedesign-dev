import { writable } from 'svelte/store';

export const isModalMenuOpen = writable(false);
export function toggleModalMenu() {
  isModalMenuOpen.update((value) => !value);
}
