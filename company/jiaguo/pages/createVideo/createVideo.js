const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
var sort;
const device = wx.getSystemInfoSync();
const height = device.windowHeight;
const width = device.windowWidth
function createVideo(parm,that){
  wx.request({
    url: jiekouUrl+'/api/jgyx/uploadVideo', 
    method:'POST',
    data:parm,
    header: {
      'content-type': 'application/json;charset=UTF-8'
    },
    success (res) {
      console.log(res)
      if(res.data.code == '1'){
        const vid = res.data.data.video.id;
        that.setData({
          videoId:vid
        })  
        getVideo(vid,that)
      }else{
        wx.showModal({
          content: res.data.msg,
          success(res) {
              wx.reLaunch({
                url: '../index/index'
              })
          }
        })
      }           
    },
    fail:function(err){
      console.log(err)
      wx.showModal({
        content: err.msg,
        success(res) {
          wx.reLaunch({
            url: '../index/index'
          })
        }
      })
    }
  })

}
function getVideo(parm,that){
  wx.request({
    url: jiekouUrl+'/api/jgyx/videoDetails', 
    method:'POST',
    data:{
      vid:parm
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success (res) {
      console.log(res)
      if(res.data.code == '1'){
        // console.log(res.data.data.video.statusLabel)
        if(res.data.data.video.statusLabel == '成功'){
          // console.log(res.data.data.video)
          that.setData({
            pro:100,
            videoSrc:res.data.data.video.videoUrl,
            loading:false,
            shareImg1:res.data.data.video.img1,
            shareImg2:res.data.data.video.img2,
            shareImgAudio:res.data.data.video.imgAudio,
            videoNum:res.data.data.video.addNum,
          })
        }else if(res.data.data.video.statusLabel == '失败'){
          wx.showModal({
            content: '视频生成失败！',
            confirmText: '重试',
            cancelText: '回到首页',
            success (res) {
              if (res.confirm) {
                getVideo(parm, that)
              } else if (res.cancel) {
                wx.reLaunch({
                  url: '../index/index'
                })
              }       
            }
          })
        }else {
          getVideo(parm,that)
          const pro = 100-res.data.data.video.progression
          that.setData({
            pro:pro,       
          })
        }
        
      }else{
        wx.showModal({
          content: res.data.msg,
          confirmText: '重试',
          cancelText: '回到首页',
          success(res) {
            if (res.confirm) {
              getVideo(parm, that)
            } else if (res.cancel) {
              wx.reLaunch({
                url: '../index/index'
              })
            }
          }
        })
      }           
    },
    fail:function(err){
      console.log(err)
      wx.showModal({
        content: '是否继续等待视频制作',
        confirmText:'继续等待',
        cancelText: '回到首页',
        success(res) {
          if (res.confirm) {
            getVideo(parm, that)
          } else if (res.cancel) {
            wx.reLaunch({
              url: '../index/index'
            })
          }
        }
      })
    }
  })
}
function delVideo(userId,vid){
  wx.request({
    url: jiekouUrl+'/api/jgyx/videoDeleteById', 
    method:'POST',
    data:{
      'userId':userId,
      'vid':vid
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success (res) {
      console.log(userId,vid)
      console.log(res)   
    },
    fail:function(err){
     
    }
  })
}
Page({
  data: {
    videoId:'',
    pro:100,
    thumbnailImg:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/video_bg.png',
    loading:true,
    videoSrc:'',
    btnact:'',
    videoH: height*2 - 164,
    redact:false,
    shareMosk:false,
    shareid:'',
    sharecover:'',
    sharevideo:'' ,
    tel:false
  },

  onLoad: function (options) {
    console.log(options)
    const that = this;
    sort = options.sort
    if(sort == '1'){   //模板1
      wx.getStorage({
        key: 'tem1',
        success (res) { 
          const temMsg = JSON.parse(res.data);
          console.log(temMsg)
          that.setData({
            thumbnailImg:temMsg.thumbnailImg
          }) 
          createVideo(temMsg,that)
        },
        fail(){
          wx.showModal({
            content: '系统参数异常，请稍后重试!',
            success (res) {
              wx.reLaunch({
                url: '../index/index'
              })          
            }
          })
        }
      })
    }else if(sort == '2'){
      wx.getStorage({
        key: 'tem2',
        success (res) { 
          const temMsg = JSON.parse(res.data);
          console.log(temMsg)
          that.setData({
            thumbnailImg:temMsg.thumbnailImg
          }) 
          createVideo(temMsg,that)
        },
        fail(){
          wx.showModal({
            content: '系统参数异常，请稍后重试!',
            success (res) {
              wx.reLaunch({
                url: '../index/index'
              })          
            }
          })
        }
      })
    }else{
      wx.showModal({
        content: '系统参数异常，请稍后重试!',
        success (res) {
          wx.reLaunch({
            url: '../index/index'
          })          
        }
      })   
    }
    wx.getStorage({
      key: 'telw',
      success (res) { 
        const telw = res.data;
        if(telw == 'true'){
          that.setData({
            tel:true
          })
        }
      }
    })
    wx.getStorage({
      key: 'userName',
      success (res) { 
        const userName = res.data;
        if(userName){
          that.setData({
            userName:userName
          })
        }
      }
    })

  },
  onShow(){
    console.log('页面展示')
  },
  onHide(){
    console.log('页面隐藏')
  },
  onReady: function () {

  },
  sharemosk(res) {    //分享
    const videoId = this.data.videoId;
    const shareImg1 = this.data.shareImg1;
    const shareImg2 = this.data.shareImg2;
    const shareImgAudio = this.data.shareImgAudio;
    const videoNum = this.data.videoNum;
    console.log(videoId,shareImg1,shareImg2,shareImgAudio)
    wx.navigateTo({
      url: '../testcanvas/testcanvas?videoId='+videoId+'&shareImg1='+shareImg1+'&shareImg2='+shareImg2+'&shareImgAudio='+shareImgAudio+'&videoNum='+videoNum,
    })
  },
  closeshare() {
    let index = this.data.playIndex;
    let videoContext = wx.createVideoContext('video');
    videoContext.play();
    this.setData({
      shareMosk: false,
      isPause: false
    })
  },
  gohome(){
    wx.reLaunch({
      url: '../index/index'
    })
  },
  telval(e){
    this.setData({
      telval:e.detail.value
    })
  },
  savetel(){
    const telval = this.data.telval;
    const that = this ;
    console.log(telval)
    var re = /^1\d{10}$/
    if(!re.test(telval)) {
      wx.showToast({
        title: '请输入正确的手机号！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    
    wx.login({
      success(res) {
        console.log(res)
        const code = res.code;
        wx.request({
          url: jiekouUrl+'/api/wx/authLogin', 
          method:'POST',
          data: {
            code: code ,
            userFromType:'10',
            mobile:   telval 
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            console.log(res)
            if(res.data.code == '1'){
              wx.setStorage({
                key:"telw",
                data:'true'
              }) 
              that.setData({
                tel:true
              })   
            }else{
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000
              })
            }           
          },
          fail:function(err){
            console.log(err)
            wx.showToast({
              title: err.msg,
              icon: 'none',
              duration: 2000
            })
          }
        })

      }
    })


    wx.showToast({
      title: '提交成功',
      icon: 'none',
      duration: 2000
    })
    
  },
  saveVideo(e){
    wx.showLoading({
      mask:true,
      title: '下载中',
    })
    this.setData({
      btnact:'2'
    })
    let videoUrl = this.data.videoSrc;
    wx.downloadFile({
      url: videoUrl, //下载资源的地址网络
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success (res) {
            console.log(res)
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail(err){
            console.log(err);
            wx.showModal({
              title: '提示',
              content: '已拒绝保存，请重新设置小程序权限',
              success(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        })
      },
      fail(err){
        console.log(err)
        wx.hideLoading()
        wx.showToast({
          title: '下载失败！',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  go1(){
    
    const vid = this.data.videoId;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        delVideo(res.data,vid);
        wx.navigateBack({
          delta: 4
        })
      }
    })
    
  },
  go2() {
   
    const vid = this.data.videoId;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        delVideo(res.data,vid);
        wx.navigateBack({
          delta: 3
        })
      }
    })
  },
  go3() {
   
    const vid = this.data.videoId;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        delVideo(res.data,vid);
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  delvideo(){
   
    const vid = this.data.videoId;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        delVideo(res.data,vid)
        wx.reLaunch({
          url: '../index/index'
        })
      }
    })
  },
  hideredact(){
    this.setData({
      redact: false,
    })
  },
  showredact(){
    this.setData({
      redact: true,
    })
  },
  onShareAppMessage: function (res) {
    // const videoid = res.target.dataset.videoid;
    // const cover = res.target.dataset.cover;
    const videoid = this.data.videoId;
    const cover = this.data.thumbnailImg;
    const userName = this.data.userName;
    console.log(videoid,cover)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      return {
        title: userName+'的作品',
        path: '/pages/share/share?videoid='+videoid,
        imageUrl:cover
      }
    }else{
      return {
        title: '家国影像馆',
        path: '/pages/index/index',
        imageUrl:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/shareimg.png'
      }
    }
  }
})