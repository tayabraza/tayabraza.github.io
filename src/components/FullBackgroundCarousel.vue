<template>
  <div class="carousel-container">
    <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" :class="{active: index === 0}" v-for="(slide, index) in slides" :key="index" :style="{background: `url(${slide}) center/cover no-repeat`}">
          <a class="float-right credits" href="http://www.freepik.com">Designed by macrovector / Freepik</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slide1 from "@/assets/slide-1.jpg"
  import slide2 from "@/assets/slide-2.jpg"
  import slide3 from "@/assets/slide-3.jpg"

	export default {
    name: 'FullBackgroundCarousel',
    data(){
      return {
        slides: [slide1, slide2, slide3]
      }
    }
	}
</script>

<style lang="scss" scoped>
  .carousel-container{
    position: relative;
  }
  .carousel{
    position: absolute;
    top: 0px;
    right: -15px;
    bottom: 0px;
    left: -15px;
  }
  .carousel-item {
	  height:90vh;
  }
  .credits{
    position: relative;
    top: 90%;
  }
</style>