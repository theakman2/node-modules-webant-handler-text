var fs = require("fs");

var jsEscape = require("js-string-escape");

module.exports = {
	extensions:[".html",".htm",".txt"],
	handle:function(filePath,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = '"+jsEscape(c.toString())+"';");
		});
	}
};