http = require('http')
fs = require('fs')
server = http.createServer(socketRequest)
port = process.argv[2]
map = require('through2-map')

server.listen(port)

function socketRequest(request, response){
	if (request.method == 'POST'){
		request.pipe(mapping).pipe(response)
	}
}

mapping = map(Chunky)

function Chunky(chunk){
	return chunk.toString().toUpperCase()
}

/* Official Solution
var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/