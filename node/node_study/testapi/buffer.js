/*
 * @Author: your name
 * @Date: 2020-03-13 17:02:17
 * @LastEditTime: 2020-03-13 17:37:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_study\testapi\buffer.js
 */
// const buf1 = Buffer.alloc(10)
// console.log(buf1)

// const buf2 = Buffer.from('a')
// const buf3 = Buffer.from('b')
// const buf4 = Buffer.concat([buf2, buf3])
// console.log(buf4.toString())


const http = require('http');
const server = http.createServer((request, response) => {
    console.log('there is a request');
    response.end('a response from server');
});
server.listen(3000);

function getPrototype(params) {
    const proArr = []
    while (obj = Object.getPrototypeOf(obj)) {
        proArr.push(obj)
    }
    return proArr
}



