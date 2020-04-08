/*
 * @Author: your name
 * @Date: 2020-03-16 16:11:16
 * @LastEditTime: 2020-03-16 16:11:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\context.js
 */
module.exports = {
    get url() {
        return this.request.url;
    },
    get body() {
        return this.response.body;
    },
    set body(val) {
        this.response.body = val;
    },
    get method() {
        return this.request.method
    }
};


