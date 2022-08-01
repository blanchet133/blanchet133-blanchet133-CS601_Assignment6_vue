<template>
  <h2>Amazing Transformations!</h2>
  <section class="center">
    <PreImage :imageList="imageData.imageList"/>
  </section>
  <h2>Amazing Transformations!</h2>
</template>

<script>
  import imageData from './data/imageData';
  import PreImage from './PreImage.vue';

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
  /* #app {

  } */
</style>

