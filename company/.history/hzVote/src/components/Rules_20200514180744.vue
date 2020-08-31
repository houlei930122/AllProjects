<template>
  <div class="rules">
      
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
        console.log('返回')
      },
      goVote(){
        this.$router.push('/votelist')
      }
    },
  }
</script>

<style scoped>
  .rules{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x:hidden ;
    overflow-y:scroll ;
    -webkit-overflow-scrolling: touch;
  }


</style>