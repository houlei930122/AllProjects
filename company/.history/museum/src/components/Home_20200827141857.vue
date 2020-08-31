<template>
  <div class="page">
      <h1>首页</h1>

    <router-link to="/s">下一页</router-link>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
     goRules() {
        this.$router.push('/rules')
      },
  },
}
</script>

<style scoped >
  .page{
    position: relative;
    width: 100%;
    height: 100%;
    background-image:url(./../assets/kv_bg.jpg) ;
  }

</style>
