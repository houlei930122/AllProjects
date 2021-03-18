// 接口域名
// https://standsbup.com/jiaguoadmin/api/jgyx/videoDetails
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';


Page({

  data: {
    hotList:[],
    actIndex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const that = this;
    if(options.cid){
      this.setData({
        actIndex : options.cid
      })
    }
    wx.request({
      url: jiekouUrl+'/api/jgyx/videoCategoryList', 
      method:'POST',
      data: {
        hot:'1'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        if(res.data.code == '1'){
          console.log(res.data.data.categoryList)
          that.setData({
            hotList : res.data.data.categoryList
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }           
      },
      err:function(err){
        console.log(err)
        wx.showToast({
          title: err.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  goindex(e){
    let cid = e.currentTarget.dataset.id;
    this.setData({
      actIndex : cid
    })
    wx.reLaunch({
      url: '../index/index?cid='+cid,
    })
    
  },
  
  onShareAppMessage: function () {
    return {
      title: '家国影像馆',
      path: '/pages/index/index',
      imageUrl:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/shareimg.png'
    }
  }
})