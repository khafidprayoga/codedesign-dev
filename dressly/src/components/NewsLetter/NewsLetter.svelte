<script lang="ts">
  import { newsletter } from '@icons/index';

  const onSubmit = (e: Event) => {
    e.preventDefault();

    alert('Notification Sent');
  };
</script>

<form id="newsletter" on:submit={onSubmit}>
  <h2>
    <label for="subscriber-email">Subscribe Our Newsletter</label>
  </h2>
  <div class="w-[350px] sm:w-1/2 flex flex-row gap-5">
    <input
      id="subscriber-email"
      type="email"
      placeholder="Type your email"
      name="email"
      required
      aria-label="Enter your email to subscribe"
    />
    <button
      type="submit"
      class="text-gray-700 bg-primary-500 hover:text-gray-900 hover:bg-primary-300 px-3 py-2 rounded-md"
      aria-label="Subscribe to newsletter"
    >
      <img src={newsletter} alt="Subscribe Newsletter Button" />
    </button>
  </div>
</form>

<style lang="postcss">
  * {
    /* border: 1px saddlebrown dashed; */
  }

  #newsletter {
    @apply flex flex-col items-center gap-5 mt-10 md:py-5;
  }

  #newsletter > h2 > label {
    @apply font-Lora text-3xl md:text-4xl font-semibold; 
  }

  #subscriber-email {
    @apply border border-gray-500 rounded-md py-2 px-2 w-full;
  }
</style>
