<template>
  <div class="detail-wrap">
  
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
      overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
}
</style>