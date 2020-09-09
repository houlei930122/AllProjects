<template>
  <div class="page">
    <div class="page-con">
      <div class="subject-wrap">
        <div class="subject-list">
          <div class="subject-item"></div>
        </div>
      </div>
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
    -webkit-overflow-scrolling: touch;
    padding-top: 1.62rem;
    padding-bottom: 1.56rem;
  }
  .page .page-con{
    position: relative;   
    width: 100%;
    padding: 0.52rem 0;
    overflow: hidden;
  }
  .page-con .subject-wrap{
    position: relative;
    width: 9.4rem;
    height: 9.94rem;
    background: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
  }
  .subject-wrap .subject-list{
    position: relative;
  }

</style>
