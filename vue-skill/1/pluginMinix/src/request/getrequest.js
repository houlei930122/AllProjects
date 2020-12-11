import server from './server'
function myserver() {
  this.server = server
}
myserver.prototype.parseRouter = function(name,urlObj) {
  var ob = this[name] = {}
  Object.keys(urlObj).forEach((item)=>{
    ob[item] = this.sendMes.bind(this, name, item, urlObj[item])
  })
}
myserver.prototype.sendMes = function (moduleName,name,url,config) {
  var config = config || {}
  const type = config.type || "type"
  const data = config.data || {}
  const self = this
  // 请求核心处理前，请求核心处理
  var before = function () {
    
  }
  var defaultFn = function () {
    
  }
  var successs = config.success || defaultFn
  var callback = function (res) {
    success(res,defaultFn)
  }

  var state = {
    get:function(params) {
      
    }
  }



}
export default new myserver








