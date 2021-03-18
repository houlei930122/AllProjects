// pages/share/share.js
function paramJson(str){
  var data = str.split('&')
  var param = {};
  for(var i = 0; i< data.length ;i++){
    var name = data[i].split('=')[0]
    var val = data[i].split('=')[1]
    param[name] = val
  }
  return param
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    sort:'',
    imgurl:'',
    err:false,
    suc:false,
    timer :()=>{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    let paramstr = decodeURIComponent(option.param);
    let param = paramJson(paramstr);
    if(param.id){
      this.setData({
        id : param.id,
        sort: param.sort,
        imgurl: param.img
      })
    }
   
  },
  selectfun(e){
    let sort = e.currentTarget.dataset.sort ;
    if(sort != this.data.sort){
      this.setData({
        err:true
      })
      clearTimeout(this.data.timer)
      let that = this;
      this.data.timer = setTimeout(function(){
        that.setData({
          err:false
        })
      },1000)
    }else{
      this.setData({
        err:false,
        suc:true
      })
      clearTimeout(this.data.timer)
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})