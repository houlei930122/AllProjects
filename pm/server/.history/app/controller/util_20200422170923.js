'use strict'
const svgCaptcha = require('svg-captcha')

const Controller = require('egg').Controller

class UtilController extends Controller {
  async index() {
    const captcha = svgCaptcha.create()
    console.log(captcha)
    const { ctx } = this
    ctx.body = captcha
  }
}

module.exports = UtilController
