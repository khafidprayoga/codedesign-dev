<script>
  import { rules, object, hero } from '@artwork/index';
</script>

<div id="hero">
  <div id="artwork">
    <img id="artwork-vector-rule" src={rules} alt="Hero Artwork - Ruler" />
    <img id="artwork-vector-object" src={object} alt="Hero Artwork - Vector Object" />
    <img id="artwork-clothes" src={hero} alt="Hero Artwork - Clothes" />
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
    @apply pt-5 flex flex-col gap-5 md:flex-row-reverse h-screen md:justify-center md:items-center relative;
  }

  #hero > div {
    @apply md:flex-1;
  }
  
  #artwork {
    @apply flex flex-col relative;
  }


  #artwork-vector-rule {
    @apply  absolute top-0 left-0 self-start w-24 h-24 md:w-auto md:h-auto;
  }

  #artwork-vector-object {
    @apply absolute top-[31%] md:top-[21%] left-[-13%] md:left-[-7%] w-[110px] h-20 md:w-24 md:h-24 self-start;
  }

  #artwork-clothes {
    @apply  bottom-0 right-0 self-end;
  }

  #cta {
    @apply flex flex-col gap-5;
  }

  #cta-title {
    @apply font-serif text-5xl md:text-7xl;
  }

  .cta-description {
    @apply font-sans text-xl tracking-wide; 
  }

  #cta-action{
    @apply bg-primary-500 w-full text-black font-semibold px-5 py-3 rounded-md md:w-1/2;
  }
</style>
