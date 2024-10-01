<script>
  import Header from "@components/Header.svelte";
</script>
<main>
  <div class="content">
    <Header/>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</main>

<style lang="postcss"> 
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}


.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}

</style>
