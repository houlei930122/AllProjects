<template>
  <div class="page">
    <div class="page-content">
      <div class="tit">
        <img src="./../assets/tit.png" alt="">
      </div>
    </div>
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
    background-size: cover;
    background-position: center bottom;
  }
  .page-content{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 6.08rem;
  }
  .page-content .tit{
    position: absolute;
    left: 1.3rem;
    top: 0;
    width: 4.9rem;
  }
  .tit img{
    position: relative;
    width: 100%;
  }
</style>
