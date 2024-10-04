<script>
  import { rules, object, hero } from '@artwork/index';
</script>

<div id="hero">
  <div id="artwork">
    <img class="lazy" id="artwork-vector-rule" src={rules} alt="Hero Artwork - Ruler" />
    <img class="lazy" id="artwork-vector-object" src={object} alt="Hero Artwork - Vector Object" />
    <img class="lazy" id="artwork-clothes" src={hero} alt="Hero Artwork - Clothes" fetchpriority="high"/>
  </div>
  <div id="cta">
    <h1 id="cta-title">Discover the Latest Fashion Trends</h1>
    <p class="cta-description">
      From stylish dresses to trendy tops and must-have accessories, we have
      everything you need to stay on top of the latest fashion trends.
      </p>
      <p class="cta-description">
        Our
        expertly curated collection features the hottest styles from top
        designers, so you can always find the perfect look for any occasion
      </p>
      <p class="cta-description">Shop
      now and discover your new favorite fashion pieces.
    </p>
    <button id="cta-action">Shop Now</button>
  </div>
</div>

<style lang="postcss">
  img {
    @apply object-cover w-fit;
  }

  #hero {
    @apply md:mt-10 md:py-5 flex flex-col gap-5 md:flex-row-reverse h-screen md:justify-center md:items-center relative min-h-fit;
  }

  #hero > div {
    @apply md:flex-1;
  }
  
  #artwork {
    @apply sm:flex sm:flex-col relative   select-none
    min-h-[420px] min-[450px]:min-h-[490px] min-[490px]:min-h-[560px] sm:min-h-[570px] 
    md:min-h-full
    ; 
  }


  #artwork-vector-rule {
    @apply  absolute top-0 left-0 md:w-auto md:h-auto;
  }

  #artwork-vector-object {
    @apply absolute top-[125px] left-[-25px] md:w-auto md:h-auto;
    
  }

  #artwork-clothes {
    @apply  absolute top-0 right-0 md:h-full max-h-[550px] md:max-h-full;
  }

  #cta {
    @apply font-OpenSans flex flex-col gap-5;
  }

  #cta-title {
    @apply font-Lora text-5xl md:text-7xl;
  }

  .cta-description {
    @apply font-sans text-xl tracking-wide; 
  }

  #cta-action{
    @apply bg-primary-500 hover:bg-primary-300 w-full text-black font-semibold px-5 py-3 rounded-md md:w-1/2;
  }
</style>
