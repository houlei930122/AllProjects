/*
 * @Author: your name
 * @Date: 2020-03-09 17:16:15
 * @LastEditTime: 2020-04-07 18:06:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\backend\project\models\db.js
 */
const conf = require("./conf")
const EventEmiter = require("events").EventEmitter;

//客户端
const MongoClient = require("mongodb").MongoClient;

class Mongodb {
    constructor(conf) {
        //保存conf
        this.conf = conf;

        this.emmiter = new EventEmiter();
        //链接
        this.client = new MongoClient(conf.url,{useNewUrlParser:true});
        this.client.connect(err=>{
            if(err) throw err;
            console.log('连接成功')
            this.emmiter.emit("connect")
        })
    }

    col(colName,dbName = conf.dbName){
        return this.client.db(dbName).collection(colName)
    }
    once(event,cb){
        this.emmiter.once(event,cb)
    }

}
module.exports = new Mongodb(conf)