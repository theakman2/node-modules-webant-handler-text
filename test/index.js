var Handler = require("../lib/index.js");
var HandlerBase = require("./lib/Handler.js");

function createHandler(Handler,settings) {
	var handlerBase = new HandlerBase(settings);
	
	Handler.prototype = handlerBase;
	Handler.prototype.constructor = Handler;
	
	return new Handler();
}

var handler = createHandler(Handler,{});

var tests = {
	"test text external url":function(assert,done) {
		handler.willHandle({
			filePath:"//google.com/bla.css?foo=bar#fgs"
		},function(err,yes){
			assert.strictEqual(err,null,"Handler should not report an error.");
			assert.strictEqual(yes,false,"Handler should report false.");
			done();
		});
	},
	"test text wrong file type":function(assert,done) {
		handler.willHandle({
			filePath:__dirname+"/path/to/javascript.js",
		},function(err,yes){
			assert.strictEqual(err,null,"Handler should not report an error.");
			assert.strictEqual(yes,false,"Handler should report false.");
			done();
		});
	},
	"test text correct file type":function(assert,done) {
		handler.handle({
			filePath:__dirname+"/data.txt",
			requireType:"function",
			raw:"./data.txt"
		},function(data){
			assert.deepEqual(
				data,
				{
					type:"internalJs",
					content:'module.exports = "It\'s a test!";'
				},
				"Handler should update with correct data."
			);
			done();
		});
	}
};

require("test").run(tests);