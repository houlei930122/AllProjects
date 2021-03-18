// 接口域名
// https://standsbup.com/jiaguoadmin/api/jgyx/videoDetails
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
Page({
  data: {
    userid:'',
    firstIn:true,
    imgUrls: [
      {
        id: '3',
        imgurl: 'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/newCard_3.png'
      },{
        id:'2',
        imgurl:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/newCard_2.png'
      },{
        id: '1',
        imgurl: 'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/newCard_1.png'
      }
      
    ],
    swiperIndex: 0
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userid = options.userid;
    this.setData({
      userid:userid
    })
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current,
      firstIn:false
    })
  },
  gonext(e){
    const temId = this.data.swiperIndex;
    const userid = this.data.userid;
    console.log(temId)
    if (temId == '0'){
      wx.navigateTo({
        url: '../upimg1/upimg1?sort=1',    
      })
    } else if (temId == '2'){
      wx.navigateTo({
        url: '../upimg1/upimg1?sort=2', 
      })
    } else if (temId == '1'){
      wx.navigateTo({
        // url: '../upimg1/upimg1?sort=2&v=1',
        url: '../upimg1/upimg1?sort=1&v=1', 
      })
    }
    wx.setStorage({
      key:"upimg1",
      data:'{}'
    })
    wx.setStorage({
      key:"upimg2",
      data:'{}'
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