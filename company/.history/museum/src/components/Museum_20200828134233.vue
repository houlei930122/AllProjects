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
  {id:1,name:'mum_m1.jpg',url:'http://118.31.54.97/www/index.html'},
  {id:2,name:'mum_m2.jpg',url:'http://www.wxmuseum.com/Exhibition/TemporaryDetails/f435e276-d34c-4231-9c6a-891ca50ee380'},
  {id:3,name:'mum_m3.jpg',url:'http://www.wxmuseum.com/Exhibition/TemporaryDetails/4984aaab-290f-4525-8118-3a3ff414cf67'},
  {id:4,name:'mum_m4.jpg',url:'http://www.wxmuseum.com/Exhibition/TemporaryDetails/d157d33a-0791-4898-b0aa-bbc960ecd86e'},
  {id:5,name:'mum_m5.jpg',url:'http://www.wxmuseum.com/Exhibition/TemporaryDetails/5246b43f-2fb1-4067-847e-4f4dc7c4c6f4'},
  {id:6,name:'mum_m6.jpg',url:'http://www.wxmuseum.com/Exhibition/TemporaryDetails/03734aff-1b99-4ff3-9925-f00018613a6e'},
  {id:7,name:'mum_m7.jpg',url:'http://www.wxmuseum.com/News/Details/3cd18502-3ab1-4473-a4f9-c7bd961321da'},
  {id:8,name:'mum_m8.jpg',url:'http://www.wxmuseum.com/News/Details/8199fdab-f60a-4e16-8b2a-f1bfa14fc8ae'},
  {id:9,name:'mum_m9.jpg',url:'http://www.wxmuseum.com/Collection/Details/71dbb65e-0bef-4ba8-a974-0d5a1500995c'},
  {id:10,name:'mum_m10.jpg',url:'http://www.wxmuseum.com/News/Details/2256e45e-dacb-4bfd-be5e-83cf28f8d84b'},
  {id:11,name:'mum_m11.jpg',url:'http://www.wxmuseum.com/News/Details/9822f3f7-09b3-4f36-ba12-b57e53bb07b2'},
  {id:12,name:'mum_m12.jpg',url:'http://www.wxmuseum.com/News/Details/4938c866-4666-4d2a-aac4-72613ef47a21'},
  {id:13,name:'mum_m13.jpg',url:'http://www.wxmuseum.com/News/Details/a77f8975-ec06-4367-ad8a-0818b08c535b'},
  {id:14,name:'mum_m14.jpg',url:'http://www.wxmuseum.com/News/Details/442aa96d-ed4e-4d97-9fa7-1dd2fbed8d68'},
  {id:15,name:'mum_m15.jpg',url:'http://www.wxmuseum.com/News/Details/9ca89480-f1b5-40bc-bc2c-8f319e14f3dd'},
  {id:16,name:'mum_m16.jpg',url:'http://www.wxmuseum.com/News/Details/1964b53d-2ab9-4aab-ad9a-29fc5213810d'},
]
export default {
  data() {
    return {
      imgArr:imgArr,
      swiper:null,
      isShow:false,
      showUrl:'./static/img/1.jpg',
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
  background-color: rgba(0, 0, 0, 0.58);
}
.boutique-wrap .boutique-btn:nth-of-type(1){
  top: 0;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(2){
  top: 0;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(3){
  top: 0;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(4){
  top: 0;
  left: 0;
}
.boutique-wrap .boutique-btn:nth-of-type(5){
  top: 0;
  left: 0;
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
