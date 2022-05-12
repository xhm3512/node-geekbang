const http = require('http')
http.createServer((res) => {
  res.rawHeaders('hellow')
  res.end()
})
.listen(3000)