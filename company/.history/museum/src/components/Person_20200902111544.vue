<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./../assets/person_1.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/person_2.png" style="width:5.75rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/person_3.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/person_4.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/person_5.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/person_6.png" style="width:5.77rem" alt="">
        </div>
        
      </div>
    </div>
    <router-link class="return" to="/"></router-link>
    <div class="prev-btn" @click="pre"></div>
    <div class="next-btn" @click="next"></div>
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
    }
  }
};
</script>

<style scoped >
.page{
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(./../assets/feiyi_bg.jpg);
  background-size: cover;
}


.swiper-container {
  position: absolute;
  top: 0;
  bottom: 1.68rem;
  left: 0;
  width: 100%;
}
.swiper-slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  padding-top: 1.4rem;
  padding-bottom: 0.58rem;
}
.swiper-slide img{
  position: relative;
  display: inline-block;
}




.return{
  position: fixed;
  left: 50%;
  bottom: 0.98rem;
  width: 0.38rem;
  height: 0.38rem;
  transform: translate(-50%,-50%);
  background-image: url(./../assets/close_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.prev-btn{
   position: fixed;
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
   position: fixed;
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
