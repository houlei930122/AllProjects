/*
 * @Author: your name
 * @Date: 2020-03-24 14:44:55
 * @LastEditTime: 2020-03-24 15:02:31
 * @LastEditors: Please set LastEditors
 * @Description: 数据库连接配置
 * @FilePath: \项目集合\mongo\models\db.js
 */
const conf = require("./conf");
const EventEmitter = require("events").EventEmitter;

//客户端
const MongoClient = require("mongodb").MongoClient;
class Mongodb{
    constructor(conf){
        this.conf = conf;
        this.emmiter = new EventEmitter();
        // 连接
        this.client = new MongoClient(conf.url, { useNewUrlParser: true });
        this.client.connect(err => {
            if (err) throw err;
            console.log("连接成功");
            this.emmiter.emit("connect");
        });
    }
    col(colName, dbName = conf.dbName){
        return this.client.db(dbName).collection(colName);
    }
    once(event, cb) {
        this.emmiter.once(event, cb);
    }
}
module.exports = new Mongodb(conf)