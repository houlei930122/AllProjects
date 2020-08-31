<template>
  <div class="page">
      <h1>首页</h1>

    <router-link to="">下一页</router-link>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
     goRules() {
        this.$router.push('/rules')
      },
  },
}
</script>

<style scoped >
</style>
