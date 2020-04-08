/*
 * @Author: your name
 * @Date: 2020-03-16 13:57:39
 * @LastEditTime: 2020-04-01 13:50:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\index.js
 */

const Koa = require('koa')
const app = new Koa();

const favicon = require('koa-favicon')  //解决每次刷新页面请求两次的问题，/favicon.ico
app.use(favicon(__dirname + '/public/favicon.ico'))

// app.use(async (ctx, next) => {
//     const start = new Date().getTime()
//     console.log(`start:${ctx.url}`)
//     await next()
//     const end = new Date().getTime()
//     console.log(`请求${ctx.url}耗时${parseInt(end - start)}ms`)
// })
app.use(async (ctx, next) => {
    console.log('use111 start')
    await next()
    console.log('use111 end')
})
app.use(async (ctx, next) => {
    console.log('use2 start')
    ctx.body = [
        {
            name: 'tom',
            age: 28
        }
    ]
    await next()
    console.log('use2 end')
})

app.use((ctx, next) => {
    console.log('use3')
})



app.listen(3000, () => {
    console.log('服务器启动。。。')
})







