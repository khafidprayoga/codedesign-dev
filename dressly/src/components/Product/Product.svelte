<script lang="ts">
  import { star } from '@icons/index';

  import { IDR } from '@utils/currency';

  export let name: string;
  export let image: string;
  export let metaImage: string;
  export let ratingScore: number = 0;
  export let ratingTotal: number = 0;
  export let price: number = 0;
  export let normalPrice: number = 0;
</script>

<div class="product">
  <div class="product-header">
    <img src={image} alt={metaImage} />
  </div>
  <div class="product-body">
    <p class="product-name">{name}</p>
    <div class="product-rating">
      <img
        src={star}
        alt="Star (Grading Icon)"
        class="inline w-[24px] h-[24px]"
      />
      <sup>
        <span class="rating-score">{ratingScore}</span>
        <span class="rating-total">({ratingTotal})</span>
      </sup>
    </div>
    <div class="product-price">
      <span class="price">{IDR(price).format()}</span>
      {#if normalPrice > 0}
        <span class="normal-price ml-3">{IDR(normalPrice).format()}</span>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .product {
    @apply border-2 border-gray-200 py-5 px-5 rounded-lg w-full  min-w-[300px];
  }

  .product-header > img {
    @apply w-full  object-cover
  }
  .product-body > * {
    @apply pt-1;
  }

  .product-name {
    @apply text-lg font-semibold font-OpenSans;
  }
  .rating-total {
    @apply text-gray-500;
  }

  .product-price > span {
    @apply text-sm font-OpenSans;
  }

  .normal-price {
    @apply text-red-500 line-through;
  }
</style>
