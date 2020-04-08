/*
 * @Author: your name
 * @Date: 2020-03-16 15:37:29
 * @LastEditTime: 2020-03-16 15:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\test-gettter-setter.js
 */
const kaikeba = {
    info :{
        name:'开课吧'
    },
    get name(){
        return this.info.name
    },
    set name(name){
        console.log(`设置${name}`)
        this.info.name = name
    }
}
kaikeba.name = '名字设置'
console.log(kaikeba.name)


