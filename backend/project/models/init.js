/*
 * @Author: your name
 * @Date: 2020-04-07 17:53:28
 * @LastEditTime: 2020-04-07 17:53:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\backend\project\models\init.js
 */

const mongodb = require("./db");
const goods = require('./goods.json')
// console.log('data', data)
mongodb.once("connect", async () => {
    const col = mongodb.col("goods");
    try {
        // 删除已存在
        await col.deleteMany();
        const allData = []
        goods.tags.forEach(key => {
            goods.data[key].forEach(cor => {
                allData.push(cor)
            })
        })
        // 插入
        await col.insertMany(allData);
        console.log("插入测试数据成功");
    } catch (error) {
        console.log("插入测试数据失败");
        console.log(error);
    }
});