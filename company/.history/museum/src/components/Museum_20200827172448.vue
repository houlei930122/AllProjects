<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"></div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
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
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
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
.page .page-con{
  position: absolute;
  left: 0;
  top: 50%;
  height: 100%;
  max-height: 12.1rem;
  width: 100%;
  transform: translateY(-50%);
}
.page-con .tit{
  position: absolute;
  top: 0;
  left: 50%;
  width: 3.17rem;
  height: 0.97rem;
  margin-left: -1.585rem;
  background-image: url(./../assets/museum_tit.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}


.swiper-container {
  width: 200px;
  height: 300px;
  background: pink;
}
.swiper-slide {
  width: 150px;
  height: 200px;
  background: plum;
}
</style>
