<script lang="ts">
  export let title: string;
  export let actionTitle: string = '';
</script>

<div class="content">
  <div class="content-header">
    <h2>{title}</h2>
    {#if actionTitle !== ''}
      <button
        class="text-gray-700 font-bold md:bg-primary-500 hover:text-gray-900 md:hover:bg-primary-300 px-5 hover:underline md:hover:no-underline py-2 rounded-md"
      >
        {actionTitle}
      </button>
    {/if}
  </div>
  <div class="content-body">
    <slot />
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply text-left font-Lora text-3xl md:text-4xl font-semibold;
  }
  .content {
    @apply flex flex-col gap-5 mt-10 md:py-5;
  }

  .content-header {
    @apply flex flex-row justify-between items-center;
  }
</style>
