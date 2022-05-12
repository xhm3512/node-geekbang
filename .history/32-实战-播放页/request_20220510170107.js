const query = require('./graphal')
query('{ hello }')
  .then(res => {
  console.log(res);
})