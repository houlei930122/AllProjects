<template>
  <div class="page">
    <div class="forbid" v-show="forbid"></div>
    <div class="page-con">
      <div class="subject-wrap">
        <div class="subject-list">       
          <div class="subject-item" v-for="item in subArr" :key="item.suc">
            <transition name="fadeimg">            
              <img v-if="item.state === 1" :src="item['normal']" alt="" srcset="">
              <img v-else-if="item.state === 2" :src="item['suc']" alt="" srcset="">  
              <img v-else-if="item.state === 3" :src="item['good']" alt="" srcset="">  
              <img v-else-if="item.state === -2" :src="item['err']" alt="" srcset="">  
              <img v-else-if="item.state === -3" :src="item['loser']" alt="" srcset="">  
              <div v-else-if="item.state === 0" v-html="item['queue']" class="subject-word">{{item['queue']}}</div>
            </transition>
          </div>
        </div>
      </div>
      <!-- 题目  -->
      <div class="topic-wrap">
        <div class="topic-con">
          <div class="topic-msg">
            {{issueWord}}
          </div>  
        </div>
        <div class="clock-wrap clearfix">
          <img v-if="clockWarn" class="clock-icon" src="./../assets/clock2.png" alt="">
          <img v-else class="clock-icon" src="./../assets/clock1.png" alt="">
          <div class="progress">
            <div v-if="clockWarn" class="progress-con act" :style="'width:'+countDownW"></div>
            <div v-else class="progress-con" :style="'width:'+countDownW"></div>
          </div>
        </div>
        <div class="option-list">
          <template  v-for="(item,index) in issueList" >
            <div v-if="item.act == false" class="option-item " @click="chooseQ(index)"  :key="index" >{{item.word}}</div>
            <div v-else class="option-item act"  @click="chooseQ(index)" :key="index" >{{item.word}}</div>
          </template>
          
        </div>

      </div>

    </div>
    <!-- 开始弹窗 -->
    <transition name="fadedialog" >
      <div class="dialog-wrap" v-if="isdialog">
        <div class="dialog">
          <div class="dislog-close" @click="closeDialog"></div>
        </div>
      </div>
    </transition>
    <div class="font-s">123</div>
    <!-- 输入姓名 -->
    <transition name="fadedialog" >
      <div class="input-wrap" v-if="isComplete">
        <div class="input-content">
          <input v-model="name" class="name" maxlength="4" type="text">
          <div class="commit" @click="commit"></div>
        </div>
      </div>
    </transition>
    <!-- 保存图 -->
    <transition name="fadedialog" >
      <div class="share-wrap" v-if="isShare">
       <img :src="shareimg" alt="">
      </div>
    </transition>
    <audio ref="audio" :src="music_path" preload="auto"></audio>

            
  </div>
</template>

<script type="text/ecmascript-6">
// state -1空白，0 排队中，1 正常展示，2 答对，3全对，-2打错，-3全错已下线  
const subjectArr = [
  {
    state:1,
    normal:'./static/p1_1.png',
    suc:'./static/p1_2.png',
    err:'./static/p1_4.png',
    good:'./static/p1_3.png',
    loser:'./static/p1_5.png',
    queue:'语文老师<br/>排队中'
  },{
    state:0,
    normal:'./static/p2_1.png',
    suc:'./static/p2_2.png',
    err:'./static/p2_4.png',
    good:'./static/p2_3.png',
    loser:'./static/p2_5.png',
    queue:'数学老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p3_1.png',
    suc:'./static/p3_2.png',
    err:'./static/p3_4.png',
    good:'./static/p3_3.png',
    loser:'./static/p3_5.png',
    queue:'英语老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p4_1.png',
    suc:'./static/p4_2.png',
    err:'./static/p4_4.png',
    good:'./static/p4_3.png',
    loser:'./static/p4_5.png',
    queue:'物理老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p5_1.png',
    suc:'./static/p5_2.png',
    err:'./static/p5_4.png',
    good:'./static/p5_3.png',
    loser:'./static/p5_5.png',
    queue:'化学老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p6_1.png',
    suc:'./static/p6_2.png',
    err:'./static/p6_4.png',
    good:'./static/p6_3.png',
    loser:'./static/p6_5.png',
    queue:'历史老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p7_1.png',
    suc:'./static/p7_2.png',
    err:'./static/p7_4.png',
    good:'./static/p7_3.png',
    loser:'./static/p7_5.png',
    queue:'地里老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p8_1.png',
    suc:'./static/p8_2.png',
    err:'./static/p8_4.png',
    good:'./static/p8_3.png',
    loser:'./static/p8_5.png',
    queue:'生物老师<br/>排队中'
  },{
    state:-1,
    normal:'./static/p9_1.png',
    suc:'./static/p9_2.png',
    err:'./static/p9_4.png',
    good:'./static/p9_3.png',
    loser:'./static/p9_5.png',
    queue:'音乐老师<br/>排队中'
  }
]
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

import {questionBack1,questionBack2,questionBack3,questionBack4,questionBack5,questionBack6,questionBack7,questionBack8,questionBack9} from "./../../static/data";
export default {
  data() {
    return {
      teacherIndex:0,    //老师的下标
      questionIndex:0,   // 当前进行了第几题      
      subArr:subjectArr,  //老师展示信息数组
      isdialog:true,
      isComplete:false,
      isShare:false,
      shareimg:'',
      gradeArr:[],      // 成绩 0 错，1 对
      sumArr:[],        // 展示题目的合集
      forbid:false,  //解决题目重复选择情况，
      countDown:30,
      clockWarn:false,
      countDownW:'100%',
      timerDown:null,
      timerOut:null,
      music_path:'',
      answerIndex:'',   //题目答案
      issueWord:'题目',
      issueList:[],
      name:''
    }
  },
  mounted() {
    // console.log(this.subArr)
    this.sumArr = [
      ...getRandomArrayElements(questionBack1,2),
      ...getRandomArrayElements(questionBack2,2),
      ...getRandomArrayElements(questionBack3,2),
      ...getRandomArrayElements(questionBack4,2),
      ...getRandomArrayElements(questionBack5,2),
      ...getRandomArrayElements(questionBack6,2),
      ...getRandomArrayElements(questionBack7,2),
      ...getRandomArrayElements(questionBack8,2),
      ...getRandomArrayElements(questionBack9,2),
      ]
    // console.log(this.sumArr)

    // 取出当前题目信息，并赋值渲染
    // const qArr = this.sumArr[this.questionIndex]
    // // console.log(qArr)
    // //需要判断是否是音乐的情况
    // this.issueWord = qArr['question']
    // this.answerIndex = qArr['answer']
    // var issArr = qArr['options'].map(val=>{
    //   return {
    //     act:false,
    //     word:val['word']
    //   }
    // })
    // console.log(issArr)
    // this.issueList = issArr
    
    // this.initQuestion()
    // setTimeout(() => {
    //   this.isdialog = true
    // }, 500);
  },
  methods: {
    chooseQ(id){
      if(this.answerIndex == id ){   //是否答对
        this.subArr[this.teacherIndex]['state'] = 2
        this.gradeArr.push(1)
        this.$refs['audio'].pause();
        this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/suc.mp3'
        this.$refs['audio'].play();
      }else{
        this.subArr[this.teacherIndex]['state'] = -2
        this.gradeArr.push(0)
        this.$refs['audio'].pause();
        this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/err.mp3'
        this.$refs['audio'].play();
      }
      clearInterval(this.timerDown)
      this.issueList[id]['act'] = true
      this.forbid = true
      setTimeout(() => {
        if(this.questionIndex>17){
          this.questionIndex =17
        }else{
          this.questionIndex++
        }
        
        // 修改老师状态     
        this.teacherIndex = Math.floor(this.questionIndex/2)
        if(this.teacherIndex>=8){
          this.teacherIndex = 8
        }
        this.subArr[this.teacherIndex]['state'] = 1
        this.forbid = false
      }, 600);
    },
    initQuestion(){
      // this.$refs['audio'].pause();
      // this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/clock.mp3'
      if(this.questionIndex>17){
        this.isComplete = true;
        return
      }
      const qArr = this.sumArr[this.questionIndex]
      console.log(qArr)
      //需要判断是否是音乐的情况
      this.issueWord = qArr['question']
      this.answerIndex = qArr['answer']
      var issArr = qArr['options'].map(val=>{
        return {
          act:false,
          word:val['word']
        }
      })
      this.issueList = issArr;
      //倒计时
      clearInterval(this.timerDown)
      this.clockWarn = false 
      this.countDown = 30
      this.countDownW = '100%'
      this.timerDown=setInterval(() => {
        
        if(this.countDown<=10){
          this.clockWarn = true
          this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/clock.mp3'
          this.$refs['audio'].play(); 
        }
        this.countDown-=0.1
        this.countDownW = (this.countDown/30)*100+'%'
        
      }, 100);
    },
    commit(){
      // if(!this.name) return
      const that = this
      const gArr = this.gradeArr
      console.log(this.name,gArr)
      const qNum = gArr.reduce((acc,cur)=>acc+cur)
      let level = '';
      let percent = '';
      const gradeNum = Math.floor(qNum*5.5)
      if(gradeNum>80){
        level = 'A'
      }else if(gradeNum>=60){
        level = 'B'
      }else{
        level = 'C'
      }
      const gradePro = gradeNum+Math.floor(Math.random()*10)
      percent = gradePro>=100?'99%':gradePro+'%'
      // 【语文】【数学】【英语】【物理】【化学】【历史】【地理】【生物】【音乐】
      let lineWord1=0;
      let lineWord2=0;
      let lineWord3=0;
      let lineWord4 = 0;
      lineWord1 = (gArr[0]+gArr[1]+gArr[4]+gArr[5])>=2?0:1
      lineWord2 = (gArr[2]+gArr[3]+gArr[6]+gArr[7])>=2?0:1
      lineWord3 = (gArr[8]+gArr[9]+gArr[14]+gArr[15])>=2?0:1
      lineWord4 = (gArr[10]+gArr[11]+gArr[12]+gArr[13])>=2?0:1
      
      let tArr = [];
      for(let i = 0;i<9;i++){
        const isA = (gArr[i*2]+gArr[i*2+1]) >= 2? 1:0;   //判断是否让老师满意的个数
        tArr.push(isA)
      }
      
      let tNum = tArr.reduce((acc,cur)=>acc+cur)
      let win = 1; // 1胜利 0失败 
      if(tNum<=4){  //失败
        win = 0;
        tNum = 9-tNum
      }
      console.log(level,percent,lineWord1,lineWord2,lineWord3,lineWord4)
      console.log(tNum,win)
      let bgArr = ['./static/err_bg.jpg','./static/suc_bg.jpg']
      let lineArr1 = ['./static/word1_1.png','./static/word1_2.png']
      let lineArr2 = ['./static/word2_1.png','./static/word2_2.png']
      let lineArr3 = ['./static/word3_1.png','./static/word3_2.png']
      let lineArr4 = ['./static/word4_1.png','./static/word4_2.png']


      let data = [bgArr[win],lineArr1[lineWord1],lineArr2[lineWord2],lineArr3[lineWord3],lineArr4[lineWord4]]
      let len = data.length
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      canvas.width = '1125'
      canvas.height = '2436'
      function drawing(n) {
        if(n < len) {
          var img = new Image;
          img.crossOrigin = 'Anonymous'; //解决跨域			
          img.src = data[n];
          img.onload = function() {
            if(n == 0) {
              ctx.drawImage(img, 0, 0, 1125, 2436)			
            } else if(n == 1) {
              ctx.drawImage(img, 180, 1138, 800, 80);
            }else if(n == 2) {
              ctx.drawImage(img, 180, 1218, 800, 80);
            }else if(n == 3) {
              ctx.drawImage(img, 180, 1298, 800, 80);
            }else if(n == 4) {
              ctx.drawImage(img, 180, 1378, 800, 80);
            }
            drawing(n + 1); //递归
          }
        } else {			
          ctx.save();
          ctx.font = "bold 56px 微软雅黑";
          ctx.textAlign = "right";
          ctx.textBaseline = "top";
          ctx.fillStyle = "#000";
          ctx.rotate(-14*Math.PI/180);
          ctx.fillText(that.name, 240, 260);					
          ctx.restore(); // 还原状态         
          ctx.font = "144px gbk";
          ctx.textBaseline = "top";
          ctx.fillStyle = "#c02827";
          ctx.textAlign = "left";
          ctx.fillText(level, 686, 408);
          ctx.textAlign = "center";
          ctx.fillText(percent, 560, 580);
          ctx.fillText(tNum, 556, 790);
          const careimg = canvas.toDataURL("image/jpeg", 1);
          that.isComplete = false;
          that.isShare = true;
          that.shareimg = careimg
          
        }
      }
      drawing(0);
    },
    closeDialog(){
      this.isdialog = false;
      this.initQuestion()
      this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/start.mp3'
      this.$refs['audio'].play(); 
    },
  },
  watch: {
    countDown:{
      immediate: false,
      handler(newValue,  oldValue) {
        // console.log(newValue)
        if(newValue<=0){
          clearInterval(this.timerDown)
          this.subArr[this.teacherIndex]['state'] = -2
          this.gradeArr.push(0)
          this.$refs['audio'].pause();
          this.$refs.audio.src = 'https://adproject.thepaper.cn/adproject/2020/09/teacherDay/err.mp3'
          this.$refs['audio'].play();
          this.forbid = true;
          clearTimeout(this.timerOut)
          this.timerOut = setTimeout(() => {
            this.questionIndex++
            // 修改老师状态     
            this.teacherIndex = Math.floor(this.questionIndex/2)
            if(this.teacherIndex>=8){
              this.teacherIndex = 8
            }
            this.subArr[this.teacherIndex]['state'] = 1
            this.forbid = false
            this.initQuestion()
          }, 400);
        }
      }
    },
    questionIndex: {
      immediate: false,
      handler(newValue,  oldValue) {
        this.initQuestion()
      }
    },
    teacherIndex: {
      immediate: false,
      handler(newValue,  oldValue) {
        console.log(newValue,oldValue)
        const len = this.gradeArr.length-1
        const last = this.gradeArr[len]
        const last1 = this.gradeArr[len-1]
        if(last+last1 == 2){
          this.subArr[oldValue]['state'] = 3
        }else if(last+last1 == 1){
          this.subArr[oldValue]['state'] = 1
        }else{
          this.subArr[oldValue]['state'] = -3
        }
        this.subArr[newValue]['state'] = 1
        if(newValue+1>8) return
        this.subArr[newValue+1]['state'] = 0
      }
    },
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
  .page .forbid{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
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
  .page-con .topic-wrap{
    position: relative;
    width: 9.4rem;
    margin: 0 auto;
  }
  .topic-wrap .topic-con{
    position: relative;
    width: 100%;
    /* height: 3.2rem;
    display: flex;
    align-items: center; */
    padding: 0.7rem 0.32rem 0.6rem;
  }
  .topic-con .topic-msg{
    font-size: 0.5rem;
    color: #bbc8d8;
    line-height: 0.68rem;
  }
  .clock-wrap{
    position: relative;
    width: 100%;
    padding: 0 0 0 0.32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .clock-wrap .clock-icon{
    position: relative;
    width: 0.76rem;
  }
  .clock-wrap .progress{
    position: relative;
    width: 7.5rem;
    height: 0.5rem;
    background: #2c4c75;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .clock-wrap .progress .progress-con{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: #5f8cc5;
  }
  .clock-wrap .progress .progress-con.act{
    background: #c28a4d;
  }
  .option-list{
    position: relative;
    width: 100%;
    padding: 0.92rem 0.32rem 0.24rem;
    overflow: hidden;
  }
  .option-list .option-item{
    position: relative;
    width: 100%;
    height: 1.12rem;
    line-height: 1.12rem;
    text-align: center;
    color: #fff;
    font-size: 0.56rem;
    border: 1px solid #fff;
    border-radius: 1.12rem;
    margin-bottom: 0.24rem;
  }
  .option-list .option-item.act{
    color: #c28a4f;
    border: 1px solid #c28a4f;
  }
.dialog-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.78);
  z-index: 888;
}
.dialog-wrap .dialog{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9.52rem;
  height: 11.6rem;
  background-image: url(./../assets/dialog.png);
  margin-left: -4.76rem;
  margin-top: -5.8rem;
  background-size: 100% 100%;
}
.dialog-wrap .dialog .dislog-close{
  position: absolute;
  top: 9rem;
  left: 50%;
  margin-left: -2.2rem;
  width: 4.4rem;
  height:1.2rem ;
}

.input-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.78);
  z-index: 888;
}
.input-wrap .input-content{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9.52rem;
  height: 6.36rem;
  background-image: url(./../assets/dialog1.png);
  margin-left: -4.76rem;
  margin-top: -3.18rem;
  background-size: 100% 100%;
}
.input-content .name{
  position: absolute;
  left: 0.6rem;
  top: 2.54rem;
  width: 8.28rem;
  height: 1.36rem;
  line-height: 1.32rem;
  font-size: 0.5rem;
  color: #fff;
  padding-left: 0.28rem;
  background: transparent;
}
.input-content .commit{
  position: absolute;
  top: 4.4rem;
  left: 2.58rem;
  width: 4.28rem;
  height: 1.2rem;
  z-index: 99;
}
.share-wrap{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.78);
  z-index: 888;
}
.share-wrap img{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%,-50%);
}
.font-s{
  position: absolute;
  z-index: -1;
  font-family: 'gbk';
  opacity: 0;
}
.fadedialog-enter-active, .fadedialog-leave-active {
  transition: opacity .58s;
}
.fadedialog-enter, .fadedialog-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:0;
}
.fadeimg-enter-active, .fadeimg-leave-active {
  transition: opacity .58s;
}
.fadeimg-enter, .fadeimg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:0;
}
</style>
