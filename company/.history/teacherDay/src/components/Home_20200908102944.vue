<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"><img src="./../assets/tit.png" alt="" srcset=""></div>
      <div class="person">
        <img :src="personUrl" alt="">
      </div>
      <div class="word"><img src="./../assets/word.png" alt="" srcset=""></div>
      <div class="book"><img src="./../assets/book.png" alt="" srcset=""></div>
      <div class="start-btn"></div>
    </div>
    <div class="logo-wrap">
      <div class="logo"></div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
var personArr = ['person1_1.png','a1.png','person1_2.png']
export default {
  data() {
    return {
      personUrl:'./static/person1_1.png',
      personIndex:0
    }
  },
  mounted() {
    setInterval(() => {
      this.personIndex++
      if(this.personIndex>2){
        this.personIndex = 0
      }
      this.personUrl = './static/'+personArr[this.personIndex]
    }, 200);
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .page{
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(./../assets/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
    overflow: hidden;
  }
  .page-con{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 3.54rem;
    width: 100%;
    min-height: 17.8rem;
    background-image: url(./../assets/kv_bg.png);
    background-size: 11.25rem 21.35rem;
    background-position: left bottom;
  }
  .page-con .tit{
    position: absolute;
    left: 50%;
    bottom: 13.64rem;
    width: 7.58rem;
    margin-left: -3.79rem;
  }
  .page-con .tit img{
    position: relative;
    width: 100%;
  }
  .page-con .person{
    position: absolute;
    left: 0.88rem;
    bottom: 3.86rem;
    width: 5.48rem;
    height: 9.77rem;
  }
  .page-con .person img{
    position: relative;
    width: 100%;
  }
  .word{
    position: absolute;
    right: 1.9rem;
    bottom: 8.9rem;
    width: 3.52rem;
  }
.word img{
  position: relative;
  width: 100%;
}
.book{
    position: absolute;
    right: 1.26rem;
    bottom: 4.26rem;
    width: 5.38rem;
  }
.book img{
  position: relative;
  width: 100%;
}
.page-con .start-btn{
  position: absolute;
  left: 50%;
  bottom: 1.62rem;
  width: 2.33rem;
  height: 0.55rem;
  background-image: url(./../assets/start.png);
  background-size: 100% 100%;
  margin-left: -1.15rem;
}
.page-con .start-btn::after{
  content: '';
  position: absolute;
  left: -0.16rem;
  right: -0.16rem;
  bottom: -0.16rem;
  height: 0.06rem;
  background: #000000;
}
.logo-wrap{
  position: absolute;
  left: 0;
  bottom: 0;
  top: 17.4rem;
  /* max-height: 3.6rem; */
  min-height: 0.88rem;
  width: 100%;
}
.logo{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3.8rem;
  height: 0.88rem;
  background-image:url(./../assets/logo.png) ;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -1.9rem;
  margin-top: -0.44rem;
}
</style>
