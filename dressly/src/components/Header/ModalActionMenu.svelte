<script>
  import { slide } from 'svelte/transition';
</script>

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

<style lang="postcss">
</style>
