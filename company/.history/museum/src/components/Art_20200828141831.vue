<template>
  <div class="page">
    <div class="page-con">
      <div class="art-cen">
        <img src="./../assets/art_cen.png" alt="">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../static/img/art_1.jpg" alt="">
          </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    // var mySwiper = new Swiper('.swiper-container', {})
    var atlasimg = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      pagination:{
        el:'.swiper-pagination'
      },   
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: false, //是否有阴影
      },
    });
  },
};
</script>

<style scoped >
.page {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(./../assets/feiyi_bg.jpg);
  background-size: cover;
}
.page .page-con {
  position: absolute;
  left: 0;
  top: 50%;
  height: 100%;
  max-height: 12.1rem;
  overflow: scroll;
  width: 100%;
  transform: translateY(-50%);
}
.page-con .art-cen{
  position: relative;
  width: 5.76rem;
  height: 6.72rem;
  margin: 0 auto 0.7rem;
}
.art-cen img{
  position: relative;
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 3.48rem;
  background: pink;
}
.swiper-slide {
  width: 4.45rem;
  height: 3.48rem;
  background: plum;
}
.swiper-slide img{
  width: 100%;
}
</style>
