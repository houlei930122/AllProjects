<template>
  <div class="rules">
    <div class="introduce">
      <img src="./../assets/introduce.png" alt="">
    </div>
    <div class="vote-wrap">
        <div class="item">
          <div class="item-tit">累计投票</div>
          <div class="item-num">8888888888</div>
        </div>
        <div class="item">
          <div class="item-tit">访问次数</div>
          <div class="item-num">8888888888888888</div>
        </div>
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
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
  }
  .vote-wrap::after{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    height: 0.56rem;
    width: 0.02rem;
    background:#fff ;
    margin-top: -0.28rem;
    margin-left: -0.01rem;
    display: flex;
  }
  .vote-wrap .item{
    flex: 1;
  }
  .item .item-tit{
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 0.24rem;
  }
  .item .item-num{
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 0.24rem;
    font-weight: bold;
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