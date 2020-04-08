/*
 * @Author: your name
 * @Date: 2020-03-16 16:10:39
 * @LastEditTime: 2020-03-16 16:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\response.js
 */
module.exports = {
    get body() {
        return this._body;
    },
    set body(val) {
        this._body = val;
    }
};
