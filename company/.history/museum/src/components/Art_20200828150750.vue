<template>
  <div class="page">
    <div class="page-con">
      <div class="art-cen">
        <img src="./../assets/art_cen.png" alt="">
      </div>
      <div class="swiper-container myswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../static/img/art_1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_4.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_5.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_6.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_7.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_8.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_9.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_10.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_11.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_12.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/art_13.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="prev-btn" @click="pre"></div>
        <div class="next-btn" @click="next"></div>
      </div>
      <router-link class="return" to="/"></router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      swiper:null
    };
  },
  components: {},
  mounted() {
    // var mySwiper = new Swiper('.swiper-container', {})
    this.swiper = new Swiper(".swiper-container", {
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
  methods: {
    next(){
      this.swiper.slideNext()
    },
    pre(){
      this.swiper.slidePrev()
    },
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
  overflow: visible;
}
.swiper-slide {
  width: 4.45rem;
  height: 3.48rem;
}
.swiper-slide img{
  width: 100%;
}

.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -0.36rem;
    left: 0;
    width: 100%;
}
.prev-btn{
  position: absolute;
  left: 0.2rem;
  top: 50%;
  width: 0.43rem;
  height: 0.43rem;
  transform: translateY(-50%);
  background-image: url(./../assets/prev_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 5181;
}
.next-btn{
  position: absolute;
  right: 0.2rem;
  top: 50%;
  width: 0.43rem;
  height: 0.43rem;
  transform: translateY(-50%);
  background-image: url(./../assets/next_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 5181;
}
</style>
