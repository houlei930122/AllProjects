'use strict'

const { Service } = require('egg')
const nodemailer = require('nodemailer')

const userEmail = 'houl@thepaper.cn'
const transporter = nodemailer.createTransport({
  service: 'QQex',
  secureConnection: true,
  auth: {
    user: userEmail,
    pass: 'Hl88888888',
  }

})

class ToolService extends Service {
  async sendMail(email, subject, text, html) {
    const mailOptions = {
      from: userEmail,
      cc: userEmail,
      to: email,
      subject,
      text,
      html,
    }
    try {
      await transporter.sendMail(mailOptions)
      return true
    } catch (error) {
      console.log('email error', error)
      return false
    }
  }
}
module.exports = ToolService
