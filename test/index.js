var fs = require("fs");
var path = require("path");
var vm = require("vm");
var childProcess = require("child_process");

var shellEscape = require("shell-escape");
var webant = require("webant");

var handler = require("../lib/index.js");

function phantom(assert,done,cb) {
	var pjs = childProcess.exec(
		'phantomjs ' + shellEscape([path.join(__dirname,"headless","phantomwebant.js")]),
		{
			cwd:path.join(__dirname,"headless"),
			maxBuffer:1024*1024
		},
		function(err,stdout,stderr) {
			pjs.kill();
			if (err) {
				assert.fail("phantomjs reports an error: " + err);
				done();
				return;
			}
			if (stderr) {
				assert.fail("phantomjs reports content in stderror: " + stderr);
				done();
				return;
			}
			var out;
			try {
				out = JSON.parse(stdout.trim());
			} catch(e) {
				assert.fail("Could not JSON.parse() stdout [stdout is: " + stdout + "]");
				done();
				return;
			}
			cb(out);
		}
	);
}

var tests = {
	"test handler":function(assert,done) {
		webant({
			entry:path.join(__dirname,"headless","entry.js"),
			dest:path.join(__dirname,"headless","main.js"),
			handlers:[handler]
		},function(err){
			if (err) {
				assert.fail("Webant should not error when parsing javascript (error: " + err + ")");
				done();
				return;
			}
			phantom(assert,done,function(out){
				assert.strictEqual(
					out,
					"It's a test!!<p>foo</p><div>bar!</div>",
					"text should be compiled correctly"
				);
				done();
			});
		});
	}
};

require("test").run(tests);