function inquire(val){
  // console.log(val)
  var that = this;
  wx.showLoading({
    title:'查询中',
    mask:true
  })
  wx.request({
    url: 'https://adadmin.thepaper.cn/api/rubbish/likeName', 
    data: {
      keyWord: val,
      type:'1'
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) {
      console.log(res.data)
      wx.hideLoading()
      if(res.data.length == '0'){
        that.setData({
          showstatus:-1 
        })
      }else{
        that.setData({
          showstatus:res.data[0].cid
        })
      }
     
    }
  })
}
/**
 * 干垃圾	1
 * 湿垃圾	2
 * 可回收物	3
 * 有害垃圾	4
 * 大件垃圾	5
 * 装修垃圾	6
 * 不属于日常生活垃圾	7
 *  */
Page({
  data: {
    inputvalue:'',
    resultse:false,
    animationData: {},
    searchcon: [
      
    ],
    gotop: 0,
    hint:false,
    timeout: () => { },
    showstatus:0,      //0 默认 1可回,2干,3湿,4有害，-1无 
    collect:true,
    imgUrl:'https://adproject.thepaper.cn/adproject/2019/6/recycling/code.jpg',
    author:false,
    savecode:false
  },
  inputval(e){  //input输入查询模糊匹配
  
    let inputval = e.detail.value ;
    this.setData({
      inputvalue:inputval
    })
    if (!!inputval) {
      // 采用防冻策略优化请求次数
      //函数防抖  flag  true 立马执行 ，false 最后执行
      let that = this;
      clearTimeout(this.data.timeout)
      this.data.timeout = setTimeout(function () {

        wx.request({
          url: 'https://adadmin.thepaper.cn/api/rubbish/likeName', 
          data: {
            keyWord: inputval,
            type:'0'
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {        
            let data = res.data;
            let len = data.length;
            // console.log(data)
            if( len == '0'){
              clearTimeout(that.data.timeout)
              that.animation.height(0).step()
              that.setData({
                animationData: that.animation.export(),
                resultse:false
              })
                return
            }else{
              that.setData({
                searchcon: data,
                gotop: 0,
                resultse: !!e.detail.value
              })
              // 添加动效
              let heicon = 82 * (len > 6 ? 5.5 : parseInt(len))
              that.animation.height(heicon + 'rpx').step()
              that.setData({
                animationData: that.animation.export()
              })
            }

          }
        })
      }, 500)
    } else {
      clearTimeout(this.data.timeout)
      this.animation.height(0).step()
      this.setData({
        animationData: this.animation.export(),
        resultse:false
      })
    }

  },
  searchfun(){     //查询数据
    clearTimeout(this.data.timeout)
    this.setData({
      resultse:false
    })
    if (!!this.data.inputvalue) {
      inquire.call(this,this.data.inputvalue)
    } else {
      wx.showModal({
        title: '提示',
        content: '请输入搜索内容',
        success(res) {
          if (res.confirm) {
            console.log('用户点击了确认')
          } else if (res.cancel) {
            console.log('用户点击了取消')
          }
        }
      })
    }
  },
  selectRes(e){   //模糊提示列表
    // console.log(e.currentTarget.dataset.msg)
    clearTimeout(this.data.timeout)
    this.setData({
      inputvalue: e.currentTarget.dataset.msg,
      resultse:false
    })
    inquire.call(this,this.data.inputvalue);

   
  },
  shade(){
    this.setData({
      hint:true
    })
  },
  closehint(){
    this.setData({
      hint:false
    })
  },
  showcode(){
    this.setData({
      savecode:true
    })
  },
  collect_c(){
    this.setData({
      collect:false
    })
  },
  cancel(){
    this.setData({
      author:false,
      savecode:false
    })
  },
  saveimg(){
    let that = this
    //若二维码未加载完毕，加个动画提高用户体验
    wx.showToast({
      icon: 'loading',
      title: '正在保存图片',
      duration: 1000
    })
    //判断用户是否授权"保存到相册"
    wx.getSetting({
      success (res) {
        //没有权限，发起授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {//用户允许授权，保存图片到相册        
              that.savePhoto();
            },
            fail () {//用户点击拒绝授权，跳转到设置页，引导用户授权            
              that.setData({
                author:true
              })
            }
          })
        } else {//用户已授权，保存到相册
          that.savePhoto()
        }
      }
    })
  },
//下载图片地址并保存到相册，提示保存成功
  savePhoto() {
    console.log(2)
    let that = this
    wx.downloadFile({
      url: that.data.imgUrl,
      success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon: "success",
              duration: 1000
            })
            that.setData({
              author:false,
              savecode:false
            })
          }
        })
      }
    })
  },
  openSetting(){
    let that = this;
    wx.openSetting({
      success () {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            that.savePhoto();
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    });
    this.animation = animation
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
    return {
      title: '垃圾识别',
      path: '/pages/index/index',
      imageUrl:'../../images/share_img.jpg'
    }
  }
})