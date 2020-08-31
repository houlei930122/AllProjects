<template>
  <div>
    <h1>详情页</h1>
    <p>ssssssssssssssssssssssss</p>
    {{this.$route.query.id}}
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log("创建时--el");
  // },
  // data() {
  //   return {
  //     key: value
  //   };
  // },
  mounted() {
    console.log(this.$route.query);
  }
};
</script>

<style scoped>
</style>