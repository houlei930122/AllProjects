<template>
  <div class="page">
    <div class="page-con">
      <div class="subject-wrap">
        <div class="subject-list">
          
            <div class="subject-item" v-for="item in subArr" :key="item.suc">
              <transition name="fadeimg">
               
              <img v-if="item.state === 1" :src="item['normal']" alt="" srcset="">
                 
                <!-- <img src="./../../static/p1_1.png" alt="" srcset=""> -->

                <!-- <div class="subject-word">数学老师<br/>排队中</div> -->
               </transition>
            </div>
         
         
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>
          <div class="subject-item"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// state -1空白，0 排队中，1 正常展示，2 答对，3全对，-2打错，-3全错已下线  
const subjectArr = [
  {
    state:1,
    normal:'./../../static/p1_1.png',
    suc:'./../../static/p1_2.png',
    err:'./../../static/p1_4.png',
    good:'./../../static/p1_3.png',
    loser:'./../../static/p1_5.png',
    queue:'语文老师<br/>排队中'
  },{
    state:0,
    normal:'./../../static/p2_1.png',
    suc:'./../../static/p2_2.png',
    err:'./../../static/p2_4.png',
    good:'./../../static/p2_3.png',
    loser:'./../../static/p2_5.png',
    queue:'数学老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p3_1.png',
    suc:'./../../static/p3_2.png',
    err:'./../../static/p3_4.png',
    good:'./../../static/p3_3.png',
    loser:'./../../static/p3_5.png',
    queue:'英语老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p4_1.png',
    suc:'./../../static/p4_2.png',
    err:'./../../static/p4_4.png',
    good:'./../../static/p4_3.png',
    loser:'./../../static/p4_5.png',
    queue:'物理老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p5_1.png',
    suc:'./../../static/p5_2.png',
    err:'./../../static/p5_4.png',
    good:'./../../static/p5_3.png',
    loser:'./../../static/p5_5.png',
    queue:'化学老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p6_1.png',
    suc:'./../../static/p6_2.png',
    err:'./../../static/p6_4.png',
    good:'./../../static/p6_3.png',
    loser:'./../../static/p6_5.png',
    queue:'历史老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p7_1.png',
    suc:'./../../static/p7_2.png',
    err:'./../../static/p7_4.png',
    good:'./../../static/p7_3.png',
    loser:'./../../static/p7_5.png',
    queue:'地里老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p8_1.png',
    suc:'./../../static/p8_2.png',
    err:'./../../static/p8_4.png',
    good:'./../../static/p8_3.png',
    loser:'./../../static/p8_5.png',
    queue:'生物老师<br/>排队中'
  },{
    state:-1,
    normal:'./../../static/p9_1.png',
    suc:'./../../static/p9_2.png',
    err:'./../../static/p9_4.png',
    good:'./../../static/p9_3.png',
    loser:'./../../static/p9_5.png',
    queue:'音乐老师<br/>排队中'
  }
]
export default {
  data() {
    return {
      subArr:subjectArr
    }
  },
  mounted() {
    console.log(this.subArr)
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
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 1.62rem;
    padding-bottom: 1.56rem;
  }
  .page .page-con{
    position: relative;   
    width: 100%;
    padding: 0.52rem 0;
    overflow: hidden;
  }
  .page-con .subject-wrap{
    position: relative;
    width: 9.4rem;
    height: 9.4rem;
    background: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    padding-top:0.1rem ;
    padding-left: 0.1rem;
  }
  .subject-wrap .subject-list{
    position: relative;
    overflow: hidden;
    width: 108%;
  }
  .subject-list .subject-item{
    position: relative;
    width: 3rem;
    height: 3rem;
    background: rgba(40, 58, 78, 1);
    float: left;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .subject-list .subject-item img{
    position: relative;
    width: 100%;
  }

  .subject-word{
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translate(0 ,-50%);
    line-height: 0.6rem;
    font-size: 0.44rem;
    color: #fff;
  }




  .fadeimg-enter-active, .fadeimg-leave-active {
  transition: opacity .58s;
}
.fadeimg-enter, .fadeimg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:0;
}
</style>
