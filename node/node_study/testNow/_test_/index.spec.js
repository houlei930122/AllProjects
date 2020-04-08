/*
 * @Author: your name
 * @Date: 2020-03-11 16:30:27
 * @LastEditTime: 2020-03-11 17:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_study\testNow\_test_\index.spec.js
 */
const fs = require('fs')
test('集成测试 测试生成代码文件', () => {
    //准备问价
    //删除测试文件夹
    fs.rmdirSync(__dirname + '/data/_test_', {
        recursive: true
    })
    const src = new (require('../index'))()
    src.genJestSource(__dirname + '/data')


})



// test('测试代码生成 ', () => {
//     const src = new (require('../index'))()
//     const ret = src.getTestSource('fun', 'class.js')
//     expect(ret)
//         .toBe(`test('TEST fun',() =>{
//             const fun = require('../class.js')
//             const ret = fun()
//             //expect(ret)
//             // .toBe('test return')
//         })`)
// })



// test('测试文件夹名生成', () => {
//     const src = new (require('../index'))()
//     const ret = src.getTestFileName('./abc/class.js')

//     console.log('getTestFileName',ret)
//     expect(ret)
//         .toBe('./abc/_test_/class.spec.js')
// })
