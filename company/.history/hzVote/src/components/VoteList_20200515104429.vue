<template>
  <div class="vote-wrap">
    <div class="vote-con">

      <div class="vote-sort">
        <div class="vote-tit">十大创意设计美宿</div>
        <div class="vote-list">
          <div class="vote-item">

          </div>
        </div>
        <div class="vote-btn"></div>
      </div>


    </div>
      <button @click="goDetails(1)">详情页</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goDetails(id) {
        console.log(id)
        this.$router.push({
          path:'/details',
          query:{id:id}
        })
      }
    },
  }
</script>

<style scoped>
  .vote-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
    padding: 0.86rem 0.44rem ;
    background:url('../assets/bg.jpg')   no-repeat 0 0/100% 100% ;
  }
  .vote-con{
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 0.45rem 0 0 0.4rem;
  }
</style>