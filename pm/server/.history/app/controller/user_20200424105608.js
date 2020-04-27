
'use strict'
const BaseController = require('./base')
const md5 = require('md5')
const createRule = {
  email: { type: "email" },
  nickname: { type: "string" },
  passwd: { type: "string" },
  captcha: { type: "string" },
}
class UserController extends BaseController {
  async login() {

  }
  async register() {
    const { ctx } = this
    try {
      //检验参数
      ctx.validate(createRule)
    } catch (e) {
      return this.error('参数错误', -1, e.errors)
    }
    const { email, passwd, captcha, nickname } = ctx.request.body
    console.log(email, passwd, captcha, nickname)
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
      //邮箱是否重复
      if(){

      }
      this.success({ name: 'kkb' })
    } else {
      this.error('验证失败')
    }
  }
  async checkEmail(email){
    const user = await this.ctx.model.User.findOne({email})
    return user
  }


  async verify() {
    // 验证用户是否存在

  }
  async info() {

  }
}
module.exports = UserController