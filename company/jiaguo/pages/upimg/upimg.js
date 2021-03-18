/**
 * Created by sail on 2017/6/1.
 */
import WeCropper from '../we-cropper/we-cropper.js'
const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight-50

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      targetId: 'targetCropper',
      pixelRatio: device.pixelRatio,
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300
      },
      boundStyle: {
        color: '#cccc',
        mask: 'rgba(0,0,0,0.8)',
        lineWidth: 1
      }
    },
    cropperShow:false,
    clipSrc:''

  },
  touchStart(e) {
    this.cropper.touchStart(e)
  },
  touchMove(e) {
    this.cropper.touchMove(e)
  },
  touchEnd(e) {
    this.cropper.touchEnd(e)
  },
  back(){
    wx.navigateTo({
      url: '../index/index?id=1',
    })
  },
  getCropperImage() {
    const self = this ;
    this.cropper.getCropperImage()
      .then((src) => {
        self.setData({
          clipSrc:src,
          cropperShow : false
        })
        console.log(src)
        wx.uploadFile({
          url: 'https://standsbup.com/jiaguoadmin/api/jgyx/uploadFile', //仅为示例，非真实的接口地址
          filePath: src,
          name: 'fileObj',
          header:{
            'content-type':'multipart/form-data'
          },
          formData: {
            'userId': '6',
            'fileType':'10'   
          },
          success (res){
            // const data = res.data
            console.log(res)
            const jsonObj = JSON.parse(res.data);
            console.log(jsonObj.data.url)
            //do something
          }
        })
      })
      .catch((err) => {
        wx.showModal({
          title: '温馨提示',
          content: err.message
        })
      })
  },
  uploadTap() {
    const self = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        //  获取裁剪图片资源后，给data添加src属性及其值
        self.setData({
         cropperShow : true
        })
        self.cropper.pushOrign(src)
      }
    })
  },
  cancel(){
    this.setData({
      cropperShow : false
    })
  },
  onLoad(option) {
    const { cropperOpt } = this.data
    cropperOpt.boundStyle.color ="red"
    this.setData({ cropperOpt })
    this.cropper = new WeCropper(cropperOpt)
      .on('ready', (ctx) => {
        console.log(`wecropper is ready for work!`)
      })
      .on('beforeImageLoad', (ctx) => {
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 20000
        })
      })
      .on('imageLoad', (ctx) => {
        wx.hideToast()
      })
  },
  chooseImg(){    //选取照片上传
    const self = this;
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        wx.showLoading({
          mask:true,
          title: '上传中',
        })
        wx.uploadFile({
          url: 'https://standsbup.com/jiaguoadmin/api/jgyx/uploadFile', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'fileObj',
          header:{
            'content-type':'multipart/form-data'
          },
          formData: {
            'userId': '6',
            'fileType':'10'   
          },
          success (res){
            wx.hideLoading()
            // const data = res.data
            console.log(res.data)
            if( Object.prototype.toString.call(res.data) == '[object String]' ){
              const jsonObj = JSON.parse(res.data);
              console.log(jsonObj.data.url)
              self.setData({
                clipSrc:jsonObj.data.url
              })
            }else{
              self.setData({
                clipSrc:res.data.data.url
              })
            }
          }
        })
      }
    })
  },
  chooseVideo(e){
    wx.chooseVideo({
      sourceType: ['camera'],
      compressed:true,   //是否压缩视频文件
      maxDuration: 3,
      camera: 'back',
      success(res) {
        console.log(res)
        if(res.duration < 2.8){
          wx.showModal({
            title: '提示',
            content: '视频长度不够',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }else{
          wx.showLoading({
            mask:true,
            title: '上传中',
          })
          wx.uploadFile({
            url: 'https://standsbup.com/jiaguoadmin/api/jgyx/uploadFile', //仅为示例，非真实的接口地址
            filePath: res.tempFilePath,
            name: 'fileObj',
            header:{
              'content-type':'multipart/form-data'
            },
            formData: {
              'userId': '6',
              'fileType':'20'   
            },
            success (res){
              wx.hideLoading()
              // const data = res.data
              console.log(res.data)
              if( Object.prototype.toString.call(res.data) == '[object String]' ){
                const jsonObj = JSON.parse(res.data);
                console.log(jsonObj.data.url)
             
              }else{
               
              }
            }
          })
        }
        
        
        
       
      }
    })
  }
})

// application/x-www-form-urlencoded
// multipart/form-data