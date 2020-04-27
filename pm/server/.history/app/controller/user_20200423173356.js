
'use strict'
const BaseController = require('./base')

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
      this.validate(createRule)
    } catch (e) {
      return this.error('参数错误', -1, e.errors)
    }
    const { email, passwd, captcha, nickname } = ctx.request.body
    console.log(email, passwd, captcha, nickname)
    this.success({ name: 'kkb' })
  }
  async verify() {
    // 验证用户是否存在

  }
  async info() {

  }
}
module.exports = UserController