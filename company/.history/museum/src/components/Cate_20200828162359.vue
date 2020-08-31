<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"></div>
      <div class="subtit1"></div>
       <div class="swiper-wrap  clearfix">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="showimg('7')">
              <img src="./../assets/cate_s7.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('8')">
              <img src="./../assets/cate_s8.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('9')">
              <img src="./../assets/cate_s9.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('10')">
              <img src="./../assets/cate_s10.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('11')">
              <img src="./../assets/cate_s11.jpg" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>   
        <div class="prev-btn" @click="pre"></div>
        <div class="next-btn" @click="next"></div>
      </div>
      <div class="hid-tit"></div>
      <div class="swiper-wrap clearfix">
        <div class="swiper-container swiper1 ">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="showimg('1')">
              <img src="./../assets/cate_s1.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('2')">
              <img src="./../assets/cate_s2.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('3')">
              <img src="./../assets/cate_s3.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('4')">
              <img src="./../assets/cate_s4.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('5')">
              <img src="./../assets/cate_s5.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('6')">
              <img src="./../assets/cate_s6.jpg" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      
        <div class="prev-btn" @click="pre"></div>
        <div class="next-btn" @click="next"></div>
      </div>


      <router-link class="return" to="/"></router-link>
    </div>
    <div class="show-effect" v-if="isShow" >
      <div class="img-wrap">
        <img :src="showUrl" alt="">
      </div>
      <div class="show-bg" @click="hideShow"></div>
      <div class="close-img" @click="hideShow"></div>
    </div>
  </div>
 
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
const imgArr = [
 {id:1,name:'cate_m1.jpg'},
 {id:2,name:'cate_m2.jpg'},
 {id:3,name:'cate_m3.jpg'},
 {id:4,name:'cate_m4.jpg'},
 {id:5,name:'cate_m5.jpg'},
 {id:6,name:'cate_m6.jpg'},
 {id:7,name:'cate_m7.jpg'},
 {id:8,name:'cate_m8.jpg'},
 {id:9,name:'cate_m9.jpg'},
 {id:10,name:'cate_m10.jpg'},
 {id:11,name:'cate_m11.jpg'},
]
export default {
  data() {
    return {
      imgArr:imgArr,
      swiper:null,
      isShow:false,
      showUrl:'',
      showIndex:'',
    };
  },
  components: {},
  mounted() {
    console.log(this.imgArr)
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
    showimg(id){
      console.log(id)
      this.showIndex = id
      for(var i = 0;i<this.imgArr.length;i++){
        if(this.imgArr[i]['id'] == id){
          this.showUrl = './static/img/'+this.imgArr[i]['name']
          this.isShow = true
          return
        }
      }
     
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
  width: 2.23rem;
  height: 0.97rem;
  margin: 0 auto;
  background-image: url(./../assets/cate_tit.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
}
.page-con .subtit1{
  position: relative;
  width: 1.08rem;
  height: 0.35rem;
  margin: 0.92rem auto 0.22rem;
  background-image: url(./../assets/cate_tit1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
}
.swiper-wrap{
  position: relative;
  width: 100%;
}
.swiper2 {
  position: relative;
  width: 5.9rem;
  height: 2.2rem;
}
.swiper2 .swiper-slide {
  position: relative;
  width: 2.92rem;
  height: 2.2rem;
}
.swiper1 {
  position: relative;
  width: 5.9rem;
  height: 4.2rem;
}
.swiper1 .swiper-slide {
  position: relative;
  width: 2.82rem;
  height: 4.2rem;
}
.swiper-slide img{
  position: relative;
  width: 100%;
}
.page-con .hid-tit{
  position: relative;
  width: 1.43rem;
  height: 0.35rem;
  margin: 0.92rem auto 0.22rem;
  background-image: url(./../assets/cate_tit2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 58;
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
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -0.36rem;
    left: 0;
    width: 100%;
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
  z-index: 9999;
}
.show-effect .img-wrap{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6rem;
  max-height: 100%;
  transform: translate(-50%,-51.8%);
  z-index: 2222;
}
.img-wrap img{
  position: relative;
  width: 100%;
}

.show-bg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 22;
  background: rgba(0, 0, 0, 0.78);
  filter: blur(18px);
}
.close-img{
  position: absolute;
  left: 50%;
  bottom: 0.28rem;
  width: 0.38rem;
  height: 0.38rem;
  z-index: 5182;
  transform: translate(-50%,-50%);
  background-image: url(./../assets/close_icon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
