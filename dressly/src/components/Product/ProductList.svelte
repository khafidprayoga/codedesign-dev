<script lang="ts">
  import { shoes, dressMan, dressWoman, bag } from '@assets/product/index';
  import Product from './Product.svelte';

  const products = [
    {
      name: 'Sneaker',
      image: shoes,
      metaImage: 'White Sneakers for Jogging',
      ratingScore: 4.5,
      ratingTotal: 325,
      price: 965_500,
      normalPrice: 1_097_500,
    },
    {
      name: `Women Robe's`,
      image: dressWoman,
      metaImage: `Women Robe's white`,
      ratingScore: 4.5,
      ratingTotal: 325,
      price: 755_500,
    },
    {
      name: `Bag`,
      image: bag,
      metaImage: `Gucci trendy bag`,
      ratingScore: 4.5,
      ratingTotal: 325,
      price: 920_500,
      normalPrice: 1_500_000,
    },
    {
      name: `Men Robe's`,
      image: dressMan,
      metaImage: `Men Robe's white`,
      ratingScore: 4.5,
      ratingTotal: 325,
      price: 680_000,
    },
  ];
</script>

<div id="product-list">
    {#each products as product}
        <Product {...product} />
    {/each}
</div>

<style lang="postcss">
  #product-list {
    @apply flex flex-row gap-5 overflow-x-scroll lg:overflow-hidden;
  }
</style>
