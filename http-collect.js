http = require('http')
result = ''
url = process.argv[2]

http.get(url, dataRequest)

function dataRequest(request){
	request.setEncoding('utf8')
	request.on('data', requestData)
	function requestData(data){
		result += data;
	}
	request.on('end', print)
	function print(){
		console.log(result.length)
		console.log(result)
	}
}

/* Official solution

var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
*/
