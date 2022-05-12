// const query = require('./graphal')

// query('{ hello }')
//   .then(res => {
//   console.log(res);
//   })

const { graphqlHTTP } = require('koa-graphql');
const app = new Koa();
// const mount = require('koa-mount');
const query = require('./schema')

app.use(
  graphqlHTTP({
    schema: MyGraphQLSchema,
    // graphiql: true,
  }),
);

app.listen(4000);