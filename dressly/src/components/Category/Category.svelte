<script lang="ts">
  import { eid, shoes, accessories } from '@assets/category/index';

  const categories = [
    {
      name: 'Elegant Eid Attire',
      image: eid,
    },
    {
      name: 'Accessory Essentials',
      image: accessories,
    },
    {
      name: 'Everyday Shoes',
      image: shoes,
    },
  ];
</script>

<div id="category-picks">
  {#each categories as { name, image }}
    <div class="category-wrapper">
      <h3>{name}</h3>
      <div class="backdrop-layer">
        <img src={image} alt={`Top Category Picks: ${name}`} />
      </div>
      <div class="text-backdrop"></div>
    </div>
  {/each}
</div>

<style lang="postcss">
  #category-picks {
    @apply flex flex-col gap-5 lg:flex-row md:gap-10 justify-center items-center;
  }

  h3 {
    @apply text-white font-Lora text-xl md:text-2xl font-semibold absolute z-20 bottom-0 left-0 right-0 text-center pb-4;
  }

  .category-wrapper {
    @apply relative w-full h-96 md:h-96 rounded-lg overflow-hidden cursor-pointer;
  }

  .backdrop-layer {
    @apply absolute inset-0 transition-all duration-300 ease-in-out;
  }

  .category-wrapper:hover .backdrop-layer {
    @apply backdrop-blur-md bg-black/30;
  }

  .category-wrapper:hover h3 {
    @apply opacity-100;
  }

  .category-wrapper img {
    @apply w-full h-full object-cover;
  }

  .category-wrapper:hover img {
    @apply scale-105;
  }
  .text-backdrop {
    @apply absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300;
  }

  .category-wrapper:hover .text-backdrop {
    @apply opacity-100;
  }
</style>
