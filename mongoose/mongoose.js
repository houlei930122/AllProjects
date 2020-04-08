/*
 * @Author: your name
 * @Date: 2020-03-25 14:05:15
 * @LastEditTime: 2020-03-25 15:06:55
 * @LastEditors: Please set LastEditors
 * @Description: mongoose基本使用
 * @FilePath: \项目集合\mongoose\mongoose.js
 */
const mongoose = require("mongoose")
// 1.连接
mongoose.connect("mongodb://127.0.0.1:27017/ceshi",{useNewUrlParser:true})

const conn = mongoose.connection;

conn.on('error',()=>console.log('连接数据库失败！'))
conn.once("open",async ()=>{
    // 2.定义一个Schema ---table
    const Schema1 = mongoose.Schema({
        id:Number,
        name:String,
        tel:Number
    })
    // 3.编译一个Model，它对应的数据库中复数、小写的collection
    const Model = mongoose.model("user_infos", Schema1)

    // 4.创建create返回的promise
    try {
        //插入数据
        let r = await Model.create({
            id:1,
            name:"用户1",
            tel:17851885188
        }, {
            id:2,
            name: "用户2",
            tel: 17851885188
        })
        console.log('插入数据',r)  //插入一条返回的为json,多条是数组，里面有json

        //5.查询。find返回query，它实现了then和catch,可以当promise使用
        //如果需要返回promise，调用其exec()
        // r = await Model.findOne({ name: "用户1" })    
        // r = await Model.find({ name: "用户1" })
        // console.log('查询结果',r)   //返回查到数据，findOne为json,findMany为数组

        // 6.更新 updateOne返回Query
        // r = await Model.updateOne({ name: "用户1" }, { $set: { name: "用户" } })
        // r = await Model.updateMany({ name: "用户1" }, { $set: { name: "用户" } })
        // console.log('更新结果', r)   //更新结果 { n: 6, nModified: 6, ok: 1 }

        //7.删除。deleteOne返回Query
        // r = await Model.deleteOne({name:"用户2"})
        // console.log('删除结果', r)    //删除结果 { n: 1, ok: 1, deletedCount: 1 }
    } catch (error) {
        console.log(error)
    }



})

