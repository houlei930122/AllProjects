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
        height: 400     //750*400
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
    placeholder2:'图片信息',
    wordsNum:'0/30'
  },

  onLoad: function (options) {
    const that = this;
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
    console.log(options)
    
    sort = options.sort;
    v = options.v;
    if(sort =='1'){
      
      if( v == '1'){
        that.setData({
          placeholder1:'1989',
          placeholder2:'上海，俯瞰陆家嘴。',
        })
      }else{
        that.setData({
          placeholder1:'1988',
          placeholder2:'我5岁。爸爸带着我，在杭州西湖三潭印月前留影。',
        })
      }
    }else if(sort =='2'){
      
      if( v == '1'){
        that.setData({
          placeholder1:'1989',
          placeholder2:'上海，俯瞰陆家嘴。',
        })
      }else{
        that.setData({
          placeholder1:'1999',
          placeholder2:'我1岁。姐姐抱着我，在河北昌黎黄金海岸合影。',
        })
      }     
    }
    wx.getStorage({
      key: 'upimg1',
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
    const upImgUrl = this.data.upImgUrl || '';
    const newyear = this.data.newyear || '';
    const newarea = this.data.newarea || '';

    const s = cutString(newarea,32);
    const str1 = newarea.substr(0,s);
    const str2 = newarea.substr(s);
    const imgMsg =newyear+'年，\n'+ str1 +'\n'+str2 ;
    const upimgJson = {
      upImgUrl:upImgUrl,
      newyear:newyear,
      newarea:newarea,
      imgMsg:imgMsg
    }
    let upimgStr = JSON.stringify(upimgJson)
    wx.setStorage({
      key:"upimg1",
      data:upimgStr
    })
    wx.redirectTo({
      url: '../upimg2/upimg2?sort='+sort+'&v='+v, 
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
          url: jiekouUrl+'/api/jgyx/uploadFile', 
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

    const upImgUrl = this.data.upImgUrl || '';
    const newyear = this.data.newyear || '';
    const newarea = this.data.newarea || '';

    const s = cutString(newarea,32);
    const str1 = newarea.substr(0,s);
    const str2 = newarea.substr(s);
    const imgMsg =newyear+'年，\n'+ str1 +'\n'+str2 ;
    const upimgJson = {
      upImgUrl:upImgUrl,
      newyear:newyear,
      newarea:newarea,
      imgMsg:imgMsg
    }
    let upimgStr = JSON.stringify(upimgJson)
    wx.setStorage({
      key:"upimg1",
      data:upimgStr
    })
    wx.redirectTo({
      url: '../upimg2/upimg2?sort='+sort+'&v='+v, 
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