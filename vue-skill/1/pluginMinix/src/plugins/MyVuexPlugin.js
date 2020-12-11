
const MyVuexPlugin = {}
MyVuexPlugin.install = function(Vue) {
  Vue.mixin({
    created () {
      if(this.$options.isVuex){
        var name = this.$options.name;  
        // import引入不能里面只使用变量，要使用字符串的形式，不然会报错
        // 使用了import导致created 创建产生了异步问题，在接下来的生命周期中，不能直接使用
        import("../store/modules/"+name).then((res)=>{
          // this.$store.registerModule  动态注册模块
          this.$store.registerModule(name, res.default)
        })
        
      }
    },
    methods: {
      setMyStore(){
        var name = this.$options.name;
        // import引入不能里面只使用变量，要使用字符串的形式，不然会报错
        // 使用了import导致created 创建产生了异步问题，在接下来的生命周期中，不能直接使用
        console.log(import("../store/modules/" + name));
        return import("../store/modules/" + name).then((res) => {
          // this.$store.registerModule  动态注册模块
          this.$store.registerModule(name, res.default)
        })
      }
    }
  })



}
export default MyVuexPlugin