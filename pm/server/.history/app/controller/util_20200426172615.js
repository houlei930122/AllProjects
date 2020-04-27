'use strict'
const svgCaptcha = require('svg-captcha')

// const Controller = require('egg').Controller
const BaseController = require('./base')
class UtilController extends BaseController {
  async uploadfile() {
    const { ctx } = this
    console.log(ctx)
    // const file = ctx.request.files[0]
    // const { name } = ctx.request.body
   
    this.message('注册成功')
  }
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
    ctx.response.type = 'image/svg+xml'
    ctx.body = captcha.data
    console.log(captcha.text)
  }
  async sendcode() {
    const { ctx } = this
    console.log(ctx.query.email)
    const email = ctx.query.email
    const code = Math.random().toString().slice(2, 6)
    ctx.session.emailcode = code
    const subject = '验证码标题'
    const text = ''
    const html = `<h2>标题</h2><span>${code}</span>`
    const hassend = await this.service.tools.sendMail(email, subject, text, html)
    // ctx.body = '成功'
    if (hassend) {
      this.message('发送成功')
    } else {
      this.error('发送失败')
    }
  }
}

module.exports = UtilController
