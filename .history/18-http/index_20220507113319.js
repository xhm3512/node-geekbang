const http = require('http')
http.createServer((res) => {
  res.writeHead(200)
  res.end('hellow')
})
.listen(3000)