<script lang="ts">
  import {
    Header,
    Hero,
    BrandSlider,
    Content,
    Stepper,
    Newsletter,
    Footer,
    Category,
    Product,
  } from '@components/index';
    import ProductList from '@components/Product/ProductList.svelte';
</script>

<div class="py-2 mx-auto md:w-10/12 px-4 md:px-0">
  <Header />
  <main>
    <Hero />
    <BrandSlider />
    <Content title="Our Selections">
      <Category />
    </Content>
    <Content title="Bestsellers" actionTitle="See All">
      <ProductList />
    </Content>
    <Stepper />
  </main>
  <Newsletter />
  <Footer />
</div>
