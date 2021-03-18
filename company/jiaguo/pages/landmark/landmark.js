const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
let tem1_1 ,tem1_2;
Page({
  data: {
    imgUrls: [],
    firstIn:true,
    swiperIndex: 0,
    landmark:'',

  },
  onLoad: function (options) {
    console.log(options)
    const that = this;
    let postDta = {};
    const addname = options.addname || '';
    const userid = options.userid || '';
    const vid = options.vid || '';

    this.setData({
      landmark:addname,
      userid:userid
    })
    if(vid){
      postDta =  {
        vid:vid,
      }
    }else{
      postDta =  {
        userId:userid,
        type : 'video_template_m1' ,
        cname : addname,
      }
    }
    console.log(postDta)
    wx.request({
      url: jiekouUrl+'/api/jgyx/templateList', 
      method:'POST',
      data:postDta,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res)      
        if(res.data.code == '1'){
          if(res.data.data.allCount < 1){
            wx.showModal({
              content: '该地区后台未配置信息，请选择其他地区',
              success (res) {
                wx.redirectTo({
                  url: '../site/site'
                })          
              }
            })   
          }else{
            that.setData({
              imgUrls:res.data.data.templateList
            })  
          }        
        }else{         
          wx.showModal({
            content: res.data.msg,
            success (res) {
              wx.reLaunch({
                url: '../index/index'
              })          
            }
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
    wx.getStorage({
      key: 'tem1_1',
      success (res) { 
        tem1_1 = JSON.parse(res.data);
      }
    })
    wx.getStorage({
      key: 'tem1_2',
      success (res) { 
        tem1_2 = JSON.parse(res.data);
      }
    })
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current,
      firstIn:false
    })
    console.log(e.detail.current)
  },
  beginMake(){
    const index = this.data.swiperIndex;
    const temList = this.data.imgUrls;
    const userid = this.data.userid;
    const temId = temList[index].id;

    wx.request({
      url: jiekouUrl+'/api/jgyx/templateDetails', 
      method:'POST',
      data: {
        userId:userid,
        type : 'video_template_m1' ,
        tid:temId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res)
       
        if(res.data.code == '1'){
          const temMsg = res.data.data.template;
          
          temMsg.themeScenes[0].fileList[0].url = tem1_1.imgUrl;   //图片
          temMsg.themeScenes[0].title = tem1_1.imgMsg ;
          temMsg.themeScenes[0].titleFontSize = '53'; 
          temMsg.themeScenes[1].fileList[0].url = tem1_2.imgUrl ;  //图片
          temMsg.themeScenes[1].title = tem1_2.imgMsg ;
          temMsg.themeScenes[1].titleFontSize = '53'; 
          const temStr = JSON.stringify(temMsg)
          wx.setStorage({
            key:"tem1",
            data:temStr
          })
          wx.navigateTo({
            url: '../chooseMusic/chooseMusic?sort=1',
          })
        }else{
          wx.showModal({
            content: '模板生成失败',
            success (res) {
              wx.reLaunch({
                url: '../index/index'
              })          
            }
          })
        }           
      },
      err:function(err){
        console.log(err)
        wx.showModal({
          content: '系统错误',
          success (res) {
            wx.redirectTo({
              url: '../index/index'
            })         
          }
        })
      }
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