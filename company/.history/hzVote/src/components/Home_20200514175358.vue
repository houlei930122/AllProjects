<template>
  <div class="home">     
    <img class="logo" src="./../assets/logo1.png" alt="" srcset="">
    <div class="tit"></div>
    <div class="arrow"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      goRules() {
        this.$router.push('/rules')
        console.log('123213')
      }
    },
  }
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100%;
    background-image:url('./../assets/kv_bg.jpg') ;
    background-size:cover;
    background-repeat:no-repeat ;
  }
  .home .logo{
    position: absolute;
    top: 0.96rem;
    right: 0.8rem;
    width: 2rem;
  }
  .home .tit{
    position: absolute;
    top: 0.92rem;
    left: 0.8rem;
    width: 2.28rem;
    height: 7.31rem;
    background-image:url('../assets/tit.png') ;
    background-size:100% 100%;
    background-repeat: no-repeat;
  }
  .home .arrow{
    position: absolute;
    left: 50%;
    bottom: 0.5rem;
    width: 0.75rem;
    height: 0.44rem;
    background:url('../assets/arrow.png')   no-repeat 0 0/100% 100% ;
  }
</style>