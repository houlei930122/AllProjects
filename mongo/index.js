/*
 * @Author: your name
 * @Date: 2020-03-24 15:52:44
 * @LastEditTime: 2020-03-24 17:11:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\mongo\index.js
 */

const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./models/db')
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))   //启动静态页面
})
app.get('/api/list', async (req, res) => {
    //分页查询
    const { page ,category,keyword} = req.query;
    //构造函数
    const condition = {}
    if (category){
        condition.category = category
    }
    if(keyword){
        condition.name = {$regex:new RegExp(keyword) }
    }
    try {
        const col = mongo.col('fruits')
        const total = await col.find(condition).count()
        const fruits = await col
            .find(condition)
            .skip((page - 1) * 10)
            .limit(10)
            .toArray()
        res.json({ ok: 1, data: { fruits, pagination: { total, page } } })
    } catch (error) {
        console.log(error)
    }
})

app.get('/api/category',async(req,res)=>{
    const col = mongo.col("fruits")
    const data = await col.distinct('category')
    res.json({ok:1,data})
})




app.listen(3000)