<template>
  <div class="imgSize">
    <img :src="selectedImg.src" alt="No Image" @mouseover="selectPreImg()" 
    @focus="selectPreImg()"/>
  </div>
</template>

<script>
function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index -1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

export default {
  name: 'PreImage',
  props: {
    imageList: {
      type: Array,
      required: true
    }
  },
  data() {
    return { selectedImgIndex: 0 };
  },
  computed: {
    selectedImg() {
      return this.imageList[this.selectedImgIndex];
    }
  },
  methods: {
    selectPreImg() { 
    this.selectedImgIndex = getPreviousValidIndex(
      this.selectedImgIndex,
      this.imageList.length
    );}
  }
}
</script>