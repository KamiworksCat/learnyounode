fs = require('fs')
http = require('http')
server = http.createServer(socketRequest)
locaRequest = process.argv[3]
port = process.argv[2]

server.listen(port)

function socketRequest(request, response){
	fs.createReadStream(locaRequest).pipe(response)
}

/* Official Solution
var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/