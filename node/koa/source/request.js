/*
 * @Author: sss
 * @Date: 2020-03-16 16:10:00
 * @LastEditTime: 2020-03-16 16:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\request.js
 */
module.exports = {
    get url() {
        return this.req.url;
    },
    get method() {
        return this.req.method.toLowerCase()
    }
};
