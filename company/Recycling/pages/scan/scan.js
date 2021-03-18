// pages/scan/scan.js
var animation ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getauth:false,
    camera:true,  //相机展示
    istake:false, 
    flash:false,      //闪光灯true 开启 false 关闭
    resshow:false,  //展示识别结果
    res:true,     //是否识别出来
    imgUrls:[{
        'name':'tu_gan.png',
        'tit':'1111',
        'sort':'分类1'
      },{
        'name':'tu_khs.png',
        'tit':'2222',
        'sort':'分类2'
      },{
        'name':'tu_khs.png',
        'tit':'3333',
        'sort':'分类333'
      }
    ],
    status:0,          //多个分类
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    
   
  },
  slip(e){
    // console.log(e.detail.current)
    let index = e.detail.current ;
    this.setData({
      status: index
    })

  },
  prv(){
    this.setData({
      status: this.data.status-- <= 0? 0:this.data.status
    })
    console.log(this.data.status)
  },
  next(){
    this.setData({
      status: this.data.status + 1 > this.data.imgUrls.length-1?this.data.status:this.data.imgUrls.length-1
    })
    console.log(this.data.status)
  },
  callback(){
    wx.openSetting({
      success (res) {
        console.log('----------------------------')
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  takePhoto() {
    const that = this ;
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
          istake:true, 
          camera:false
        })
        console.log(res)
        setTimeout(function(){
          that.setData({
            resshow:true
          })
          animation.top('0').step()
          that.setData({
            animationData:animation.export()
          })
        },2000)
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  photo(){
    const that = this ;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths[0])
        that.setData({
          src: tempFilePaths[0],
          istake:true,
          camera:false,
          resshow:false
        })
        setTimeout(function(){
          that.setData({
            resshow:true
          })
        },2000)

      }
    })
  },
  flashfn(){
    this.setData({
      flash:!this.data.flash
    })
    console.log(this.data.flash)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      // this.data.ctx = wx.createCameraContext()
      var that = this ;
      wx.getSetting({
        success (res) {
          console.log(res.authSetting)
          console.log(res.authSetting["scope.camera"])
          if(!res.authSetting["scope.camera"]){
            that.setData({
              getauth:true
            })
          }
        }
      })
      animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
  
      this.animation = animation
  },
  gogar:(res)=>{
    wx.navigateTo({
      url: '../garbageLibrary/garbageLibrary'
    })
  },
  close(){
    this.setData({
      istake:false,
      camera:true
  
    })
    animation.top('100%').step()
    this.setData({
      animationData:animation.export()
    })
  },
  gohome(){
    wx.navigateTo({
      url: '../index/index'
    })
  },
  search(){
    wx.navigateTo({
      url: '../search/search'
    })
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