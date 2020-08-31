<template>
  <div class="detail-wrap">
    <div class="detail-close"></div>
    <div class="detail-con">
      <div class="tit"></div>
      <div class="subtit"></div>
      <div class="msg"></div>
      <img src="./../assets/r1.png" alt="">
    </div>
    <div class="shade"></div>
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log("创建时--el");
  // },
  // data() {
  //   return {
  //     key: value
  //   };
  // },
  mounted() {
    console.log(this.$route.query);
  }
};
</script>

<style scoped>
.detail-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  background:url('../assets/bg.jpg')   no-repeat 0 0/100% 100% ; 
}
.detail-wrap .detail-con{
  position: absolute;
  left: 0.44rem;
  right: 0.44rem;
  top: 1.24rem;
  bottom: 0.88rem;
  z-index: 58;
  background: #fff;
  overflow-x:hidden ;
  overflow-y:scroll ;
  -webkit-overflow-scrolling: touch;
}



.detail-wrap .shade{
  position: absolute;
  bottom: 0;
  left: 0.44rem;
  right: 0.44rem;
  height: 0.88rem;
  z-index: 7;
  opacity: 0.38;
  background:url('../assets/shade.png')   no-repeat 0 0/100% 100% ;
}
</style>