<template>
  <div>
      <h1>投票列表页</h1>
      <button @click="goDetails">详情页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goDetails() {
        console.log('去详情页')
        this.$router.push({name:'details',query:{id:1}})
      }
    },
  }
</script>

<style scoped>

</style>