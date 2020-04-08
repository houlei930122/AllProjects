/*
 * @Author: your name
 * @Date: 2020-03-24 15:16:39
 * @LastEditTime: 2020-03-24 16:17:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\mongo\initData.js
 */
const mongodb = require('./models/db')
mongodb.once('connect',async ()=>{
    const col = mongodb.col('fruits')
    await col.deleteMany()
    const data = new Array(100).fill().map((v,i)=>{
        return { name: "xxx" + i, price: i ,category:Math.random()>0.5?'蔬菜':'水果'}
    })
    //插入
    await col.insertMany(data)
    console.log('插入测试数据成功')
})