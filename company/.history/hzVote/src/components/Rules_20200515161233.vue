<template>
  <div class="rules">
    <div class="introduce">
      <img src="./../assets/introduce.png" alt="">
    </div>
    <div class="vote-wrap">
        <div class="item">
          <div class="item-tit">累计投票</div>
          <div class="item-num">{{voteNum}}</div>
        </div>
        <div class="item">
          <div class="item-tit">访问次数</div>
          <div class="item-num">{{visits}}</div>
        </div>
    </div>
    <div class="rules-msg">
      <img src="./../assets/rules.png" alt="">
    </div>
    <div class="btnbg">
      <div class="btn-item" @click="goVote"></div>
      <div class="btn-item" @click="showRanking"></div>
    </div>
    <!-- 排名 -->
    <div class="ranking-wrap" v-if="lookreanking">
      <div class="ranking-con">
        <div class="ranking-cen">
          <div class="ranking-tit">美宿排名榜单实时榜单</div>
          <div class="ranking-list">
            <div class="ranking-item">
              <div class="item-name">宿里·莫干山FUN轻奢度假酒店</div>
              <div class="item-vote">88888票</div>
            </div>
             <div class="ranking-item">
              <div class="item-name">宿里·莫干山FUN轻奢度假酒店</div>
              <div class="item-vote">88888票</div>
            </div>
          </div>
           <div class="ranking-tit">民宿之星排名榜单实时榜单</div>
          <div class="ranking-list">
            <div class="ranking-item">
              <div class="item-name">宿里·莫干山FUN轻奢度假酒店</div>
              <div class="item-vote">88888票</div>
            </div>
           
           
           
          </div>
        </div>
      </div>
      <div class="close-ranking" @click="close"></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
  export default {
    mounted () {
      console.log(111)
      Axios.get('../../static/data.json').then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log('error',err.message)
      })
    },
    data() {
      return {
        voteNum: '88888',
        visits:'8888',
        lookreanking:false
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
        console.log('返回')
      },
      goVote(){
        this.$router.push('/votelist')
      },
      close(){
        this.lookreanking = false
      },
      showRanking(){
        this.lookreanking = true
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
     padding-bottom:1.48rem ;
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
    display: flex;
    padding-top:0.14rem ;
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
    line-height: 0.4rem;
  }
  .rules .rules-msg{
    position: relative;
    width: 6.32rem;
    margin: 0.32rem auto 0;
  }
  .rules-msg img{
    width: 100%;
  }
  .btnbg{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 1.48rem;
    background:url('../assets/btn_bg.png')   no-repeat 0 0/100% 100% ;
    display: flex;
  }
  .btnbg .btn-item{
    flex: 1;
  }
  .ranking-wrap{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    z-index: 99999;
  }
  .ranking-wrap .ranking-con{
    position: absolute;
    left: 0.38rem;
    top: 1.18rem;
    right: 0.38rem;
    bottom: 1.76rem;
    background: #f4f4f4;
    overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
    padding: 0.48rem 0.68rem ;
  }
  .ranking-con .ranking-cen{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .ranking-cen .ranking-tit{
    position: relative;
    width: 100%;
    font-size: 0.38rem;
    color:#338980 ;
    font-weight: bold;
    margin-bottom: 0.46rem;
  }
  .ranking-cen .ranking-list{
    position: relative;
    width: 100%;
    padding-bottom: 0.58rem;
    overflow: hidden;
  }
  .ranking-list .ranking-item{
    position: relative;
    width: 100%;
    margin-bottom: 0.4rem;
    overflow: hidden;
  }
  .ranking-item .item-name{
    font-size: 0.24rem;
    color: #000;
    float: left;
  }
  .ranking-item .item-vote{
    font-size: 0.24rem;
    color: #ca3301;
    float: right;
  }
  .ranking-wrap .close-ranking{
    position: absolute;
    left: 50%;
    bottom: 1.76rem;
    width: 0.53rem;
    height: 0.53rem;
    margin-bottom: -1.04rem;
    margin-left: -0.265rem;
    background:url('../assets/close.png')   no-repeat 0 0/100% 100% ;
  }
</style>