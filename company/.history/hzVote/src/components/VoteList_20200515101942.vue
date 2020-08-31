<template>
  <div>
      <h1>投票列表页</h1>
      <button @click="goDetails(1)">详情页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goDetails(e) {
        console.log(e)
        this.$router.push({
          path:'/details',
          query:{id:123}
        })
      }
    },
  }
</script>

<style scoped>

</style>