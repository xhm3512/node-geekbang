const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();
// 处理静态资源
app.use(
    static(__dirname + '/source/')
);

// 路由转发到index.html
app.use(
    mount('/', async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
    })
);


app.listen(4000);
// module.exports = app;