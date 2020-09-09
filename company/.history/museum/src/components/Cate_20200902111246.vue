<template>
  <div class="page">
    <div class="page-tit"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="img-wrap ">
            <img src="./../../static/img/cate_m1.jpg"  alt="">
          </div>  
           <div class="img-wrap ">
            <img src="./../../static/img/cate_m2.jpg" alt="">
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
      flipEffect: {
        slideShadows : true,
        limitRotation : true,
      },
      // loop: true,
      // autoplay: {
      //   delay: 8000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true,
      // },
      on: {
        slideChangeTransitionEnd: function(){
          that.swiperIndex = this.realIndex
          console.log(that.swiperIndex );
          // that.imgload();
        },
      },
      navigation: {
        nextEl: ".next-icon",
        prevEl: ".prev-icon",
      },
    });

    // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(clientHeight);
    // this.imgload();
  },
  methods: {
    // imgload(){
    //   this.heightNum = 0
    //   this.height = 0
    //   let imgSize = this.$refs['imgSize'+this.swiperIndex].offsetHeight;
    //   console.log(imgSize);
    //   clearInterval(this.timer)
    //   this.timer = setInterval(() => {
    //     this.heightNum+=4
    //     this.height = this.heightNum+'px'
    //     if(this.heightNum>imgSize){
    //       clearInterval(this.timer)
    //     }
    //   }, 10);
    // },
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
.page .page-tit{
  position: absolute;
  top:1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.23rem;
  height: 0.97rem;
  margin: 0 auto;
  background-image: url(./../assets/cate_tit.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
}

.swiper-container {
  position: absolute;
  top: 2.2rem;
  bottom: 1.68rem;
  left: 0;
  width: 100%;
}
.swiper-slide {
  position: relative;
  width: 6rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
}
.swiper-slide img{
  position: relative;
  width: 100%;
  display: inline-block;
}
.img-wrap{
  position: relative;
  width: 6rem;
  overflow: hidden;
  margin: 0 auto;
}



.return{
  position: fixed;
  left: 50%;
  bottom: 0.58rem;
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
