//index.js
//获取应用实例
const app = getApp()
const pageSize = 10;
let pageNo = 1;

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
        url: 'https://standsbup.com/jiaguoadmin/api/wx/saveWxUser', 
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
                hasUserInfo: true
              })
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
function getVideoList(that,page,fn){
  wx.request({
    url: 'https://standsbup.com/jiaguoadmin/api/jgyx/videoList', 
    method:'POST',
    data: {
      type : '10' ,
      pageSize : pageSize,
      pageNo : page
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success (res) {
      console.log(res)
      let videoArr = that.data.tipList;
      if(res.data.code == '1'){
        pageNo++
        let newArr = videoArr.concat(res.data.data.videoList)
        that.setData({
          tipList:newArr,
          tipSum:res.data.data.allCount
        })
        if(fn){
          fn()
        }
        
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
    sort:'推荐',
    w : wx.getSystemInfoSync().windowWidth,
    h : wx.getSystemInfoSync().windowHeight,
    gap:false,                   //视频切换间隔                
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function (option) {
    console.log(option)
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    this.animation = animation
   

    const that = this ;
    wx.login({
      success(res) {
        // console.log(res)
        const code = res.code;
        wx.request({
          url: 'https://standsbup.com/jiaguoadmin/api/wx/authLogin', 
          method:'POST',
          data: {
            code: code ,
            userFromType:'10'    
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            // console.log(res)
            if(res.data.code == '1'){
              that.setData({
                userInfo: res.data.data     
              })
              getInfo(that,res.data.data.id)
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

    // 获取视频列表
    getVideoList(this,pageNo)

  },
  tip(){
    pageNo = 1 ;
    this.setData({
      playIndex:0,
      sort:'推荐',
      tipList:[]
    })
    console.log(this.data.tipList)
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })
    this.animation = animation
    this.animation.translateY(0).step()
    this.setData({
      animationData:this.animation.export()
    })
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    this.animation = animation
    getVideoList(this,pageNo,function(){
      let videoContext = wx.createVideoContext('video0');
      videoContext.play();
    });
  },
  hot(){
    pageNo = 1 ;
    this.setData({
      playIndex:0,
      sort:'热门',
      tipList:[]
    })
    console.log(this.data.tipList)
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    })
    this.animation = animation
    this.animation.translateY(0).step()
    this.setData({
      animationData:this.animation.export()
    })
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    this.animation = animation
    getVideoList(this,pageNo,function(){
      let videoContext = wx.createVideoContext('video0');
      videoContext.play();
    });
    
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
    }    
  },
  update(e){
    console.log(e)
  },
  ballClickEvent(e){
    console.log('点击了')
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
        console.log('上滑')
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
          console.log(index)
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
          wx.showToast({
            title: '没有数据了，去上传自己的作品吧',
            mask:false,
            icon: 'none',
            duration: 2000
          })          
          console.log('没有数据了')
          console.log(this.data.tipList)
        }
        
    }else if(start[1] < end[1]-50 ){
      this.setData({
        isPause:false
      })
      console.log('下滑')
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
    // setTimeout(()=>{
    //   wx.startPullDownRefresh();
    // },2000)
  },
  goupimg(){
    wx.navigateTo({
      url: '../upimg/upimg?id=123',
     
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  },
  onPullDownRefresh: function () {
    console.log(1)
    setTimeout(function () {
      wx.stopPullDownRefresh();   //得到结果后关掉刷新动画
      console.log('下拉结束')
    }, 2000)
  },
  onReachBottom: function () {
     let temArr = this.data.list;
     console.log(temArr)
    let newArr =  temArr.concat(temArr);
    this.setData({
      list:newArr
    })
    
  },

})
