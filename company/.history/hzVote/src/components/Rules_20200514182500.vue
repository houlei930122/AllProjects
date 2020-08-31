<template>
  <div class="rules">
    <div class="introduce">
      <img src="./../assets/introduce.png" alt="">
    </div>
    <div class="vote-wrap">

    </div>
    <div class="rules-msg">
      <img src="./../assets/rules.png" alt="">
    </div>
    <div class="btnbg">
      <div class="govote"></div>
      <div class="get-ranking"></div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
        console.log('返回')
      },
      goVote(){
        this.$router.push('/votelist')
      }
    },
  }
</script>

<style scoped>
  .rules{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
     background:url('../assets/bg.jpg')   no-repeat 0 0/100% 100% ;
     padding-top:0.56rem ;
  }
  .rules .introduce{
    position: relative;
    width: 6.35rem;
    margin: 0 auto 0.4rem;
  }
  .introduce img{
    width: 100%;
  }
  .vote-wrap{
    position: relative;
    width: 6.36rem;
    height: 0.88rem;
    background: #d23301;
    margin: 0 auto;
    border-radius: 0.1rem;
  }
  .rules .rules-msg{
    position: relative;
    width: 6.32rem;
    margin: 0.32rem auto 0;
  }
  .rules-msg img{
    width: 100%;
  }
</style>