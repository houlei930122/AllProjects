<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide">
           <div class="img-wrap " style="width:10px">
              <img src="./../assets/feiyi_8.png" style="width:5.77rem" alt="">
           </div>       
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_1.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_2.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_3.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_4.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_5.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_6.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_7.png" style="width:5.77rem" alt="">
        </div>
       
        <div class="swiper-slide">
          <img src="./../assets/feiyi_9.png" style="width:5.98rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_10.png" style="width:5.77rem" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../assets/feiyi_11.png" style="width:5.77rem" alt="">
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
      loop: true,
      navigation: {
        nextEl: ".next-icon",
        prevEl: ".prev-icon",
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
.img-wrap{
  position: relative;
  width: 100%;
  overflow: hidden;
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
