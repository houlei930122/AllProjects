<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"><img src="./../assets/tit.png" alt="" srcset=""></div>
      <div class="person">
        <img :src="personUrl" alt="">
      </div>


    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
var personArr = ['person1_1.png','person1_2.png','person1_3.png']
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
      this.personUrl = './static/'+personArr[personIndex]
    }, 100);
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
  }
  .page-con{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 3.54rem;
    width: 100%;
    min-height: 17.8rem;
    background-image: url(./../assets/kv_bg.png);
    background-size: cover;
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
    bottom: 3.36rem;
    width: 5.48rem;
    height: 9.77rem;
  }
  .page-con .person img{
    position: relative;
    width: 100%;
  }



</style>
