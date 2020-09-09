<template>
  <div class="page">
    <div class="page-con">
      <p style="color:red">123</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

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
    overflow: scroll;
  }
  .page .page-con{
    position: relative;
    left: 0;
    top: 50%;
    height: 22rem;
    width: 100%;
    margin-top: -11rem;
    background: pink;
  }
  p{
    font-size: 30px;
  }
</style>
