const jiekouUrl = 'https://jiaguoadmin.thepaper.cn';
import WeCropper from '../we-cropper/we-cropper.js'
const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight
var temMsg ,sort,v;
function  getTrueLength(str){//获取字符串的真实长度（字节长度）
  var len =  str.length, truelen = 0;
  for(var x =  0; x < len; x++){
       if(str.charCodeAt(x) > 128){
           truelen += 2;
      }else{
           truelen += 1;
      }
  }
  return  truelen;
}
function  cutString(str, leng){//按字节长度截取字符串，返回substr截取位置
  var len =  str.length, tlen = len, nlen = 0;
  for(var x =  0; x < len; x++){
       if(str.charCodeAt(x) > 128){
           if(nlen + 2 < leng){
               nlen += 2;
          }else{
               tlen = x;
               break;
          }
      }else{
           if(nlen + 1 < leng){
               nlen += 1;
          }else{
               tlen = x;
               break;
          }
      }
  }
  return tlen;
}
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
        y: (height - 480) / 2,
        width: 300,
        height: 400     //750*1000
      },
      boundStyle: {
        color: '#cccc',
        mask: 'rgba(0,0,0,0.8)',
        lineWidth: 1
      }
    },
    cropperShow:false,
    clipSrc:'',
    hasImg:false,
    upImgUrl: '',  
    placeholder1:'年份',
    placeholder2:'图片信息' ,
    wordsNum:'0/30'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    const that = this;
    sort = options.sort;
    v = options.v;
    if(sort =='1'){
      if( v == '1'){
        that.setData({
          placeholder1:'2019',
          placeholder2:'上海，俯瞰高楼林立的陆家嘴。',
        })
      }else{
        that.setData({
          placeholder1:'2017',
          placeholder2:'我33岁。我带着爸爸，在杭州西湖再次留影。',
        })
      }
     
    }else if(sort =='2'){
     
      if( v == '1'){
        that.setData({
          placeholder1:'2019',
          placeholder2:'上海，俯瞰高楼林立的陆家嘴。',
        })
      }else{
        that.setData({
          placeholder1:'2019',
          placeholder2:'我20岁。我（右）和姐姐在上海照相馆留影。',
        })
      }
    }
    wx.getStorage({ //获取缓存数据
      key: 'upimg2',
      success (res) { 
        const upimgJson = JSON.parse(res.data);
        if(upimgJson.upImgUrl){
          that.setData({
            hasImg:true,
          })
        }
        that.setData({
          upImgUrl:upimgJson.upImgUrl || '',
          newyear:upimgJson.newyear || '',
          newarea:upimgJson.newarea || ''
        })
      }
    })
   
  },
  tabs(){   //照片选择切换
    const upImgUrl = this.data.upImgUrl;
    const newyear = this.data.newyear;
    const newarea = this.data.newarea;
    const upimgJson = {
      upImgUrl:upImgUrl,
      newyear:newyear,
      newarea:newarea
    }
    let upimgStr = JSON.stringify(upimgJson)
    wx.setStorage({
      key:"upimg2",
      data:upimgStr
    })
    wx.redirectTo({
      url: '../upimg1/upimg1?sort='+sort+'&v='+v, 
    })
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
  getCropperImage() {
    wx.showLoading({
      mask:true,
      title: '处理中...',
    })
    const self = this ;
    this.cropper.getCropperImage()
      .then((src) => {
        console.log(src)
        wx.uploadFile({
          url: jiekouUrl+'/api/jgyx/uploadFile', //仅为示例，非真实的接口地址
          filePath: src,
          name: 'fileObj',
          header:{
            'content-type':'multipart/form-data'
          },
          formData: {
            // 'userId': '6',
            'fileType':'10'   
          },
          success (res){
            console.log(res)
            const jsonObj = JSON.parse(res.data);
            console.log(jsonObj)
            if (jsonObj.code === '1'){
              self.setData({
                upImgUrl: jsonObj.data.url,
                cropperShow: false,
                hasImg: true
              })
            }else{
              wx.showToast({
                title: '上传失败',
                icon: 'none',
                duration: 2000
              })     
            } 
            wx.hideLoading()
          },
          error(res){
            wx.hideLoading();
            wx.showToast({
              title: '上传失败',
              icon: 'none',
              duration: 2000
            })            
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
  delimg(){
    this.setData({
      hasImg:false,
      upImgUrl: '',
      noAll:true
    })
  },
  year(e){
    this.setData({
      yearData:e.detail.value
    })

  },
  age(e){
    this.setData({
      ageData:e.detail.value
    })
  },
  who(e){
    this.setData({
      whoData:e.detail.value
    })
  },
  add(e){
    this.setData({
      addData:e.detail.value
    })
  },
  newyear(e){
    this.setData({
      newyear:e.detail.value
    })
  },
  newarea(e){
    const wordsTxt = e.detail.value;
    const wNum = wordsTxt.length;
    this.setData({
      newarea:wordsTxt,
      wordsNum:wNum+'/30'
    })
  },
  nexttap(){    //下一步
    // 判断是否之前是否上传完成
    let that = this;
    wx.getStorage({ //获取缓存数据
      key: 'upimg1',
      success (res) { 
        const upimgJson = JSON.parse(res.data);
        const upImgUrl_1 = upimgJson.upImgUrl;
        const newyear_1 = upimgJson.newyear;
        const newarea_1 = upimgJson.newarea;
        const imgMsg_1 = upimgJson.imgMsg;
        
        if( upImgUrl_1 && newyear_1 && newarea_1){
                 
          const upImgUrl = that.data.upImgUrl;
          const newyear = that.data.newyear;
          const newarea = that.data.newarea;
          const msg1 = newarea;
          let s = cutString(msg1,32)
          let str1 = msg1.substr(0,s);
          let str2 = msg1.substr(s);

          let imgMsg = newyear+'年，\n'+str1 +'\n'+str2 ;
          console.log(imgMsg)
          
          let tem1_msg = {
            imgMsg:imgMsg_1,
            imgUrl:upImgUrl_1,
          }
          let tem1_1 = JSON.stringify(tem1_msg);

          let tem2_msg = {
            imgMsg:imgMsg,
            imgUrl:upImgUrl,
          }
          let tem1_2 = JSON.stringify(tem2_msg)
          if(sort =='1'){
            wx.setStorage({
              key:"tem1_1",
              data:tem1_1
            })
            wx.setStorage({
              key:"tem1_2",
              data:tem1_2
            })
            wx.navigateTo({
              url: '../site/site?sort=1',    
            })
          }else if(sort =='2'){ 
            wx.setStorage({
              key:"tem2_1",
              data:tem1_1
            })    
            wx.setStorage({
              key:"tem2_2",
              data:tem1_2
            })
            wx.navigateTo({
              url: '../chooseVideo/chooseVideo?sort=2&v='+v,    
            })
          }
        }else{
          const upImgUrl = that.data.upImgUrl;
          const newyear = that.data.newyear;
          const newarea = that.data.newarea;
          const upimgJson = {
            upImgUrl:upImgUrl,
            newyear:newyear,
            newarea:newarea
          }
          let upimgStr = JSON.stringify(upimgJson)
          wx.setStorage({
            key:"upimg2",
            data:upimgStr
          })
          wx.redirectTo({
            url: '../upimg1/upimg1?sort='+sort+'&v='+v, 
          })
        }  
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