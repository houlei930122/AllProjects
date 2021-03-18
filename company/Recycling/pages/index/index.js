// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hint:false,
    collect:true,
    imgUrl:'https://adproject.thepaper.cn/adproject/2019/6/recycling/code.jpg',
    author:false,
    savecode:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gogar:(res)=>{
    wx.navigateTo({
      url: '../garbageLibrary/garbageLibrary'
    })
  },
  shade(){
    this.setData({
      hint:true
    })
  },
  closehint(){
    this.setData({
      hint:false
    })
  },
  collect_c(){
    this.setData({
      collect:false
    })
  },
  saveimg(){
    let that = this
    //若二维码未加载完毕，加个动画提高用户体验
    wx.showToast({
      icon: 'loading',
      title: '正在保存图片',
      duration: 1000
    })
    //判断用户是否授权"保存到相册"
    wx.getSetting({
      success (res) {
        //没有权限，发起授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {//用户允许授权，保存图片到相册        
              that.savePhoto();
            },
            fail () {//用户点击拒绝授权，跳转到设置页，引导用户授权            
              that.setData({
                author:true
              })
            }
          })
        } else {//用户已授权，保存到相册
          that.savePhoto()
        }
      }
    })
  },
//下载图片地址并保存到相册，提示保存成功
  savePhoto() {
    console.log(2)
    let that = this
    wx.downloadFile({
      url: that.data.imgUrl,
      success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon: "success",
              duration: 1000
            })
            that.setData({
              author:false,
              savecode:false
            })
          }
        })
      }
    })
  },
  openSetting(){
    let that = this;
    wx.openSetting({
      success () {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            that.savePhoto();
          }
        })
      }
    })
  },
  cancel(){
    this.setData({
      author:false,
      savecode:false
    })
  },
  showcode(){
    this.setData({
      savecode:true
    })
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
    return {
      title: '垃圾识别',
      path: '/pages/index/index',
      imageUrl:'../../images/share_img.jpg'
    }
  }
})