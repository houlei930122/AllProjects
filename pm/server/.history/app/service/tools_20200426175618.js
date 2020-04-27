'use strict'

const { Service } = require('egg')
const nodemailer = require('nodemailer')
// 邮箱配置信息
const userEmail = 'houl@thepaper.cn'
const transporter = nodemailer.createTransport({
  service: 'QQex', // 邮箱配置http://nodemailer.com/smtp/well-known/，不同的邮箱不同的类型
  secureConnection: true,
  auth: {
    user: userEmail, // 邮箱名
    pass: 'Hl88888888', // 邮箱密码
  },

})
class ToolService extends Service {
  async sendMail(email, subject, text, html) {
    const mailOptions = {
      from: userEmail,
      cc: userEmail, // 设置了会抄送自己，可以规避邮件被作为垃圾邮件
      to: email,
      subject,
      text,
      html,
    }
    try {
      await transporter.sendMail(mailOptions)
      return true
    } catch (error) {
      return false
    }
  }
}
module.exports = ToolService
