/*
 * @Author: your name
 * @Date: 2020-03-11 15:24:33
 * @LastEditTime: 2020-03-11 17:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node_study\helloword\_test_\index.spec.js
 */



test('测试Helloword', () => {
    const ret = require('../index')
    
    expect(ret)
        .toBe('hello 1wored2')
})
