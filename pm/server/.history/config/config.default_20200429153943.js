/* eslint valid-jsdoc: "off" */

'use strict'

const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587534686215_1954'

  // 打开文件上传权限
  config.multipart = {
    mode: 'file',
    limit: '50mb',
    whitelist: () => true,
  }
  // 配置全局文件存放路径
  config.UPLOAD_DIR = path.resolve(__dirname, '..', 'app/public')

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
    security: {
      csrf: {
        enable: false,
      },
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/kkbhub',
        options: {},
      },
    },
    jwt: {
      secret: '@houlasdasd!-',
    },
  }
}
