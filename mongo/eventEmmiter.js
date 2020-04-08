/*
 * @Author: your name
 * @Date: 2020-03-24 15:09:32
 * @LastEditTime: 2020-03-24 15:19:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\mongo\eventEmmiter.js
 */
// 测试node的events事件的使用方式
const EventEmmiter = require('events').EventEmitter;
const event = new EventEmmiter();
event.on('some_event', num => {
    console.log('some_event 事件触发：', +num)
})
let num = 0
setInterval(() => {
    event.emit('some_event', num++)
}, 1000);