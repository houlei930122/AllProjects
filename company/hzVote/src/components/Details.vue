<template>
  <div class="detail-wrap">
    <div class="detail-close" @click="back"></div>
    <div class="detail-con">
      <div class="tit">{{tit}}</div>
      <div class="subtit">{{subtit}}</div>
      <div class="msg">{{msg}}</div>
      <div class="img-list" >
        <img :src="'./static/details/'+sort+'/'+item" alt v-for="item in imglist" :key="item"/>
      </div>
    </div>
    <div class="shade"></div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  created() {
    console.log(this.$route.params)  //接收params 传参
    const { id,sort} = this.$route.query;   //接收query传参
    this.sort = sort
    Axios.get("./static/data.json")
      .then(res => {
        const data = res.data[sort]['data']
        data.forEach(ele=>{
          if(ele.id == id){
            this.tit = ele.name
            this.subtit = ele.add
            this.msg = ele.msg
            this.imglist = ele.imglist
          }
        })
      })
      .catch(err => {
        console.log("error", err.message);
      });
  },
  data() {
    return {
      tit: "",
      subtit: "",
      msg:"",
      imglist:[],
      sort:''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  beforeRouteEnter (to, from, next) {    //进入页面路由守卫
    console.log(to)
    next()
  },
  beforeRouteLeave (to, from, next) {  //离开页面路由守卫
    // ...
    console.log(to)
    next()
  }
};
</script>

<style scoped>
.detail-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  background: url("../assets/bg.jpg") no-repeat 0 0/100% 100%;
}
.detail-wrap .detail-close {
  position: absolute;
  right: 0.44rem;
  top: 0.4rem;
  width: 0.53rem;
  height: 0.53rem;
  background: url("../assets/close.png") no-repeat 0 0/100% 100%;
}
.detail-wrap .detail-con {
  position: absolute;
  left: 0.44rem;
  right: 0.44rem;
  top: 1.24rem;
  bottom: 0.88rem;
  z-index: 58;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0.36rem 0.32rem;
}
.detail-con .tit {
  position: relative;
  width: 100%;
  font-size: 0.32rem;
  color: #444444;
  line-height: 0.46rem;
}
.detail-con .subtit {
  position: relative;
  width: 100%;
  font-size: 0.24rem;
  color: #444444;
  line-height: 0.36rem;
}
.detail-con .msg {
  position: relative;
  width: 100%;
  font-size: 0.24rem;
  color: #444444;
  line-height: 0.36rem;
  padding: 0.48rem 0;
}
.detail-con .img-list {
  position: relative;
  width: 100%;
}
.img-list img {
  position: relative;
  width: 100%;
  margin-bottom: 0.28rem;
}
.detail-wrap .shade {
  position: absolute;
  bottom: 0;
  left: 0.44rem;
  right: 0.44rem;
  height: 0.88rem;
  z-index: 7;
  opacity: 0.38;
  background: url("../assets/shade.png") no-repeat 0 0/100% 100%;
}
</style>