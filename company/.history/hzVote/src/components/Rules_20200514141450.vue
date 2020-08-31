<template>
  <div class="rules">
      <h1>规则介绍</h1>
      <button @click="back">返回</button>
      <button @click="goVote">投票</button>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
        console.log('返回')
      },
      goVote(){
        this.$router.push('/VoteList')
      }
    },
  }
</script>

<style scoped>
  .rules{
    position: relative;
    width: 100%;
    height: 100%;
  }


</style>