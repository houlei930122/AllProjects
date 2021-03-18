// pages/testcanvas/testcanvas.js
import promisify from '../../utils/promisify.js'
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
let videoId,shareImg1,shareImg2,shareImgAudio,codeImg,videoNum;
function PrefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}
Page({
  data: {
    srcImg:'',
  },
  onLoad: function (options) {
    const that = this;
    wx.getStorage({
      key: 'userName',
      success (res) { 
        that.setData({
          userName:res.data
        })
      }
    })
    videoId = options.videoId || 454;
    videoNum = options.videoNum || 1123;
    videoNum = PrefixZero(videoNum,8);
    shareImg1 = options.shareImg1 || ' https://jiaguoprod.oss-cn-shanghai.aliyuncs.com/jiaguoprod/20190911/null-0075ad80-1928-48b4-9561-12a3a18efaea.jpg';
    shareImg2 = options.shareImg2 || ' https://jiaguoprod.oss-cn-shanghai.aliyuncs.com/jiaguoprod/20190911/null-cda782a4-e6aa-4b1d-9a56-8cdee88f51e8.jpg';
    shareImgAudio = options.shareImgAudio || 'https://jiaguoprod.oss-cn-shanghai.aliyuncs.com/shareshow1/c1.png';
    // shareImgAudio = 'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/c_1.png';
    console.log(videoId,shareImg1,shareImg2,shareImgAudio)
    // wx.loadFontFace({
    //   family: 'cfont',
    //   source: 'url("https://adproject.thepaper.cn/adproject/2019/8/jiaguo/c.ttf")',
    //   success: function(e){
    //     console.log(e)
    //   }
    // })
    wx.getStorage({
      key: 'userId',
      success (res) { 
        const userId = res.data;
        wx.request({
          url: jiekouUrl+'/api/jgyx/getCode', 
          method:'POST',
          data: {
            userId:userId,
            path : "pages/share/share?videoid="+videoId,
            width:'300'
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            console.log(userId,videoId)
            console.log(res)          
            if(res.data.code == '1'){
              codeImg = res.data.data.url;
              wx.showLoading({
                mask:true,
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
                        that.setData({
                          srcImg:res.tempFilePath
                        })
                        wx.hideLoading()
                        console.log(that.data.srcImg)
                        // wx.getFileSystemManager().readFile({
                        //   filePath: res.tempFilePath, //选择图片返回的相对路径
                        //   encoding: 'base64', //编码格式
                        //   success: res => { //成功的回调
                        //     let base = 'data:image/png;base64,' + res.data;
                        //     console.log(base)
                            
                        //   }
                        // })
              
                      })
                    })            
                  }).catch(()=>{
                    wx.hideLoading()
                    wx.showModal({
                      content: '图片生成失败，请稍后重试!',
                      success (res) {
                        wx.redirectTo({
                          url: '../index/index'
                        })          
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
    })
    
  
  },

  saveimg(){
    const that = this;
    wx.showLoading({
      mask:true,
      title: '海报保存中...',
    })
    console.log(that.data.srcImg)
    // wx.downloadFile({
    //   url: that.data.srcImg,
    //   success: function (res) {
    //     console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: that.data.srcImg,
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

   

  },
  onReady: function () {

  },
  onShareAppMessage: function () {
    // const videoid = videoId;
    const cover = this.data.srcImg;
    const userName = this.data.userName;
    return {
      title: userName+'的作品',
      path: '/pages/share/share?videoid=' + videoId,
      imageUrl:cover
    }
  }
})