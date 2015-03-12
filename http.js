http = require('http')
url = process.argv[2]

http.get(url, dataRequest)

function dataRequest(request){
	request.setEncoding('utf8')
	request.on('data', console.log)
	request.on('error', console.error)
}