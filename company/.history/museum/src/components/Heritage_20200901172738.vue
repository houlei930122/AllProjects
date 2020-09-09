<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide">
           <div class="img-wrap " :style="{height:height}">
              <img src="./../assets/feiyi_8.png" style="width:5.77rem;height:11.29rem;" ref="imgSize0" alt="">
           </div>       
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_1.png" style="width:5.77rem;;height:9.19rem;" ref="imgSize1" alt="">
           </div>  
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_2.png" style="width:5.77rem;height:11.19rem;" ref="imgSize2" alt="">
           </div>  
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_3.png" style="width:5.77rem;height:10.46rem;" ref="imgSize3" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_4.png" style="width:5.77rem;height:11.01rem;" ref="imgSize4" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_5.png" style="width:5.77rem;height:10.99rem;" ref="imgSize5" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_6.png" style="width:5.77rem;height:10.01rem;" ref="imgSize6" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_7.png" style="width:5.77rem;height:9.91rem;" ref="imgSize7" alt="">
          </div>
        </div>
       
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_9.png" style="width:5.98rem;height:11.25rem;" ref="imgSize8" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_10.png" style="width:5.77rem;height:11.27rem;" ref="imgSize9" alt="">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-wrap " :style="{height:height}">
            <img src="./../assets/feiyi_11.png" style="width:5.77rem;height:11.1rem;" ref="imgSize10" alt="">
          </div>
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
      swiper:null,
      height:'0px',
      heightNum:0,
      timer:null,
      swiperIndex:0
    };
  },
  components: {},
  mounted() {
    const that = this
    // var mySwiper = new Swiper('.swiper-container', {})
    this.swiper = new Swiper(".swiper-container", {
      effect:'flip',
      loop: true,
      // autoplay: {
      //   delay: 8000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true,
      // },
      on: {
        slideChangeTransitionStart: function(){
          that.swiperIndex = this.realIndex
          console.log(that.swiperIndex );
          that.imgload();
        },
      },
      navigation: {
        nextEl: ".next-icon",
        prevEl: ".prev-icon",
      },
    });

    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(clientHeight);
    this.imgload();
  },
  methods: {
    imgload(){
      this.heightNum = 0
      this.height = 0
      let imgSize = this.$refs['imgSize'+this.swiperIndex].offsetHeight;
      console.log(imgSize);
       clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.heightNum+=4
        this.height = this.heightNum+'px'
        if(this.heightNum>imgSize){
          clearInterval(this.timer)
        }
      }, 10);
    },
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
