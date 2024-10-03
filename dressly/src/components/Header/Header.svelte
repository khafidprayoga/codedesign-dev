<script lang="ts">
  import Brand from './Brand.svelte';
  import ModalActionMenu from './ModalActionMenu.svelte';
  import HamburgerMenu from './HamburgerMenu.svelte';
  import ActionMenu from './ActionMenu.svelte';
  import ActionIcon from './ActionIcon.svelte';

  import { isModalMenuOpen } from '@store/mobile';
</script>

<nav class="sticky top-0 z-[100] bg-gray-50 md:static md:bg-inherit">
  <div class="px-2 sm:px-4 md:px-0">
    <div class="flex items-center justify-between h-16">
      <!-- Mobile: Hamburger menu (left) -->
     <HamburgerMenu/>

      <!-- Brand logo -->
      <Brand />

      <!-- Desktop: Navigation items (center) -->
      <ActionMenu />

      <!-- 
      Desktop: Cart, Account, Search (right) 
      Mobile: Only Cart (right) 
      -->
      <ActionIcon/>
    </div>
  </div>
  <!-- Mobile: Dropdown menu -->
  {#if $isModalMenuOpen}
    <ModalActionMenu />
  {/if}
</nav>

<style lang="postcss">
</style>
