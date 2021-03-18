var temMsg ,sort;
Page({
  data: {
    musicList:[],
    nowMusicUrl:'',
    nowMusicId:'',
    nowMusicName:'',
    isPlay:false,
    pro:0,
    duration:'00'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    sort = options.sort;
    if(sort == '1'){   //模板1
      wx.getStorage({
        key: 'tem1',
        success (res) { 
          temMsg = JSON.parse(res.data);
          that.setData({
            musicList:temMsg.audioList
          }) 
          that.audioCtx = wx.createAudioContext('myAudio');
          that.audioCtx.play()
          that.setData({
            isPlay:true,
            nowMusicUrl:that.data.musicList[0].audioUrl,
            nowMusicId:that.data.musicList[0].sceneId,
            nowMusicName:that.data.musicList[0].name,
          })
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
          temMsg = JSON.parse(res.data);
          that.setData({
            musicList:temMsg.audioList
          }) 
          that.audioCtx = wx.createAudioContext('myAudio');
          that.audioCtx.play()
          that.setData({
            isPlay:true,
            nowMusicUrl:that.data.musicList[0].audioUrl,
            nowMusicId:that.data.musicList[0].sceneId,
            nowMusicName:that.data.musicList[0].name,
          })
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
  },
  musicpro(e){
    let currentTime =  e.detail.currentTime;
    let duration =  e.detail.duration;
    let pro = currentTime/duration*100;
    this.setData({
      pro:pro,
      duration: parseInt(duration)
    })
  },
  musiconoff(){
    const isPlay = this.data.isPlay;
    if(isPlay){
      this.setData({
        isPlay:false
      })
      this.audioCtx.pause()
    }else{
      this.setData({
        isPlay:true
      })
      this.audioCtx.play()
    }
  },
  switchover(e){
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    const url = e.currentTarget.dataset.url;
    if( id != this.data.nowMusicId){
      this.setData({
        nowMusicUrl:url,
        nowMusicId:id,
        nowMusicName:name,
        pro:0
      })
      this.audioCtx.play();
    }  
  },
  createVideo(){
    const nowMusicUrl = this.data.nowMusicUrl;
    const nowMusicId = this.data.nowMusicId;
    const nowMusicName = this.data.nowMusicName;
    console.log(nowMusicUrl,nowMusicId,nowMusicName)
    console.log(temMsg)
    console.log(sort)
    this.audioCtx.pause()
    temMsg.selectSceneId = nowMusicId
    let temStr = JSON.stringify(temMsg);
    if(sort =='1'){
      wx.setStorage({
        key:"tem1",
        data:temStr
      })
      wx.navigateTo({
        url: '../createVideo/createVideo?sort=1',    
      })
    }else if(sort =='2'){
      wx.setStorage({
        key:"tem2",
        data:temStr
      })
      wx.navigateTo({
        url: '../createVideo/createVideo?sort=2',    
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
    
  },
  
  onShareAppMessage: function () {
    return {
      title: '家国影像馆',
      path: '/pages/index/index',
      imageUrl:'https://adproject.thepaper.cn/adproject/2019/8/jiaguo/shareimg.png'
    }
  }
})