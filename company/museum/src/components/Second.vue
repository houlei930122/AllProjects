<template>
  <div class="page">
      <h1>这里是第二页</h1>
      <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css';
export default {
  data() {
    return {

    }
  },
  components: {

  },
  mounted() {
    // var mySwiper = new Swiper('.swiper-container', {})
    var atlasimg = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop:true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,  //是否有阴影
      },
    });
  },
}
</script>

<style scoped >
  /* @import "../../node_modules/swiper/swiper.scss" */


.swiper-container {
  width: 200px;
  height: 300px;
  background: pink;
}
.swiper-slide{
  width: 150px;
  height: 200px;
  background: plum;
}

</style>
