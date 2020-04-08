/*
 * @Author: your name
 * @Date: 2020-03-12 15:20:01
 * @LastEditTime: 2020-03-13 15:09:15
 * @LastEditors: Please set LastEditors
 * @Description: 异步加载
 * @FilePath: \node_study\async\serial\hello_gennerator.js
 */
// function* fun() {
//     console.log('one')
//     yield 1
//     console.log('two')
//     yield 2
//     console.log('three')
//     yield 3
// }
// const f =  fun()
// f.next()
// f.next()

// async function eventFun (params) {
    // async  asyncFun = ( name) => event =>{
    //     setTimeout(() => {
    //         logTime(name)
    //     }, 100)
    //     return event
    // }
// }

function asyncFun(name) {
    return (event)=>{
        var timeN = Math.random()*1000
        console.log(timeN)
        setTimeout(() => {
            console.log(name)
            event.emit('end')
        }, timeN)
        // return event
    }
   
}
const ary = [
    asyncFun('event 1'),
    asyncFun('event 2'),
    asyncFun('event 3')
]
const {EventEmitter} = require('events')
const event = new EventEmitter()
let i = 0;
event.on('end',() => i < ary.length && ary[i++](event))
event.emit('end')




















