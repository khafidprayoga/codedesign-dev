<script lang="ts">
  import { PlaceOrderStep, PlaceOrderMetadata } from '@config/const/PlaceOrder';

  let orderSteps = [
    PlaceOrderMetadata[PlaceOrderStep.SELECT_PRODUCT],
    PlaceOrderMetadata[PlaceOrderStep.CREATE_ACCOUNT],
    PlaceOrderMetadata[PlaceOrderStep.CHECK_CART],
    PlaceOrderMetadata[PlaceOrderStep.CHECKOUT],
  ];
</script>

<div id="order-step">
  <h2>The Easiest Way to Order</h2>
  <div class="pb-10">
    <div class="steps ">
      {#each orderSteps as step, i}
        <div class="step-wrapper">
          <div class="step-container">
            <span class="step-number">{i + 1}</span>
            <p class="step">{step}</p>
            {#if i < orderSteps.length - 1}
              <hr class="step-line-desktop" />
            {:else}
               <span class="xl:my-12"></span>
            {/if}
          </div>
          {#if i < orderSteps.length - 1}
            <hr class="step-line-mobile" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  #order-step {
    @apply flex flex-col items-center pt-5 gap-5 md:py-5 bg-primary-300 mt-10 rounded-lg w-full min-h-fit lg:py-32;
  }

  h2 {
    @apply font-Lora text-3xl md:text-4xl font-semibold pt-2;
  }

  .steps {
    @apply font-OpenSans text-lg md:text-xl flex flex-col xl:flex-row gap-4 w-full px-4 font-medium;
  }

  .step-wrapper {
    @apply flex flex-col items-center xl:flex-row md:items-start md:gap-3 justify-center;
  }

  .step-container {
    @apply flex items-center gap-3;
  }

  .step-number {
    @apply w-11 h-11 bg-primary-200 text-center rounded-full text-black font-bold flex items-center justify-center;
  }

  .step-line-desktop {
    @apply w-28 h-0 border-2 border-primary-700 border-dashed  my-12 hidden xl:inline;
  }

  .step-line-mobile {
    @apply inline w-28 h-0 border-2 border-primary-700 border-dashed rotate-90 my-12 xl:hidden;
  }
</style>
