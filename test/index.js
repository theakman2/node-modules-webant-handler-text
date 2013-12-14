var handler = require("../lib/index.js");

var tests = {
	"test filetypes":function(assert) {
		var data = [
		            "https://mysite.co.uk/bla.js",
		            "//cdn.google.com/path/to/assets.css",
		            "path/to/assets.htm",
		            "/abs/path/to/assets.txt",
		            "path/to/assets.html",
		            "/abs/path/to/assets.html",
		            "@@hbs/runtime",
		            "@@css/addStylesheet"
		            ];
		assert.deepEqual(
			data.map(function(fp){ return handler.willHandle(fp);}),
			[false,false,true,true,true,true,false,false],
			"Should handle the correct files."
		);
	},
	"test content":function(assert,done) {
		handler.handle(__dirname+"/data.txt",{},function(err,content){
			assert.ok(!err,"There should be no errors handling this require.");
			assert.equal(
				content,
				"module.exports = 'It\\'s a test!';",
				"Handler should return the right content."
			);
			done();
		});
	}
};

require("test").run(tests);