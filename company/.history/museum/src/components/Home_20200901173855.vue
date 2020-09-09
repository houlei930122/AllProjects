<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="page-content">
      <div class="tit">
        <img src="./../assets/tit.png" alt />  
      </div>      
      <div class="btn-wrap clearfix">
        <router-link class="link-btn" to="/heritage"></router-link>
        <router-link class="link-btn" to="/person"></router-link>
        <router-link class="link-btn" to="/museum"></router-link>
        <router-link class="link-btn" to="/art"></router-link>
        <router-link class="link-btn" to="/crossover"></router-link>
        <router-link class="link-btn" to="/cate"></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    goRules() {
      this.$router.push("/rules");
    },
  },
};
</script>

<style scoped >
.page {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(./../assets/kv_bg.jpg);
  background-size: cover;
  background-position: center bottom;
}
.page-content {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 6.08rem;
}
.page-content .tit {
  position: absolute;
  left: 1.3rem;
  top: 0;
  width: 4.9rem;
}
.tit img {
  position: relative;
  width: 100%;
}
.btn-wrap{
  position: absolute;
  bottom: 0;
  left: 1.1rem;
  width: 6.18rem;
}
.btn-wrap .link-btn{
  position: relative;
  width: 1.58rem;
  height: 1.58rem;
  float: left;
  margin-right:0.28rem;
  margin-top: 0.28rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.btn-wrap .link-btn:nth-of-type(1){
  background-image: url(./../assets/feiyi_btn.png);
}
.btn-wrap .link-btn:nth-of-type(2){
  background-image: url(./../assets/namething_btn.png);
}
.btn-wrap .link-btn:nth-of-type(3){
  background-image: url(./../assets/num_lib_btn.png);
}
.btn-wrap .link-btn:nth-of-type(4){
  background-image: url(./../assets/art_btn.png);
}
.btn-wrap .link-btn:nth-of-type(5){
  background-image: url(./../assets/crossover_btn.png);
}
.btn-wrap .link-btn:nth-of-type(6){
  background-image: url(./../assets/cate_btn.png);
}
</style>

