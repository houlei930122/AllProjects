<template>
  <div class="page">
    <div class="page-con">
      <div class="tit"><img src="./../static/tit.png" alt="" srcset=""></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .page{
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(./../assets/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
  .page-con{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 3.54rem;
    width: 100%;
    min-height: 17.6rem;
    background-image: url(./../assets/kv_bg.png);
    background-size: cover;
    background-position: left bottom;
  }

</style>
