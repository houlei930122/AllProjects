// pages/garbageLibrary/garbageLibrary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    shareId:'',
    shareSort:'',
    shareImg:'',
    shareDate:'',
    shade:false,
    sort:{
      sort1:[
        {
          url:'../../images/bg.png',
          date:'02/28',
          id:'121',
          sort:'1'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'2'
        }
      ],
      sort2:[
        {
          url:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          date:'02/28',
          id:'121',
          sort:'1'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'2'
        },{
          url:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          date:'02/28',
          id:'121',
          sort:'3'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'4'
        }
      ],
      sort3:[],
      sort4:[
        {
          url:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          date:'02/28',
          id:'121',
          sort:'1'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'2'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'3'
        },{
          url:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          date:'02/28',
          id:'121',
          sort:'4'
        },{
          url:'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          date:'02/28',
          id:'121',
          sort:'1'
        }
      ],
    }
  },
  switchTab(e){
    let id = e.currentTarget.dataset.id;
    console.log(id)
    this.setData({
      status:id
    })
  },
  slip(e){
    console.log(e.detail.current)
    let index = e.detail.current ;
    this.setData({
      status: index
    })
  },
  goshare(e){  //点击查看详情
    let id = e.currentTarget.dataset.id;
    let sort = e.currentTarget.dataset.sort;
    let url = e.currentTarget.dataset.img;
    let date = e.currentTarget.dataset.date;
    this.setData({
      shareId:id,
      shareSort:sort,
      shareImg:url,
      shareDate:date,
      shade:true
    })

    console.log(id,sort,url,date)
  },
  hideShare(){
    this.setData({
      shade:false
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
  onShareAppMessage: function (res) {
    console.log(this.data.shareId)
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res)
        let param = encodeURIComponent(`id=${this.data.shareId}&sort=${this.data.shareSort}&img=${this.data.shareImg}`)
        
        return {
          title: '垃圾去哪儿',
          path: '/pages/share/share?param='+param,
          imageUrl:'../../images/share_img.jpg'
        }
      }
      return {
        title: '垃圾识别',
        path: '/pages/index/index',
        imageUrl:'../../images/share_img.jpg'
      }
  }
})