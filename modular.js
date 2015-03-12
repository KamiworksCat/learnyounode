var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	var exten = '.' + ext;
	fs.readdir(dir, fileCheck);

	function extPush(entry){
		if(path.extname(entry) === exten){
			result.push(entry);
		}
	}

	function fileCheck(err, files){
		if (err){
			callback(err, null);
		}
		else {
			result = [];
			files.forEach(extPush);
			callback(null, result);
		}
	}
}