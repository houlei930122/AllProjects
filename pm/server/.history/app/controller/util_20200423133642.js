'use strict'
const svgCaptcha = require('svg-captcha')

const Controller = require('egg').Controller

class UtilController extends Controller {
  async index() {
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
    console.log(captcha.data)
  }
}

module.exports = UtilController
