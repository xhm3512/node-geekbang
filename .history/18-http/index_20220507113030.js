const http = require('http')
http.createServer((res) => {
  res('hellow')
  res.end()
})
.listen(3000)