<template>
  <div class="rules">
      <h1>规则介绍</h1>
      <button @click="back">返回</button>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        console.log('返回')
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