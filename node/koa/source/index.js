/*
 * @Author: your name
 * @Date: 2020-03-16 15:19:02
 * @LastEditTime: 2020-03-16 16:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\node\koa\source\index.js
 */
const KKB = require("./kkb");
const app = new KKB();
app.use(ctx => {
    ctx.body = '测试用例'
});
app.listen(3000, () => {
    console.log("监听端⼝口3000");
});

