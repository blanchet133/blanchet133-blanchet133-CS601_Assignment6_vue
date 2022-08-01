<template>
  <h2>Amazing Transformations!</h2>
  <section class="center">
    <PreImage :imageList="imageData.dogList" class="picture"/>
    <PreImage :imageList="imageData.townList" class="picture"/>
    <PreImage :imageList="imageData.damList" class="picture"/>
    <PreImage :imageList="imageData.butterflyList" class="picture"/>
  </section>
</template>

<script>
  import imageData from './data/imageData.js';
  import PreImage from './components/PreImages.vue';

  export default {
    name: 'App',
    components: { PreImage },
    data() {
      return {
        imageData
      };
    }
  };
</script>

<style>
  .center {
    display: flex;
  }
  img {
    height: 200px;
    width: auto; 
    padding: 10px;
  }

</style>

