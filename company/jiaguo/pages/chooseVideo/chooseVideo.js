const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
var userid ,tem2_1 ,tem2_2;
Page({
  data: {
    videoSrc:'',
    duration:'',
    temid:'',
    yindao:true,
  },
  onLoad: function (options) {
    // console.log(options.userid)
    // userid = options.userid;
    const that = this;
    wx.getStorage({
      key: 'userId',
      success (res) { 
        userid = res.data;
        wx.request({
          url: jiekouUrl+'/api/jgyx/templateList', 
          method:'POST',
          data: {
            userId:userid,
            type : 'video_template_m2' ,
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success (res) {
            console.log(res)      
            if(res.data.code == '1'){
              that.setData({
                temid:res.data.data.templateList[0].id
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
    wx.getStorage({
      key: 'tem2_1',
      success (res) { 
        tem2_1 = JSON.parse(res.data);
      }
    })
    wx.getStorage({
      key: 'tem2_2',
      success (res) { 
        tem2_2 = JSON.parse(res.data);
      }
    })
    const v = options.v;
    if(v == '1'){
      this.setData({
        yindao:false
      })
    }
  },
  delvideo(){
    this.setData({
      videoSrc:''
    })
  },  
  closehint(){
    this.setData({
      yindao:false
    })
  },
  chooseVideo(e){
    const that = this;
    wx.chooseVideo({
      sourceType: ['album','camera'],
      compressed:true,   //是否压缩视频文件
      maxDuration: 10,
      camera: 'back',
      success(res) {
        console.log(res)   
        that.setData({
          duration:res.duration
        })
        // if(res.duration > 3){
        //   wx.showModal({
        //     title: '提示',
        //     content: '视频长度太长了',
        //     success (res) {
        //       if (res.confirm) {
        //         console.log('用户点击确定')
        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        //   })
        // }else{   
          wx.showLoading({
            mask:true,
            title: '上传中',
          })
          wx.uploadFile({
            url: jiekouUrl+'/api/jgyx/uploadFile', //仅为示例，非真实的接口地址
            filePath: res.tempFilePath,
            name: 'fileObj',
            header:{
              'content-type':'multipart/form-data'
            },
            formData: {
              'fileType':'20'   
            },
            success (res){
              wx.hideLoading()
              // const data = res.data
              console.log(res)
              if( Object.prototype.toString.call(res.data) == '[object String]' ){
                const jsonObj = JSON.parse(res.data);
                // console.log(jsonObj.data.url)
                that.setData({
                  videoSrc:jsonObj.data.url
                })
              }else{
                that.setData({
                  videoSrc:res.data.data.url,
                  duration:that.data.duration
                })
              }
            }
          }) 
        // }  
      }
    })
  },
  nextCreate(){
    const videoSrc = this.data.videoSrc;
    const duration = this.data.duration;
    const temid = this.data.temid;
    console.log(videoSrc,duration,temid)
    

    wx.request({
      url: jiekouUrl+'/api/jgyx/templateDetails', 
      method:'POST',
      data: {
        userId:userid,
        type : 'video_template_m2' ,
        tid:temid,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success (res) {
        console.log(res)
       
        if(res.data.code == '1'){
          const temMsg = res.data.data.template;
          temMsg.sampleUrl = videoSrc;
          temMsg.start = duration;

          temMsg.themeScenes[0].fileList[0].url = tem2_1.imgUrl   //图片
          temMsg.themeScenes[0].title = tem2_1.imgMsg 
          temMsg.themeScenes[0].titleFontSize = '53'; 
          temMsg.themeScenes[1].fileList[0].url = tem2_2.imgUrl   //图片
          temMsg.themeScenes[1].title = tem2_2.imgMsg 
          temMsg.themeScenes[1].titleFontSize = '53'; 
          const temStr = JSON.stringify(temMsg)
          wx.setStorage({
            key:"tem2",
            data:temStr
          })
          wx.navigateTo({
            url: '../chooseMusic/chooseMusic?sort=2',
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
            wx.reLaunch({
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