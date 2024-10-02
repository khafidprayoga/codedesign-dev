<script>
  import { logoMobile, logoDesktop } from '@brand/index';
</script>

<div class="flex items-center justify-center md:justify-start ">
    <div class="flex-shrink-0 text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
      <img src={logoMobile} alt="DressLy Brand Logo" class="md:hidden"/>
      <img src={logoDesktop} alt="DressLy Brand Logo" class="hidden md:block"/>
    </div>
</div>

<style lang="postcss">
  * {
    cursor: pointer;
  }
</style>