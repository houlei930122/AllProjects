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

      <!-- 人物 -->
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
      <!-- <button @click="goDetails(1)">详情页</button> -->
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
      overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
  }
  .vote-con{
    position: relative;
    width: 100%;
    height: 100%;
  
    padding-top: 0.86rem;
    
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
    float: left;
    width: 2.66rem;
    overflow: hidden;
    padding-bottom: 0.46rem;
    margin-right: 0.4rem;
    /* padding-top: 0.42rem; */
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
    padding-left: 0.6rem;
  }
  .item-msg .item-no{
    position:absolute;
    left: 0;
    top: 0;
    /* width: 0.68rem; */
    color: #170b07;
    font-size: 0.5rem;
    font-weight: bold;
  }
  .item-msg .item-name{
    position: relative;
    width: 100%;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #1c7b73;
    font-weight: bold;
    padding-left: 0.1rem;
  }
  .item-msg .item-name::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0.06rem;
    bottom: 0.06rem;
    width: 0.02rem;
    background: #170b07;
  }
  .vote-item .godetails{
    position: relative;
    width: 100%;
    font-size: 0.24rem;
    color: #170b07;
    margin-bottom: 0.24rem;
  }
  .vote-item .item-num{
    position: relative;
    width: 100%;
    height: 0.46rem;
  }
  .item-num .vote-num{
    position: relative;
    float: left;
    width: 2rem;
    height: 0.46rem;
    line-height: 0.46rem;
    background: #d50012;
    text-align: center;
    color: #fff;
    font-size: 0.24rem;
  }
  .item-num .vote-btn{
    position: relative;
    float: right;
    width: 0.45rem;
    height: 0.45rem;
    background:url('../assets/border-con.png')   no-repeat 0 0/100% 100% ;
  }
  .vote-btn img{
    position: absolute;
    left: 0.03rem;
    top: 0.1rem;
    width: 0.37rem;
  }
  .vote-sort .vote-btn{
    position: relative;
    width: 100%;
    height: 1.2rem;
    background: rgba(0, 0, 0, 0.68);
  }
</style>