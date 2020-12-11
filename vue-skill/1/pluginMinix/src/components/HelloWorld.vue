<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <!-- <router-link to="/home">去home页</router-link> -->
    <button @click="goHome">去home页</button>
    <button @click="globalFn">插件的全局方法</button>
    <button @click="$myMethod('传参')">插件的全局方法1</button>

    <!-- 使用插件里面的自定义指令 -->
    <button v-my-directive="msg"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    // this.$myMethod()
    // console.log(this)
   this.$http.get('redchalk/work/post/name',{}).then(function(res) {
     console.log(res.data)
   }).catch(function(error) {
     console.log(error)
   })
  //  console.log(res)
  },
  methods: {
    goHome(){
      this.$router.push({
        path:'/home'
      })
    },
    globalFn(){
      this.myMethods('nihao')
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
