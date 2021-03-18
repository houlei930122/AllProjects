
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg:'',
    userName:'',
    allCount:'',
    videoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this ;
    wx.getStorage({
      key: 'userId',
      success (res) {      
        if(res.data){
          console.log(res.data)
          let userId = res.data;
          wx.request({
            url: jiekouUrl+'/api/jgyx/videoList', 
            method:'POST',
            data: {
              userId:userId,
              type : '20' ,
              pageSize : '1000',
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success (res) {
              console.log(res)
              
              if(res.data.code == '1'){
                console.log(res.data.data.videoList)
                that.setData({
                  allCount:res.data.data.allVoteNum,
                  videoList:res.data.data.videoList
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

        }else{
          wx.showModal({
            content: '用户不存在',
            success (res) {
              wx.reLaunch({
                url: '../index/index'   
              })             
            }
          })
        }
      }
    })
    wx.getStorage({
      key: 'userImg',
      success (res) { 
        that.setData({
          userImg:res.data
        })
      }
    })
    wx.getStorage({
      key: 'userName',
      success (res) { 
        that.setData({
          userName:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  videoDetails(e){
    let videoid = e.currentTarget.dataset.videoid;
    console.log(videoid)
    wx.navigateTo({
      url: '../share/share?videoid='+videoid,    
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