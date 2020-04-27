
'use strict'
const BaseController = require('./base')
const md5 = require('md5')
const HashSalt = ':sadkjkajdkjaskd'
const createRule = {
  email: { type: 'email' },
  nickname: { type: 'string' },
  passwd: { type: 'string' },
  captcha: { type: 'string' },
}
class UserController extends BaseController {
  async login() {
    const { ctx } = this
    try {
      ctx.validate(createRule)
    } catch (error) {
      this.error('参数错误', -1, error)
    }
    const { email, passwd, captcha, nickname } = ctx.request.body
    console.log(email, passwd, captcha, nickname)
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
      const userInfo = await this.checkEmail(email)
      if (userInfo) {
        if (userInfo.nickname !== nickname) {
          this.error('用户名不对!')
        } else if (md5(passwd + HashSalt) !== userInfo.passwd) {
          this.error('密码错误!')
        } else {
          this.success('登录成功!')
        }
      } else {
        this.error('用户不存在!')
      }
    } else {
      this.error('验证码错误')
    }
  }
  async register() {
    const { ctx } = this
    try {
      // 检验参数
      ctx.validate(createRule)
    } catch (e) {
      return this.error('参数错误', -1, e.errors)
    }
    const { email, passwd, captcha, nickname } = ctx.request.body
    console.log(email, passwd, captcha, nickname)
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
      // 邮箱是否重复
      if (await this.checkEmail(email)) {
        this.error('邮箱重复了')
      } else {
        const ret = await ctx.model.User.create({
          email,
          nickname,
          passwd: md5(passwd + HashSalt),
        })
        if (ret._id) {
          this.message('注册成功')
        } else {
          this.message('失败')
        }
      }
    } else {
      this.error('验证失败')
    }
  }
  async checkEmail(email) {
    const user = await this.ctx.model.User.findOne({ email })
    return user
  }
  async verify() {
    // 验证用户是否存在

  }
  async info() {

  }
}
module.exports = UserController
