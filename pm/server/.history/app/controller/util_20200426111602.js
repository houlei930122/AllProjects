'use strict'
const svgCaptcha = require('svg-captcha')

const Controller = require('egg').Controller

class UtilController extends Controller {
  async util() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 40,
      width: 100,
      height: 40,
      noise: 3,
    })
    const { ctx } = this
    ctx.session.captcha = captcha.text
    ctx.response.type = "image/svg+xml"
    ctx.body = captcha.data
    console.log(captcha.text)
  }
  async sendcode() {
    const { ctx } = this
    console.log(ctx.request.query)
    ctx.body = '成功'
  }
}

module.exports = UtilController
