<template>
  <div class="page">
    <div class="page-con">
      <div class="subject-wrap">
        <div class="subject-list">
          <transition name="fade">
            <div class="subject-item">
              <img src="./../../static/p1_1.png" alt="" srcset="">
            </div>
          </transition>
         
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
    normal:'',
    suc:'',
    err:'',
    ok:'',
    disappointment:'',
    queue:'语文老师<br/>排队中'
  }

]
export default {
  data() {
    return {

    }
  },
  components: {

  }
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





  .fade-enter-active, .fade-leave-active {
  transition: opacity .28s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:1;
}
</style>
