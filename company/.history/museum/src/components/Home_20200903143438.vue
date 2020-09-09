<template>
  <div class="page">
    <div class="video-btn" @click="openVideo"><img src="./../assets/video_btn1.png" alt=""></div>
    <div :class="{act}" class="page-bg"></div>
    <div class="page-content">
      <div class="tit " :class="{fadeInDown}">
        <img src="./../assets/tit_new.png" alt />  
        <img class="wuxi" @click="openVideo" src="./../assets/wuxi.png" alt="" srcset="">
      </div>      
      <div class="btn-wrap clearfix">
        <router-link :class="addb" class="link-btn "  to="/heritage"></router-link>
        <router-link :class="bounceIn2" class="link-btn" to="/person"></router-link>
        <router-link :class="bounceIn3" class="link-btn" to="/museum"></router-link>
        <router-link :class="bounceIn4" class="link-btn"  to="/art"></router-link>
        <router-link :class="bounceIn5" class="link-btn"  to="/crossover"></router-link>
        <router-link :class="bounceIn6" class="link-btn"  to="/cate"></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      act:'',
      fadeInDown:'',
      addb:'',
      bounceIn2:'',
      bounceIn3:'',
      bounceIn4:'',
      bounceIn5:'',
      bounceIn6:'',
    }
  },
  mounted() {
    setTimeout(() => {
      this.act = 'act'
    }, 580);
    setTimeout(() => {
      this.fadeInDown = 'fadeInDown'
    }, 1500);
    setTimeout(() => {
      this.addb = 'bounceIn'
    }, 2500);
     setTimeout(() => {
      this.bounceIn2 = 'bounceIn'
    }, 3000);
     setTimeout(() => {
      this.bounceIn3 = 'bounceIn'
    }, 3500);
     setTimeout(() => {
      this.bounceIn4 = 'bounceIn'
    }, 4000);
     setTimeout(() => {
      this.bounceIn5 = 'bounceIn'
    }, 4500);
    setTimeout(() => {
      this.bounceIn6 = 'bounceIn'
    }, 5000);
  },
  methods: {
    goRules() {
      this.$router.push("/rules");
    },
    openVideo(){
      window.location.href = 'https://adproject.thepaper.cn/adproject/2020/video/wuxi.mp4'
    }
    // showBtn(target,delay){
    //   setTimeout(() => {
    //     target = 'bounceIn'
    //   }, delay);
    // }
  },
};
</script>

<style scoped >
.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background-image: url(./../assets/kv_bg.jpg);
  background-size: cover;
  background-position: center bottom; */
}
.video-btn{
  position: absolute;
  top: 1rem;
  right: 0.18rem;
  width: 0.8rem;
  z-index: 888;
  animation: sc infinite 2.8s linear;
}
.video-btn img{
  width: 100%;
}
.page .page-bg{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(./../assets/kv_bg.jpg);
  background-size: cover;
  background-position: center bottom;
  transform: scale3d(2.8,2.8,1.8);
  transform-origin: center bottom;
}
.page .page-bg.act{
   transform: scale3d(1,1,1);
   transition: all 2s;
}
.page-content {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-61.8%);
  width: 100%;
  height: 6.58rem;
  z-index: 111;
}
.page-content .tit {
  position: absolute;
  left: 1.3rem;
  top: 0;
  width: 4.9rem;
  display: none;
}
.tit img {
  position: relative;
  width: 100%;
}
.tit .wuxi{
  position: absolute;
  right: 0.4rem;
  top:-0.3rem;
  width: 0.56rem;
  height: 0.56rem;
  animation: sc infinite 1.8s linear;
}
@keyframes sc{
  0%{
    transform: scale3d(1,1,1);
  }
  50%{
    transform: scale3d(1.28,1.28,1);
  }
  100%{
    transform: scale3d(1,1,1);
  }
}
.btn-wrap{
  position: absolute;
  bottom: 0;
  left: 0.9rem;
  width: 6.2rem;
}
.btn-wrap .link-btn{
  position: relative;
  width: 1.58rem;
  height: 1.58rem;
  float: left;
  margin-right:0.48rem;
  margin-top: 0.48rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  visibility: hidden;
}
.btn-wrap .link-btn:nth-of-type(1){
  background-image: url(./../assets/feiyi_btn.png);
}
.btn-wrap .link-btn:nth-of-type(2){
  background-image: url(./../assets/namething_btn.png);
}
.btn-wrap .link-btn:nth-of-type(3){
  background-image: url(./../assets/num_lib_btn.png);
}
.btn-wrap .link-btn:nth-of-type(4){
  background-image: url(./../assets/art_btn.png);
}
.btn-wrap .link-btn:nth-of-type(5){
  background-image: url(./../assets/crossover_btn.png);
}
.btn-wrap .link-btn:nth-of-type(6){
  background-image: url(./../assets/cate_btn.png);
}
@-webkit-keyframes bounceIn {
	0%,
	100%,
	20%,
	40%,
	60%,
	80% {
		-webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(.3, .3, .3);
		transform: scale3d(.3, .3, .3);
	}
	20% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1);
		transform: scale3d(1.1, 1.1, 1.1);
	}
	40% {
		-webkit-transform: scale3d(.9, .9, .9);
		transform: scale3d(.9, .9, .9);
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}
	80% {
		-webkit-transform: scale3d(.97, .97, .97);
		transform: scale3d(.97, .97, .97);
	}
	100% {
		opacity: 1;
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}

@keyframes bounceIn {
	0%,
	100%,
	20%,
	40%,
	60%,
	80% {
		-webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(.3, .3, .3);
		-ms-transform: scale3d(.3, .3, .3);
		transform: scale3d(.3, .3, .3);
	}
	20% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1);
		-ms-transform: scale3d(1.1, 1.1, 1.1);
		transform: scale3d(1.1, 1.1, 1.1);
	}
	40% {
		-webkit-transform: scale3d(.9, .9, .9);
		-ms-transform: scale3d(.9, .9, .9);
		transform: scale3d(.9, .9, .9);
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		-ms-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}
	80% {
		-webkit-transform: scale3d(.97, .97, .97);
		-ms-transform: scale3d(.97, .97, .97);
		transform: scale3d(.97, .97, .97);
	}
	100% {
		opacity: 1;
		-webkit-transform: scale3d(1, 1, 1);
		-ms-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}

.btn-wrap .bounceIn {
	-webkit-animation-name: bounceIn;
	animation-name: bounceIn;
	-webkit-animation-duration: .75s;
  animation-duration: .75s;
    -webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  visibility: visible;
}
@-webkit-keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0)
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}

@keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		-ms-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		-ms-transform: none;
		transform: none;
	}
}

.page-content .tit.fadeInDown {
	-webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: block;
}



</style>

