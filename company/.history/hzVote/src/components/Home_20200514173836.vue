<template>
  <div class="home">
      


      <button @click="goRules">下一页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goRules() {
        this.$router.push('/rules')
        console.log('123213')
      }
    },
  }
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100%;
    background-image:url(./../../assets/kv_bg.jpg) ;
    background-size:100% 100%;
    background-repeat:no-repeat ;
  }
</style>