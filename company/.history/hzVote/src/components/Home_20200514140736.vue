<template>
  <div class="home">
      <H1>首页</H1>
      <button @click="goRules">下一页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goRules() {
        this.routers.push('/rules')
        console.log('123213')
      }
    },
  }
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 1000px;
    background: pink;
  }
</style>