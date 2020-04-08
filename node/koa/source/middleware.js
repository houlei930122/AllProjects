/*
 * @Author: your name
 * @Date: 2020-03-16 16:49:44
 * @LastEditTime: 2020-03-23 14:16:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\middleware.js
 */

// const add = (a, b) => a + b
// const square = x => x * x
// const compose = (...[first, ...other]) => (...args) => {
//     let ret = first(...args)
//     other.forEach(fn=>{
//         ret = fn(ret)
//     })
//     return ret
// }
// const fn = compose(add, square, square)
// console.log(fn(1,2))

function compose(middies) {
    return function () {
        return deep(0)
        function deep(i) {
            let fn = middies[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function q() {
                    return deep(i + 1)
                })
            )
        }
    }
}


async function fn1(next) {
    console.log('fn1')
    await delay()
    await next()
    console.log('end fn1')
}
async function fn2(next) {
    console.log('fn2')
    await delay()
    await next()
    console.log('end fn2')
}
const fn3 = (next) => {
    console.log('fn3')
}
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}


const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()








