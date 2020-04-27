'use strict'
const svgCaptcha = require('svg-captcha')

const Controller = require('egg').Controller

class UtilController extends Controller {
  async captcha() {
    const captcha = svgCaptcha.create()
    console.log(captcha);
    const { ctx } = this
    ctx.body = '图片'
  }
}

module.exports = UtilController
