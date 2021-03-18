const app = getApp()
 
var nCounter = 0
var listener
 
Page({
  data: {
  },
 
  onLoad: function () {
  },
 
  onReady: function (res) {
    var that = this
    var camera_ctx = wx.createCameraContext() 
    listener = camera_ctx.onCameraFrame((frame) => {     
      if (nCounter == 0) {
        wx.canvasPutImageData({
          canvasId: 'mycanvas',
          x: 0,
          y: 0,
          width: frame.width,
          heihgt: frame.heihgt,
          data: new Uint8ClampedArray(frame.data),
          success(res) {
            console.log('OK')
          },
          fail(res) {
            console.log('FAIL')
          }
        })
      }
      nCounter++
      if (nCounter >= 10) {
        nCounter = 0
      }
    })
    listener.start()
  }
 
})