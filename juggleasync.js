http = require('http');
urls = process.argv.slice(2);
results = [];

//initialising results array
for (i = 0; i < urls.length; i++) {
	results[i] = null;
}

/* My tried solution
for (i = 0; i < urls.length; i++) {
	(function(i){
		http.get(urls[i], dataRequest)
		function dataRequest(request){
			result = '';
			request.setEncoding('utf8');
			request.on('data', function(data){
				result += data;
			})
			request.on('end', urlRequest);
			function urlRequest(){
				results[i] = result;
				resultCount = 0;
				for (j = 0; j < results.length; j++){
					if (results[j] != null) resultCount++;
				}
				if (resultCount == result.length){
					for (j = 0; j < result.length; j++){
						console.log(results[j]);
					}
				}
			}
		}
	})
}
*/

//Solution of learnyounode
for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        result += data;
      });
      request.on("end", function() {
        results[i] = result;
        var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  })(i);
}

/*Offical Solution
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
for (var i = 0; i < 3; i++)
  httpGet(i)
*/