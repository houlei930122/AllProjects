<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
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
          <img src="./../assets/feiyi_8.png" style="width:5.77rem" alt="">
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
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <router-link class="return" to="/"></router-link>
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
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
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
  background-image: url(./../assets/close_icon.png);
}
</style>
