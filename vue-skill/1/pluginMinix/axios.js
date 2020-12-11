/*
axios.interceptors.request.use(()=>{

})
axios.interceptors.response.use(()=>{
  
})
*/


function axios(params) {
  this.interceptors = {
    request: new interceptorsMannner(),
    response: new interceptorsMannner(),
  }
}
function interceptorsMannner(params) {
  this.hanlders = []; 
}
interceptorsMannner.prototype.use = function(fullfilled) {
  
}
