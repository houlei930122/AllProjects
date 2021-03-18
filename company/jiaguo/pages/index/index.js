// 接口域名
// https://standsbup.com/jiaguoadmin/api/jgyx/videoDetails
const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
import promisify from '../../utils/promisify.js'

function PrefixZero(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}
//获取应用实例
const app = getApp()
const pageSize = 10;
let pageNo = 1;
let userId , userName,isWho;  //1我的。2上传

function logoin(that){
  wx.login({
    success(res) {
      console.log(res)
      const code = res.code;
      wx.request({
        url: jiekouUrl+'/api/wx/authLogin', 
        method:'POST',
        data: {
          code: code ,
          userFromType:'10'    
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          console.log(res)
          if(res.data.code == '1'){
            that.setData({
              userInfo: res.data.data     
            })
            wx.setStorage({
              key:"userId",
              data:res.data.data.id
            })
            wx.setStorage({
              key:"userImg",
              data:res.data.data.headImgUrl
            })
            wx.setStorage({
              key:"userName",
              data:res.data.data.userName
            })
            if(!res.data.data.userName && !res.data.data.headImgUrl){ 
              that.setData({
                hasUserInfo : true    
              })            
            }else if( isWho == 1 ){
              wx.navigateTo({
                url: '../my/my'  
              })
            }else if( isWho == 2 ){
              const userid = that.data.userInfo.id
              wx.navigateTo({
                url: '../sort/sort?userid='+userid,    
              })
            }
            // getInfo(that,res.data.data.id);  //待删          
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
}

function getInfo(that,id){
  if (app.globalData.userInfo) {
    getAllInfo(that,id,app.globalData.userInfo.encryptedData,app.globalData.userInfo.iv)
  } else if (that.data.canIUse){
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    app.userInfoReadyCallback = res => {
      getAllInfo(that,id,res.encryptedData,res.iv)
    }
  } else {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res
        getAllInfo(that,id,res.encryptedData,res.iv)
      }
    })
  }
}
function getAllInfo(that,userId,encryptedData,iv){
  wx.login({
    success(res) {
      // console.log(res)
      wx.request({
        url: jiekouUrl+'/api/wx/saveWxUser', 
        method:'POST',
        data: {
          userId: userId ,
          code:res.code,
          encryptedData: encryptedData ,
          iv:iv      
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success (res) {
          if(res.data.code == '1'){
              that.setData({
                userInfo: res.data.data,
                hasUserInfo: false
              })
              wx.setStorage({
                key:"userImg",
                data:res.data.data.headImgUrl
              })
             
              wx.setStorage({
                key:"userName",
                data:res.data.data.userName
              })
              wx.setStorage({
                key:"userId",
                data:res.data.data.id
              })
              if(isWho == 1){
                wx.navigateTo({
                  url: '../my/my'  
                })
              }else if(isWho == 2){
                const userid = that.data.userInfo.id
                wx.navigateTo({
                  url: '../sort/sort?userid='+userid,    
                })
              }
              // console.log(that.data.userInfo)
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

}
// 获取视频列表
function getVideoList(that,page){
  const cid = that.data.sort;
  console.log('cid:'+cid)
  wx.request({
    url: jiekouUrl+'/api/jgyx/videoList', 
    method:'POST',
    data: {
      type : '10' ,
      pageSize : pageSize,
      cid:  cid,
      pageNo : page
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success (res) {
      console.log(res)
      if(res.data.data.allCount<1){
        wx.showModal({
          content: '该地区没有作品',
          success (res) {
            wx.navigateTo({
              url: '../index/index'   
            })             
          }
        })
      }

      let videoArr = that.data.tipList;
      if(res.data.code == '1'){
        pageNo++
        let newArr = videoArr.concat(res.data.data.videoList)
        that.setData({
          tipList:newArr,
          tipSum:res.data.data.allCount
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

Page({
  data: {
    animationData: {},
    playIndex : 0,
    isPause:false,
    tipList:[],
    tipSum:10,
    canIUse : wx.canIUse('button.open-type.getUserInfo'),
    userInfo : {},
    hasUserInfo : false,
    touchS : [0,0],
    touchE : [0,0],
    sort:'',
    zanArr:[],
    w : '',
    h : '',
    gap:false,                   //视频切换间隔  
    shareMosk:false,
    shareid:'',
    sharecover:'',
    sharevideo:''              
  },
  onLoad: function (option) {
    
    console.log(option)
    // 是否是热门 cid
    if(option.cid){
      console.log('热门')
      this.setData({
        sort:option.cid
      })
       getVideoList(this,pageNo)
    }else{
      console.log('推荐')
      getVideoList(this,pageNo)
    }
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    this.animation = animation;
    const that = this ;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        that.setData({
          userId:res.data
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
  onReady(){
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        if(res.windowHeight < 700){
          that.setData({
            footerH:true
          })
        }
        that.setData({
          w:res.windowWidth,
          h:res.windowHeight
        })
      }
    })
  },
  tip(){
    let cid = this.data.sort;
    if(cid){
      wx.navigateTo({
        url: '../index/index'   
      })
    }
  },
  hot(){
    let cid = this.data.sort;
    wx.navigateTo({
      url: '../hot/hot?cid='+cid   
    })
  },
  gomy(){
    isWho = 1;
    if(userId && userName){
      wx.navigateTo({
        url: '../my/my'  
      })
    }else{
      logoin(this)
    } 
  },
  zan(e){
    let zanid = e.currentTarget.dataset.videoid;
    let choose = e.currentTarget.dataset.choose;
    let tipList = this.data.tipList;
    let zanArr = this.data.zanArr;
    if(choose){
      let index = zanArr.indexOf(zanid);
      if (index > -1) {
        zanArr.splice(index, 1);
      }
      this.setData({
        zanArr : zanArr
      })
      for( let i = 0 ; i < tipList.length ;i++){
        if(tipList[i].id == zanid){
          tipList[i].voteNum--          
          this.setData({
            tipList:tipList
          })
        }
      }

    }else{
      zanArr.push(zanid);
      this.setData({
        zanArr : zanArr
      })
      for( let i = 0 ; i < tipList.length ;i++){
        if(tipList[i].id == zanid){
          tipList[i].voteNum++         
          this.setData({
            tipList:tipList
          })
          wx.request({
            url: jiekouUrl+'/api/jgyx/voteByUid', 
            method:'POST',
            data: {
              vid : zanid,
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
      }

    }
   
  },

  bindGetUserInfo (res) {
    console.log(res)
    if(res.detail.iv){
      getAllInfo(this,this.data.userInfo.id,res.detail.encryptedData,res.detail.iv)
    }else{
      wx.showToast({
        title: '授权失败!',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        hasUserInfo : false    
      })
    }    
  },
  update(e){
    console.log(e)
  },
  ballClickEvent(e){
    // console.log('点击了')
    let index = this.data.playIndex;
    let pauseSign = this.data.isPause;
    if(pauseSign){
      let videoContext = wx.createVideoContext('video'+index);
      videoContext.play();
      this.setData({
        isPause:false
      })
    }else{
      let videoContext = wx.createVideoContext('video'+index);
      videoContext.pause();
      this.setData({
        isPause:true
      })
    } 
  },
  touchStart(e){
    let touchs = e.touches[0]; 
    let pageX = touchs.pageX; 
    let pageY = touchs.pageY; 
    this.data.touchS = [pageX,pageY];
    this.data.touchE = [pageX,pageY];
  },
  touchMove(e) { 
    let touchs = e.touches[0]; 
    let pageX = touchs.pageX; 
    let pageY = touchs.pageY; 
    this.data.touchE = [pageX,pageY];
  },
  touchEnd(e){

    if(this.data.gap){     
      return
    }
    let start = this.data.touchS;
    let end = this.data.touchE;
    let hei = this.data.h;
    let index = this.data.playIndex;
    let preIndex = index;
    if(start[1] > end[1]+50 ){
      this.setData({
        isPause:false
      })
        // console.log('上滑')
        let sumNum = this.data.tipSum;
        let nowNum =  this.data.tipList.length;
        if(nowNum - index < 3 && sumNum != nowNum){
          getVideoList(this,pageNo)
        }
        if(nowNum-1 != index){
          let videoContextPrev = wx.createVideoContext('video'+preIndex);
          videoContextPrev.pause();
          index++
          this.setData({
            playIndex:index
          })
          // console.log(index)
          let videoContext = wx.createVideoContext('video'+index);
          videoContext.play();
          videoContext.seek(0);
          this.animation.translateY(-hei*index).step()
          this.setData({
            animationData:this.animation.export()
          })
          this.setData({
            gap:true
          })
          setTimeout(()=>{
            this.setData({
              gap:false
            })
          },1000)
        }else{
          const sumArr = this.data.tipList;
          let newArr = sumArr.concat(sumArr)
          this.setData({
            tipList:newArr,
          })
          // wx.showToast({
          //   title: '没有数据了，去上传自己的作品吧',
          //   mask:false,
          //   icon: 'none',
          //   duration: 2000
          // })          
          console.log('没有数据了')
          console.log(this.data.tipList)
        }
        
    }else if(start[1] < end[1]-50 ){
      this.setData({
        isPause:false
      })
      // console.log('下滑')
      index--
      if(index < 0){
        index = 0 ;
      }else{
        let videoContextPrev = wx.createVideoContext('video'+preIndex);
        videoContextPrev.pause();
        this.setData({
          playIndex:index
        })
        let videoContext = wx.createVideoContext('video'+index);
        videoContext.play();
        videoContext.seek(0);
        this.animation.translateY(-hei*index).step()
        this.setData({
          animationData:this.animation.export()
        })
        this.setData({
          gap:true
        })
        setTimeout(()=>{
          this.setData({
            gap:false
          })
        },1000)
      } 
    }
    
  },
  onShow(){

  },
  goupimg(){
    isWho = 2;
    const userid = this.data.userInfo.id;
    if(userId && userName){
      wx.navigateTo({
        url: '../sort/sort?userid='+userid,    
      })
    }else{
      logoin(this)
    } 
   
  },
  sharemosk(res) {    //分享
    const videoid = res.target.dataset.videoid;
    const cover = res.target.dataset.cover;
    const sharevideo = res.target.dataset.sharevideo;
    const userName = res.target.dataset.username;

    let index = this.data.playIndex;
    let videoContext = wx.createVideoContext('video' + index);
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
    let videoContext = wx.createVideoContext('video' + index);
    videoContext.play();
    this.setData({
      shareMosk: false,
      isPause: false
    })
  },
  savecard(){   //保存卡片
    var  vIndex = this.data.playIndex;
    console.log(vIndex)
    var  vMsg =  this.data.tipList[vIndex];
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
  playerr(e){
    wx.showToast({
      title: '视频加载失败'+e,
      icon: 'none',
      duration: 2000
    })
  },
  onShareAppMessage: function (res) {
    const videoid = this.data.shareid;
    const cover = this.data.sharecover;
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
      path: '/pages/index/index',
      imageUrl:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/shareimg.png'
    }
  }

})
