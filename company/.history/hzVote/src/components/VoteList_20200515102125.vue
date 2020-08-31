<template>
  <div class="vote-wrap">



      <h1>投票列表页</h1>
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

</style>