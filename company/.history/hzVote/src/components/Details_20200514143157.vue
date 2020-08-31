<template>
  <div>
    <h1>详情页</h1>
  </div>
</template>

<script>
export default {
  mounted () {
   console.log(11111)
  },
  data() {
    return {
      key: value
    }
  },
  mounted() {
    console.log(111);
    console.log(this.$router.query);
  }
};
</script>

<style scoped>
</style>