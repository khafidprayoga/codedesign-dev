<script lang="ts">
  import Brand from './Brand.svelte';
  import ModalActionMenu from './ModalActionMenu.svelte';
  import HamburgerMenu from './HamburgerMenu.svelte';
  import ActionMenu from './ActionMenu.svelte';
  import ActionIcon from './ActionIcon.svelte';

  import { isModalMenuOpen } from '@store/mobile';
</script>

<nav>
  <div class="px-4 sm:px-6 lg:px-8">
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
