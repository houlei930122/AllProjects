/*
 * @Author: your name
 * @Date: 2020-03-09 17:01:36
 * @LastEditTime: 2020-04-07 18:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目集合\backend\project\app.js
 */

var koa = require('koa');
const Router = require('koa-router')
var app = new koa()
const router = new Router();
var db = {
    tobi: { name: 'tobi', species: 'ferret' },
    loki: { name: 'loki', species: 'ferret' },
    jane: { name: 'jane', species: 'ferret' }
};
var pets = {
    list: (ctx) => {
        var names = Object.keys(db);
        ctx.body = 'pets: ' + names.join(', ');
    },

    show: (ctx, name) => {
        var pet = db[name];
        if (!pet) return ctx.throw('cannot find that pet', 404);
        ctx.body = pet.name + ' is a ' + pet.species;
    }
};
// const mongo = require("./models/db");
// const testdata = require("./models/init");
router.get('/pets',pets.list)
router.get('/pets/:name',pets.show)

app.use(router.routes());
// app.use(async (ctx) => {
//     ctx.body = {
//         data:[{a:'asd',c:'sd'}],
//         msg:'nihao'
//     }
// })





app.listen(3000)