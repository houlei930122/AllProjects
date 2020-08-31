<template>
  <div class="home">     
    <img class="logo" src="./../assets/logo1.png" alt="" srcset="">
    <div class="tit"></div>
    <div class="arrow"></div>
    <button class="login" @click="login">登录</button>
    <button class="logout" @click="logout">注销</button>
    <p >{{welcome}}</p>
  </div>
</template>

<script>
  //映射 mapState()/mapMutation()/mapAction()
  //通过这些映射方法可以让大家少敲几个字，避免对$store的直接访问
  import {mapState, mapMutation,mapActions,mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapState('user',['isLogin']),  //使用this.isLogin 就可以直接访问到user.js里面的state了
      ...mapGetters('user',['welcome'])
    },
    methods: {
      goRules() {
        this.$router.push('/rules')
      },
      login(){
        // 提交mutation变更状态
        // this.$store.commit('user/login')
        // 派发动作，触发actions
        // this.$store.dispatch('user/login', 'admin')  //模块化的使用方式
        this['user/login']('admin')     //映射使用方法
        setTimeout(() => {
          // console.log( this.$store.state.isLogin )  //使用模块化之前的操作
          console.log( this.$store.state.user.isLogin )  //使用木块化之后的获取状态方法
        }, 2000);
        console.log(this.isLogin)
      },
      logout(){
        this.$store.commit('logout')     
        console.log( this.$store.state.isLogin )
      },
      ...mapActions(['user/login'])
    },
    updated() {
      // console.log( this.$store.state.isLogin )
    },
    mounted () {
      console.log( this.$store.state.isLogin )


      const self = this
      getSlipDir('.home',function(dir){
        if(dir === 'up'){
         self.goRules()
        }
      })
      
      function getSlipDir(param,callback){	
        var startx, starty;
        //获得角度
        function getAngle(angx, angy) {
          return Math.atan2(angy, angx) * 180 / Math.PI;
        };
        //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
        function getDirection(startx, starty, endx, endy) {
          var angx = endx - startx;
          var angy = endy - starty;
          var result = 0;
          //如果滑动距离太短
          if(Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
          }
          var angle = getAngle(angx, angy);
          if(angle >= -135 && angle <= -45) {
            result = 1;
          } else if(angle > 45 && angle < 135) {
            result = 2;
          } else if((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
          } else if(angle >= -45 && angle <= 45) {
            result = 4;
          }
          return result;
        }
        //手指接触屏幕
        document.addEventListener("touchstart", function(e) {
          startx = e.touches[0].pageX;
          starty = e.touches[0].pageY;
        }, false);
        //手指离开屏幕
        document.querySelector(param).addEventListener("touchend", function(e) {
          var endx, endy;
          endx = e.changedTouches[0].pageX;
          endy = e.changedTouches[0].pageY;
          var direction = getDirection(startx, starty, endx, endy);
          switch(direction) {
            case 0:
              return false
              break;
            case 1:
              callback('up')
              break;
            case 2:
              callback('down')
              break;
            case 3:
              callback('left')
              break;
            case 4:
              callback('right')
              break;
            default:
          }
        }, false);	
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
    margin-left: -0.375rem;
    background:url('../assets/arrow.png')   no-repeat 0 0/100% 100% ;
  }
  .login{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999999;
    padding: 0.2rem;
    font-size: 0.3rem;
  }
  .logout{
    position: absolute;
    left: 1.58rem;
    top: 0;
    z-index: 9999999;
    padding: 0.2rem;
    font-size: 0.3rem;
  }
</style>