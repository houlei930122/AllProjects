<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"></div>
      <div class="subtit1"></div>
      <div class="swiper-wrap clearfix">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="showimg('1')">
              <img src="./../assets/mum_s1.jpg" alt="">
            </div>
            <div class="swiper-slide" >
              <img src="./../assets/mum_s2.jpg" alt="">
            </div>
            <div class="swiper-slide" >
              <img src="./../assets/mum_s3.jpg" alt="">
            </div>
            <div class="swiper-slide" >
              <img src="./../assets/mum_s4.jpg" alt="">
            </div>
            <div class="swiper-slide" >
              <img src="./../assets/mum_s5.jpg" alt="">
            </div>
            <div class="swiper-slide" >
              <img src="./../assets/mum_s6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="prev-btn" @click="pre"></div>
        <div class="next-btn" @click="next"></div>
      </div>
      <div class="hid-tit"></div>
      <div class="boutique-wrap">

      </div>
      <div class="hint"></div>
      <router-link class="return" to="/"></router-link>
    </div>
    <div class="show-effect" v-if="isShow" @click="hideShow">
      <img :src="showUrl" alt="">
      <div class="close-img" @click="hideShow"></div>
    </div>
  </div>
 
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      swiper:null,
      isShow:false,
      showUrl:'./../assets/1.jpg',
      showIndex:''
    };
  },
  components: {},
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
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
    showimg(id){
      console.log(id)
      this.isShow = true
    },
    hideShow(){
      this.isShow = false
    }
  }
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
  overflow: scroll;
  width: 100%;
  transform: translateY(-50%);
}
.page-con .tit{
  position: relative;
  width: 3.17rem;
  height: 0.97rem;
  margin: 0 auto;
  background-image: url(./../assets/museum_tit.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
}
.page-con .subtit1{
  position: relative;
  width: 1.31rem;
  height: 0.25rem;
  margin: 0.38rem auto;
  background-image: url(./../assets/feature.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
}
.swiper-wrap{
  position: relative;
  width: 100%;
}
.swiper-container {
  position: relative;
  width: 5.78rem;
  height: 4.08rem;
}
.swiper-slide {
  position: relative;
  width: 2.92rem;
  height: 4.08rem;
}
.swiper-slide img{
  position: relative;
  width: 100%;
}
.swiper-wrap .prev-btn{
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
.swiper-wrap .next-btn{
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
.hid-tit{
  position: relative;
  width: 1.31rem;
  height: 0.25rem;
  background-image: url(./../assets/hid_tit.png);
  background-size: 100% 100%;
  margin: 0.78rem auto 0.2rem;
}
.boutique-wrap{
  position: relative;
  width: 6.57rem;
  height: 3.4rem;
  background-image:url(./../assets/boutique.png) ;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
}
.hint{
  position: relative;
  width: 1.69rem;
  height: 0.28rem;
  background-image:url(./../assets/hint.png) ;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0.2rem auto 0;
}
.return{
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0.38rem;
  height: 0.38rem;
  transform: translate(-50%,-50%);
  background-image: url(./../assets/close_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.show-effect{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.58);
  z-index: 9999;
}
.show-effect img{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6rem;
  max-height: 100%;
  transform: translate(-50%,-51.8%);
}
.close-img{
  position: absolute;
  left: 50%;
  bottom: 0.28rem;
  width: 0.38rem;
  height: 0.38rem;
  transform: translate(-50%,-50%);
  background-image: url(./../assets/close_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
