// 自定义插件
const MyPlugin = {}
MyPlugin.install = function (vue, options) {
  // 1.添加全局方法或属性
  vue.myGlobalMethod = function (params) {
    alert('添加全局方法或属性')
  }
  // 使用  调用Vue.myGlobalMethod()

  // 2.添加全局资源,自定义指令
  vue.directive('my-directive', {
    inserted: function (el, binding) {
      el.innerHTML = binding.value
    }
  })
  // 使用 <button v-my-directive="msg"></button>

  // 3.注入组件选项,里面的方法生命周期和在单个组件里面注册使用都是一样的
  // 但是methods里面的方法不能传参，如果需要传参要使用Vue.prototype.myMethods
  vue.mixin({
    created: function () {
      console.log(111);
      console.log(this.$options.name);
    },
    methods: {
      myMethods(params) {
        alert('定义组件是通用方法', params)
      }
    }
  })

  // 添加实例方法，可以传参，和组件的methods方法一样
  vue.prototype.$myMethod = function (params) {
    console.log(params);
  }
  // 使用  <button @click="$myMethod('传参')">插件的全局方法可传参</button>
}
export default MyPlugin