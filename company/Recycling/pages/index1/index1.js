// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: true,
    userInfo: {},
    resultse: false,
    animationData: {},
    inputvalue: '',
    gotop: 0,
    searchcon: [
      { name: '1', msg: '介绍1' },
      { name: '2', msg: '介绍2' },
      { name: '3', msg: '介绍3' },
      { name: '4', msg: '介绍4' },
      { name: '5', msg: '介绍5' }
    ],
    timeout: () => { }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息   已授权过执行
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.setData({
                userInfo: res.userInfo
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  bindGetUserInfo: function (e) {   //获取用户授权  可以在这里判断如果用户不同意该怎么执行
    console.log(1)
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  nameinput: function (e) {
    // console.log(e.detail.value)
    // console.log(this.data.userInfo)

    this.setData({
      inputvalue: e.detail.value
    })
    var appthis = this;
    if (!!e.detail.value) {
      // 采用防冻策略优化请求次数
      //函数防抖  flag  true 立马执行 ，false 最后执行
      let that = this;
      clearTimeout(this.data.timeout)
      this.data.timeout = setTimeout(function () {
        let secrchArr = [];
        let seachNum = Math.random() * 10 + 1;
        for (let i = 1; i < seachNum; i++) {
          var json = {};
          json.name = e.detail.value;
          json.msg = '介绍' + i;
          secrchArr.push(json)
        }
        console.log(secrchArr)
        that.setData({
          searchcon: secrchArr,
          gotop: 0,
          resultse: !!e.detail.value
        })
        // 添加动效
        let heicon = 110 * parseInt(seachNum > 4 ? 4 : seachNum)
        console.log(heicon, seachNum)
        that.animation.height(heicon + 'rpx').step()
        that.setData({
          animationData: that.animation.export()
        })
      }, 1000)
    } else {
      clearTimeout(this.data.timeout)
      appthis.animation.height(0).step()
      appthis.setData({
        animationData: appthis.animation.export()
      })
    }


  },
  selectRes: function (e) {
    console.log(e.currentTarget.dataset.msg)
    this.setData({
      inputvalue: e.currentTarget.dataset.msg
    })
  },
  submit: function () {
    console.log(this.data.inputvalue)
    if (!!this.data.inputvalue) {
      wx.showLoading({
        title:'查询中',
        mask:true
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)      
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

  }
})