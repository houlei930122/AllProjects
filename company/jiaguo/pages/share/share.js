
// 接口域名
// https://standsbup.com/jiaguoadmin/api/jgyx/videoDetails
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
import promisify from '../../utils/promisify.js'
function PrefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}
Page({
  data: {
    isPause:false,
    videoid:'',
    zan:false,
    shareMosk: false,
    shareid: '',
    sharecover: '',
    sharevideo: ''    
  },
  onLoad: function (options) {
    console.log(options.videoid)
    const videoid = options.videoid || 232
    const that = this;
    if(videoid){
      this.setData({
        videoid:videoid
      })
      wx.request({
        url: jiekouUrl+'/api/jgyx/videoDetails', 
        method:'POST',
        data: {
          vid : videoid,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          console.log(res)          
          if(res.data.code == '1'){
            that.setData({
              video:res.data.data.video
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
  },
  zan(e){
    const that = this;
    let videoid = e.currentTarget.dataset.videoid;
    let voteNum = e.currentTarget.dataset.votenum;
    let zan = this.data.zan;
    let videomsg = that.data.video;
    if(zan){
      videomsg.voteNum = voteNum - 1
      that.setData({
        zan:false,
        video:videomsg
      })

    }else{
      videomsg.voteNum = voteNum + 1
      that.setData({
        zan:true,
        video:videomsg
      })
      wx.request({
        url: jiekouUrl+'/api/jgyx/voteByUid', 
        method:'POST',
        data: {
          vid : videoid,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          // console.log(res)                 
        },
        err:function(err){

        }
      })

    }

  },
  ballClickEvent(e){
    let index = this.data.playIndex;
    let pauseSign = this.data.isPause;
    let videoContext = wx.createVideoContext('sharevideo');
    if(pauseSign){
      videoContext.play();
      this.setData({
        isPause:false
      })
    }else{
      videoContext.pause();
      this.setData({
        isPause:true
      })
    } 
  },
  shareVideo(e){
    console.log(e.currentTarget.dataset.videoid)
    const videoid = e.currentTarget.dataset.videoid;
  },
  savecard(){   //保存卡片

    var  vMsg =  this.data.video;
    var codeImg;
    createC()
    function createC(){
    console.log(vMsg)
    var shareImg1 = vMsg.img1;
    var shareImg2 = vMsg.img2;
    var shareImgAudio = vMsg.imgAudio;
    var videoNum = PrefixZero(vMsg.addNum,8);
    wx.request({
      url: jiekouUrl+'/api/jgyx/getCode', 
      method:'POST',
      data: {
        userId:vMsg.userId,
        path : "pages/share/share?videoid="+vMsg.id,
        width:'300'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res)          
        if(res.data.code == '1'){
          codeImg = res.data.data.url;
          wx.showLoading({
            title: '海报生成中...',
          })
          const downf = promisify(wx.downloadFile);
          const wxGetImageInfo = promisify(wx.getImageInfo)
          const wxCanvasToTempFilePath = promisify(wx.canvasToTempFilePath)
          const wxSaveImageToPhotosAlbum = promisify(wx.saveImageToPhotosAlbum)
          Promise.all([
            downf({
              url: shareImg1
            }),
            downf({
              url: shareImg2
            }),
            downf({
              url: shareImgAudio
            }),
            downf({
              url: codeImg
            }),
          ]).then(res => {
            console.log(res)
            shareImg1 = res[0].tempFilePath;
            shareImg2 = res[1].tempFilePath;
            shareImgAudio = res[2].tempFilePath;
            codeImg = res[3].tempFilePath;
            console.log(shareImg1,shareImg2,shareImgAudio,codeImg)                          
            Promise.all([
                wxGetImageInfo({
                  src: shareImg1
                }),
                wxGetImageInfo({
                  src: shareImg2
                }),
                wxGetImageInfo({
                  src: shareImgAudio
                }),
                wxGetImageInfo({
                    src: codeImg
                })  
            ]).then(res => {
                const ctx = wx.createCanvasContext('shareCanvas')
                // 底图path
                ctx.drawImage(res[0].path, 90, 495, 580, 770) //575, 765,18
                ctx.drawImage(res[1].path, 90, 1318, 580, 770)
                ctx.drawImage(res[2].path, 0, 0, 1125, 2436)
                // 序号
                ctx.font = 'normal 46px normal cfont'
                ctx.setTextAlign('left')    // 文字居中
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                // ctx.setFontSize(46)         // 文字字号：22px
                ctx.setTextBaseline('top')
                ctx.fillText("No."+videoNum, 254, 402)
                // 小程序码
                const qrImgSize = 230
                ctx.drawImage(res[3].path, 100, 2080, qrImgSize, qrImgSize)
                ctx.stroke()
                ctx.draw(true,()=>{
                  wxCanvasToTempFilePath({
                    canvasId: 'shareCanvas',
                    destWidth: 1125,
                    destHeight: 2436,
                    fileType:'jpg',
                    quality:0.8
                  }, this).then(res=>{
                    console.log(res)
                    wx.saveImageToPhotosAlbum({
                      filePath: res.tempFilePath,
                      success(res) {         
                        wx.showModal({
                          title: '',
                          content: '海报已保存到相册快去分享给小伙伴吧',
                          showCancel:false,
                          confirmColor:'#03C160',
                          success(res) {
                           
                          }
                        })
                        wx.hideLoading()
                      },
                      fail(err){
                        wx.hideLoading()
                        console.log(err);
                        wx.showModal({
                          title: '提示',
                          content: '已拒绝保存，请重新设置小程序权限',
                          showCancel:false,
                          success(res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                        wx.hideLoading()
                      }
                    })
                  })
                })            
              }).catch(()=>{
                wx.hideLoading()
                wx.showModal({
                  content: '图片生成失败，请稍后重试!',
                  confirmText: '重试',
                  success (res) {
                    if (res.confirm) {
                      createC()
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }  
                  }
                })   
              })
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

  }
  },
  sharemosk(res) {    //分享
    const videoid = res.target.dataset.videoid;
    const cover = res.target.dataset.cover;
    const sharevideo = res.target.dataset.sharevideo;
    const userName = res.target.dataset.username;
    let index = this.data.playIndex;
    let videoContext = wx.createVideoContext('sharevideo');
    videoContext.pause();
    this.setData({
      shareMosk: true,
      shareid: videoid,
      sharecover: cover,
      sharevideo: sharevideo,
      userName:userName,
      isPause: true,

    })
  },
  closeshare() {
    let index = this.data.playIndex;
    let videoContext = wx.createVideoContext('sharevideo');
    videoContext.play();
    this.setData({
      shareMosk: false,
      isPause: false
    })
  },
  saveVideo(e) {    //下载视频
    wx.showLoading({
      mask: true,
      title: '下载中',
    })
    let videoUrl = this.data.sharevideo;
    wx.downloadFile({
      url: videoUrl, //下载资源的地址网络
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            console.log(res)
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail(err) {
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
      fail(err) {
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
  gohome(){
    wx.reLaunch({
      url: '../index/index' 
    })
  },
  onShareAppMessage: function (res) {
    console.log(this.data.videoid)
    const videoid = this.data.videoid;
    const cover = this.data.video.imgUrl;
    const userName = this.data.userName;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      return {
        title: userName+'的作品',
        path: '/pages/share/share?videoid='+videoid,
        imageUrl:cover
      }
    }
    return {
      title: '家国影像馆',
      path: '/pages/share/share?videoid='+videoid,
      imageUrl:cover
    }
  }
})