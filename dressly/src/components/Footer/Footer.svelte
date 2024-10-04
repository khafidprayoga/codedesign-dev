<script lang="ts">
  import { playstore, appstore } from '@icons/index';
  import { logoDesktop } from '@brand/index';
</script>

<footer>
  <div class="footer-left">
    <h3>
      <img src={logoDesktop} alt="DressLy Brand Logo" class="lazy" />
    </h3>
    <p>
      We are an online fashion store that provides a variety of the latest and
      trendy fashion products for men and women. We always try to provide our
      customers with a pleasant and easy shopping experience.
    </p>
  </div>
  <div class="footer-center">
    <div>
      <h3>Product Category</h3>
      <ul>
        <li>
          <a href="#"> Women's clothing </a>
        </li>
        <li><a href="#"> Menswear </a></li>
        <li><a href="#"> Accessories </a></li>
        <li><a href="#"> Shoes</a></li>
      </ul>
    </div>

    <div>
      <h3>Company</h3>
      <ul>
        <li>
          <a href="#"> About </a>
        </li>
        <li><a href="#"> Contact </a></li>
        <li><a href="#"> Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-right lg:hidden">
    <h3>Download Our App</h3>
    <div id="dressly-download">
      <img src={playstore} alt="Download DressLy at PlayStore" />
      <img src={appstore} alt="Download DressLy at AppStore" />
    </div>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply mt-10 my-5 flex flex-col gap-5 md:flex-row md:justify-between mx-auto;
  }

  h3 {
    @apply font-sans text-xl md:text-2xl font-semibold;
  }

  footer > div {
    @apply flex-1  py-5 pt-2 px-2;
  }

  .footer-left {
    /* @apply sm:bg-red-200  */
  }

  .footer-left > * {
    @apply md:max-w-sm;
  }

  .footer-left > p {
    @apply pt-2
  }

  .footer-center {
    @apply flex flex-col lg:flex-row gap-5;
  }

  .footer-center > div {
    @apply flex-1;
  }

  #dressly-download {
    @apply flex flex-row gap-2 gap-x-10;
  }

  #dressly-download > img {
    @apply w-32 sm:size-full max-w-32 pt-2;
  }
  li > a {
    @apply text-gray-500 hover:text-gray-900 hover:underline;
  }
</style>
