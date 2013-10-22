var fs = require("fs");
var path = require("path");
var url = require("url");

function Handler(settings) {
	this.extensions = [".html",".htm",".txt"];
	
	this.go = function(data,update,done) {
		update({
			type:"internalJs",
			content:"module.exports = "+this.makeString(data.content)+";"
		},done);
	};
};

module.exports = Handler;