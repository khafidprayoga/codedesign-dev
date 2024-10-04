<script lang="ts">
  import {
    berluti,
    gucci,
    jimmyChoo,
    burberry,
    balenciaga,
    louisVuitton,
  } from '@brand/index';
  import { Marquee } from '@selemondev/svelte-marquee';

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

  let animateSponsor = false;
  // Update the state based on window size
  const updateSponsorAnimation = () => {
    if (window.innerWidth < 640) { // 640px is the 'sm' breakpoint in Tailwind
      animateSponsor = false;
    } else {
      animateSponsor = true;
    }
  };

</script>

<Marquee
  class="gap-[3rem] [--duration:10s] [--gap:3rem] md:w-[800px] mx-auto overflow-x-hidden"
  direction="left"
  fade={true}
  reverse={true}
  pauseOnHover={false}
  innerClassName="gap-[3rem]"
>
  <div id="brand-slider">
    {#each brands as { name, image }}
      <div class="brand-wrapper">
        <img
          src={image}
          alt={`Brand ${name}`}
          class="drop-shadow-md select-none"
        />
      </div>
    {/each}
  </div>
</Marquee>


<style lang="postcss">
  * {
    /* border: 1px dashed green; */
  }

  #brand-slider {
    @apply mt-10 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-6;
  }

  .brand-wrapper {
    @apply mx-auto;
  }
</style>
