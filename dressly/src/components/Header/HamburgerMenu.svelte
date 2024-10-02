<script>
  import { menu } from '@icons/index';
  import { X } from 'lucide-svelte';
  import { isModalMenuOpen, toggleModalMenu } from '@store/mobile';
</script>

<div class="flex items-center md:hidden">
  <button
    on:click={toggleModalMenu}
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    aria-expanded={isModalMenuOpen}
  >
    <span class="sr-only">Open main menu</span>
    {#if $isModalMenuOpen}
      <X class="block h-6 w-6" aria-hidden="true" />
    {:else}
      <i aria-hidden="true"><img src={menu} alt="Left Menu" class="block h-6 w-6"/></i>
    {/if}
  </button>
</div>
