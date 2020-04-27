
'use strict'
const BaseController = require('./base')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const HashSalt = ':sadkjkajdkjaskd'
const createRule = {
  email: { type: 'email' },
  nickname: { type: 'string' },
  passwd: { type: 'string' },
  captcha: { type: 'string' },
}
class UserController extends BaseController {
  async login() {
    const { ctx, app } = this
    const { email, passwd, captcha, emailcode } = ctx.request.body
    if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
      return this.error('验证码错误')
    }
    if (emailcode !== ctx.session.emailcode) {
      return this.error('邮箱验证码错误')
    }
    const user = await ctx.model.User.findOne({
      email,
      passwd: md5(passwd + HashSalt)
    })
    if (!user) {
      return this.error('用户名密码错误')
    }
    // 用户的信息加密成token返回
    const token = jwt.sign({
      _id: user._id,
      email,
    }, app.config.jwt.secret, {
      expiresIn: '1h',
    })
    this.success({ token, email, nickname: user.nickname })
    // 做了具体的判断，先判断email用户是否存在，在进行判断密码是否存在.
    // const { email, passwd, captcha} = ctx.request.body
    // if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
    //   const userInfo = await this.checkEmail(email)
    //   if (userInfo) {
    //     if (md5(passwd + HashSalt) !== userInfo.passwd) {
    //       this.error('密码错误!')
    //     } else {
    //       this.success('登录成功!')
    //     }
    //   } else {
    //     this.error('用户不存在!')
    //   }
    // } else {
    //   this.error('验证码错误')
    // }


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
    const { ctx } = this
    // 获取header，解析
    // 还不知道是那个邮件，需要从token里面读取
    // 有的接口需要从token读取数据，有的不需要，建立一个中间件解析
    const { email } = ctx.state
    const user = await this.checkEmail(email)
    this.success(user)
  }
}
module.exports = UserController
