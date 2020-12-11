<template>
  <div class="page">
    <h1>Home</h1>
    <h1>状态1：{{getState}}</h1>
    <h1>状态2：{{numState}}</h1>
  </div>
</template>


<script type="text/ecmascript-6">

export default {
  name:'home',
  isVuex:true,
  data() {
    return {
      numState:'',
      getState:''
    }
  },
  created() {
    this.setMyStore().then(()=>{
      console.log(this.$store.state.home.num2)
    })
    
    


  },
  mounted() {
    // 模块动态注册，因为是在created引入注册模块store，存在异步的问题
    // 需要解决异步问题：
    // console.log(this.$store.state)
    // setTimeout(() => {
    //   console.log(this.$store.state.home.num2)
    // },100);
   
    
  
  },
  components: {

  },
  

}
</script>

<style scoped >
</style>
