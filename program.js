var modular = require('./modular.js');
var dir = process.argv[2];
var ext = process.argv[3];

function readFile(err, list){
	list.forEach(file);
	function file(print){
		console.log(print);
	}
}

modular(dir, ext, readFile);