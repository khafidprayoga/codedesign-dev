<script lang="ts">
  import { search, cart, account,  } from '@icons/index';
  import { userData } from '@store/auth';

  $: userName = $userData.email;
</script>

<div class="flex items-center space-x-4">
  <button
    class="hidden md:block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
    aria-label="Search"
  >
    <img src={search} alt="Search" class="h-6 w-6" />
  </button>
  <button
    class="text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md"
    aria-label="Shopping cart"
  >
    <img src={cart} alt="Shopping cart" class="h-6 w-6" />
  </button>
  <button
    class="hidden md:block text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md"
    aria-label="User account"
  >
    <img src={account} alt="User Account " class="w-6 h-6" />
  </button>
  {#if userName}
    <span class="hidden sm:inline-block font-thin font-OpenSans"
      >{userName}</span
    >
  {/if}
</div>
