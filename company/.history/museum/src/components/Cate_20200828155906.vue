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
            <div class="swiper-slide" @click="showimg('2')">
              <img src="./../assets/mum_s2.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('3')">
              <img src="./../assets/mum_s3.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('4')">
              <img src="./../assets/mum_s4.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('5')">
              <img src="./../assets/mum_s5.jpg" alt="">
            </div>
            <div class="swiper-slide" @click="showimg('6')">
              <img src="./../assets/mum_s6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="prev-btn" @click="pre"></div>
        <div class="next-btn" @click="next"></div>
      </div>
      <div class="hid-tit"></div>
      <div class="boutique-wrap">
        <div class="boutique-btn"  @click="showimg('7')"></div>
        <div class="boutique-btn"  @click="showimg('8')"></div>
        <div class="boutique-btn"  @click="showimg('9')"></div>
        <div class="boutique-btn"  @click="showimg('10')"></div>
        <div class="boutique-btn"  @click="showimg('11')"></div>
        <div class="boutique-btn"  @click="showimg('12')"></div>
        <div class="boutique-btn"  @click="showimg('13')"></div>
        <div class="boutique-btn"  @click="showimg('14')"></div>
        <div class="boutique-btn"  @click="showimg('15')"></div>
        <div class="boutique-btn"  @click="showimg('16')"></div>
      </div>
      <div class="hint"></div>
      <router-link class="return" to="/"></router-link>
    </div>
    <div class="show-effect" v-if="isShow" >
      <div class="img-wrap">
        <img :src="showUrl" alt="">
        <div class="gourl" @click="gourl"></div>
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
      goUrl:''
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
          this.goUrl = this.imgArr[i]['url']
          this.showUrl = './static/img/'+this.imgArr[i]['name']
          this.isShow = true
          return
        }
      }
     
    },
    gourl(){
      window.location.href = this.goUrl
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
.boutique-wrap .boutique-btn{
  position: absolute;
  width:1.22rem;
  height: 1.66rem;
  z-index: 111;
}
.boutique-wrap .boutique-btn:nth-of-type(1){
  top: 0;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(2){
  top: 0;
  left: 1.35rem;
}
.boutique-wrap .boutique-btn:nth-of-type(3){
  top: 0;
  left: 2.66rem;
}
.boutique-wrap .boutique-btn:nth-of-type(4){
  top: 0;
  left: 4rem;
}
.boutique-wrap .boutique-btn:nth-of-type(5){
  top: 0;
  left: 5.32rem;
}

.boutique-wrap .boutique-btn:nth-of-type(6){
  top: 1.74rem;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(7){
  top: 1.74rem;
  left: 1.35rem;
}
.boutique-wrap .boutique-btn:nth-of-type(8){
  top: 1.74rem;
  left: 2.66rem;
}
.boutique-wrap .boutique-btn:nth-of-type(9){
  top: 1.74rem;
  left: 4rem;
}
.boutique-wrap .boutique-btn:nth-of-type(10){
  top: 1.74rem;
  left: 5.32rem;
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
.gourl{
  position: absolute;
  left: 50%;
  bottom: 0.12rem;
  width:1.8rem;
  height: 0.5rem;
  margin-left: -0.9rem;
  z-index: 18;
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
