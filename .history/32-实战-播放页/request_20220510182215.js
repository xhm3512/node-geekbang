// const query = require('./graphal')

// query('{ hello }')
//   .then(res => {
//   console.log(res);
//   })
const Koa = require('koa');
const { graphqlHTTP } = require('koa-graphql');
const app = new Koa();
const mount = require('koa-mount');
const query = require('./schema')

app.use(
    // 给koa-graphql传一个graphql的协议文件，就会自动帮你生成graphql-api
    mount('/api', graphqlHTTP({
      schema: require('./schema')
  }))
);
app.use(
  graphqlHTTP({
    schema: require('./schema')
})
);

app.listen(4000);
// 浏览器访问接口：http://localhost:4000/?query={comment{name}}