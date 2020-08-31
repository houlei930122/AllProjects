<template>
  <div class="home-wrap">
    <H1>首页</H1>
    <button @click="gorule()">下一页</button>
  </div>
</template>

<script>
export default {
  methods: {
    gorule() {
      console.log(1)
    }
  },
};
</script>

<style scoped>
  .home-wrap{
    position: relative;
    width: 100%;
    height: 2000px;
    background: red;
  }
</style>
