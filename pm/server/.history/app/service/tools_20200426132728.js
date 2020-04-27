'use strict'

const { Service } = require('egg')
const { createTransport } = require('nodemailer') 

const userEmail = 'houl@thepaper.cn'
const transporter = createTransport({
  service: '126',
  secureConnection:true,
  auth:{
    user: userEmail,
    pass:'Hl88888888'
  }

})

class ToolService extends Service {
  sendMail(email,subject,text,html){

  }
}
export default ToolService
