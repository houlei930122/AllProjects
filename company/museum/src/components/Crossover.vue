<template>
  <div class="page">
    <div class="page-con">
      <div class="crossover-tit">
        <img src="./../assets/crossover_tit.png" alt="">
      </div>
      <div class="crossover-con">
        <img src="./../assets/crossover_cen.png" alt="">
      </div>
      <div class="crossover-subtit">
        <img src="./../assets/crossover_subtit.png" alt="">
      </div>
      <div class="swiper-container myswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_4.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_5.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_6.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_7.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_8.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_9.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../static/img/crossover_10.jpg" alt="">
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
  overflow: hidden;
}
.page .page-con {
  position: absolute;
  left: 0;
  top: 50%;
  height: 100%;
  max-height: 12.1rem;
  overflow-y: scroll;
  overflow-x:hidden ;
  width: 100%;
  transform: translateY(-50%);
}
.page-con .crossover-tit{
  position: relative;
  width: 3.16rem;
  height: 0.97rem;
  margin: 0 auto 0.34rem;
}
.crossover-tit img{
  position: relative;
  width: 100%;
}
.page-con .crossover-con{
  position: relative;
  width: 100%;
  margin: 0 auto 0.7rem;
}
.crossover-con img{
  position: relative;
  width: 100%;
}
.page-con .crossover-subtit{
  position: relative;
  width: 1.3rem;
  margin: 0.72rem auto 0.22rem;
}
.crossover-subtit img{
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
.return{
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0.38rem;
  height: 0.38rem;
  z-index: 88;
  transform: translate(-50%,-50%);
  background-image: url(./../assets/close_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
