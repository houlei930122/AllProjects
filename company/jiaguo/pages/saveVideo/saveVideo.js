// pages/saveVideo/saveVideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,msg:"1",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:2,msg:"2",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:3,msg:"3",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:4,msg:"4",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:5,msg:"5",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:6,msg:"6",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:7,msg:"7",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:27,msg:"24",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:28,msg:"25",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:29,msg:"28",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"},
      {id:30,msg:"79",src:"https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4",cover:"https://adproject.thepaper.cn/adproject/2019/7/fenghui/img/video.png"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  signplay(e){
    const videoId =  e.target.id  ;
    console.log(videoId )
    const videoArr = this.data.list;
    for(let i = 0 ; i < videoArr.length; i++){
      if(videoId == 'video'+videoArr[i].id){
        let videoContext = wx.createVideoContext(videoId);
        videoContext.play();
      }else{
        let videoContextPrev = wx.createVideoContext('video'+videoArr[i].id);
        videoContextPrev.pause();
      }  
    }
  },
  downvideo(e){
    // console.log(e)
    wx.showLoading({
      mask:true,
      title: '下载中',
    })
    let videoUrl = 'https://adproject.thepaper.cn/adproject/2019/7/fh/img/video.mp4';
    wx.downloadFile({
      url: videoUrl, //下载资源的地址网络
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success (res) {
            console.log(res.errMsg)
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail(err){
            console.log(err)
          }
        })
      },
      fail(err){
        console.log(err)
      }
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

  }
})