<script lang="ts">
  import {
    berluti,
    gucci,
    jimmyChoo,
    burberry,
    balenciaga,
    louisVuitton,
  } from '@brand/index';

  const brands = [
    {
      name: 'Berluti',
      image: berluti,
    },
    {
      name: 'Gucci',
      image: gucci,
    },
    {
      name: 'Jimmy Choo',
      image: jimmyChoo,
    },
    {
      name: 'Burberry',
      image: burberry,
    },
    {
      name: 'Balenciaga',
      image: balenciaga,
    },
    {
      name: 'Louis Vuitton',
      image: louisVuitton,
    },
  ];
</script>

<div id="brand-slider">
  {#each brands as { name, image }}
    <div class="brand-wrapper">
      <img src={image} alt={`Brand ${name}`} class="drop-shadow-2xl" />
    </div>
  {/each}
</div>

<style lang="postcss">
  * {
    /* border: 1px dashed green; */
  }

  #brand-slider {
    @apply my-10 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-6;
  }

  .brand-wrapper {
    @apply mx-auto;
  }
</style>
