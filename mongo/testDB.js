/*
 * @Author: your name
 * @Date: 2020-03-23 16:23:42
 * @LastEditTime: 2020-03-24 14:22:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\mongo\testDB.js
 */

(async () => {
    const { MongoClient: MongoDB } = require('mongodb')

    //创建客户端
    const client = new MongoDB(
        // 'mongodb://localhost:27017',
        'mongodb://127.0.0.1:27017',
        {
            userNewUrlParser: true
        }
    )
    let ret
    //创建连接
    ret = await client.connect()

    const db = client.db('test')    //创建一个库
    const fruits = db.collection('fruits')    //创建一个集合/表

    //添加数据
    // ret = await fruits.insertOne({   //单条
    //     name:"芒果",
    //     price:22
    // })
    // console.log('插入成功',JSON.stringify(ret))
    // ret = await fruits.insertMany([     //插入多条
    //     {
    //         name:"香蕉1",
    //         price:8
    //     },
    //     {
    //         name: "香蕉2",
    //         price: 58
    //     }
    // ])
    // console.log('ret',ret)


    //查询文档
    // ret = await fruits.findOne()  //查询单挑
    // ret = await fruits.findOne({    // 条件查询单条
    //     name: "芒果",
    // })
    // ret = await fruits.find()
    // console.log('查询文档', ret)


    //更新文档
    //更新的操作符 $set
    // //ret = await fruits.updateOne(      //更新单个
    // ret = await fruits.updateMany(      //更新多个
    //     { name: "香蕉1" },
    //     { $set: { name:"芒果"}}
    // )
    // console.log('更新文档',ret)

    //删除文档
    // ret = await fruits.deleteOne({name:'香蕉1'})  //删除单个
    // ret = await fruits.deleteMany({ name: '芒果' })  //删除多个
    // console.log('ret', ret)
    
    // client.close()


})()

