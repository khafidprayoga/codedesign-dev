<script lang="ts">
  import { search, cart, account, menu } from '@icons/index';
  import { logo } from '@brand/index';
  import { slide } from 'svelte/transition';
  import {  X} from 'lucide-svelte';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class="">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Mobile: Hamburger menu (left) -->
      <div class="flex items-center md:hidden">
        <button
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded={isOpen}
        >
          <span class="sr-only">Open main menu</span>
          {#if isOpen}
            <X class="block h-6 w-6" aria-hidden="true" />
          {:else}
            <i  aria-hidden="true"><img src={menu} alt="Left Menu"></i>
          {/if}
        </button>
      </div>

      <!-- Brand logo -->
      <div class="flex items-center justify-center md:justify-start">
        <div class="flex-shrink-0">
          <img src={logo} alt="DressLy Brand Logo" />
        </div>
      </div>

      <!-- Desktop: Navigation items (center) -->
      <div class="hidden md:flex md:items-center md:space-x-4">
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >Shop</a
>
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >New Arrivals</a
        >
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >Sale</a
        >
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >Blog</a
        >
      </div>

      <!-- Desktop: Cart, Account, Search (right) -->

      
      <!-- Mobile: Only Cart (right) -->
      <div class="flex items-center space-x-4">
        <button
        class="hidden md:block text-gray-700 hover:text-gray-900"
        aria-label="Search"
      >
        <img src={search} alt="Search" class="h-6 w-6" />
      </button>
        <button
          class="text-gray-700 hover:text-gray-900"
          aria-label="Shopping cart"
        >
          <img src={cart} alt="Shopping cart" class="h-6 w-6" />
        </button>
        <button
          class="hidden md:block text-gray-700 hover:text-gray-900"
          aria-label="User account"
        >
          <img src={account} alt="User Account Login" class="w-6 h-6">
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile: Dropdown menu -->
  {#if isOpen}
    <div class="md:hidden" transition:slide={{ duration: 300 }}>
      <div class="px-2 pt-3 pb-3 space-y-1 sm:px-3">
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
          >Shop</a
        >
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
          >New Arrivals</a
        >
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
          >Sale</a
        >
        <a
          href="#"
          class="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
          >Blog</a
        >
      </div>
    </div>
  {/if}
</nav>

<style lang="postcss">
</style>
