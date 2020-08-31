<template>
  <div class="vote-wrap">




      <button @click="goDetails(1)">详情页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goDetails(id) {
        console.log(id)
        this.$router.push({
          path:'/details',
          query:{id:id}
        })
      }
    },
  }
</script>

<style scoped>
  .vote-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
    padding: 0.48rem 0.68rem ;
    background:url('../assets/bg.jpg')   no-repeat 0 0/100% 100% ;
  }
</style>