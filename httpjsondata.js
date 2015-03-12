http = require('http')
url = require('url')
port = process.argv[2]
server = http.createServer(socketRequest)

route = {
	'/api/parsetime': timer,
	'/api/unixtime': timeGet
}

function timer(parsedUrl){
	d = new Date(parsedUrl.query.iso)
	return {
		hour: d.getHours(),
		minute: d.getMinutes(),
		second: d.getSeconds()
	}
}

function timeGet(parsedUrl){
	return {
		unixtime: (new Date(parsedUrl.query.iso)).getTime()
	}
}

server.listen(port)

function socketRequest(request, response){
	parsedUrl = url.parse(request.url, true)
	routeCheck = route[parsedUrl.pathname]
	if (routeCheck){
		response.writeHead(200, {'Content-type': 'application/json'})
		response.end(JSON.stringify(routeCheck(parsedUrl)))
	}
	else {
		response.writeHead(404)
		response.end()
	}
}

/* Official Solution
var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/