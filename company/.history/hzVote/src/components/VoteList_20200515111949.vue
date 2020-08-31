<template>
  <div class="vote-wrap">
    <div class="vote-con">

      <div class="vote-sort">
        <div class="vote-tit">十大创意设计美宿</div>
        <div class="vote-list">
          <div class="vote-item">
            <div class="item-img">
              <img src="./../assets/m1.png" alt="">
            </div>
            <div class="item-msg">
              <div class="item-no">01</div>
              <div class="item-name">宿里·莫干山FUN轻奢度假酒店</div>
            </div>
            <div class="godetails">查看详情>>></div>
            <div class="item-num">
              <div class="vote-num">888 票</div>
              <div class="vote-btn">
                <img src="./../assets/tick.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="vote-btn"></div>
      </div>


    </div>
      <button @click="goDetails(1)">详情页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goDetails(id) {
        console.log(id)
        this.$router.push({
          path:'/details',
          query:{id:id}
        })
      }
    },
  }
</script>

<style scoped>
  .vote-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    padding: 0 0.44rem ;
    background:url('../assets/bg.jpg')   no-repeat 0 0/100% 100% ;
  }
  .vote-con{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    overflow-x:hidden ;
    overflow-y:scroll ;
    padding-top: 0.86rem;
    -webkit-overflow-scrolling: touch;
  }
  .vote-con .vote-sort{
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 0.46rem;
    background: #fff;
  }
  .vote-sort .vote-tit{
    position: relative;
    width: ;
    background: #ca3301;
    text-align: center;
    width: 5.8rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    color: #fff;
    margin: 0 auto ;
  }
  .vote-sort .vote-list{
    position: relative;
    width: 100%;
    padding-top: 0.36rem;
    padding-left: 0.46rem;
    overflow: hidden;
  }
  .vote-list .vote-item{
    position: relative;
    width: 2.66rem;
    overflow: hidden;
  }
  .vote-item .item-img{
    position: relative;
    width: 100%;
    padding-bottom: 0.1rem;
  }
  .item-img img{
    position: relative;
    width: 100%;
  }
  .vote-item .item-msg{
    position: relative;
    width: 100%;
    height: 1.22rem;
    padding-left: 0.68rem;
  }
  .item-msg .item-no{
    position:absolute;
    left: 0;
    top: 0;
    width: 0.68rem;
    color: #221815;
    font-size: 0.4rem;
    font-weight: bold;
  }
  .item-msg .item-name{
    
  }
</style>