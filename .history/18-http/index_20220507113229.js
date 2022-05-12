const http = require('http')
http.createServer((res) => {
  res.rawHeaders(200)
  res.end('hellow')
})
.listen(3000)