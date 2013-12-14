var fs = require("fs");
var path = require("path");
var url = require("url");

var jsStringEscape = require("js-string-escape");

var extensions = [".html",".htm",".txt"];

module.exports = {
	willHandle:function(filePath,settings){
		if (url.parse(filePath,false,true).host) {
			return false;
		}
		if (filePath.indexOf("@@") === 0) {
			return false;
		}
		var ext = path.extname(filePath);
		if (extensions.indexOf(ext) > -1) {
			return true;
		}
		return false;
	},
	handle:function(filePath,settings,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = '"+jsStringEscape(c.toString())+"';");
		});
	}
};