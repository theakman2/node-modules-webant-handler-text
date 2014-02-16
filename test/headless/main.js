!function(r){function o(t,e){if("function"==typeof e){var n=o(t);return e.apply(void 0,"string"==typeof t[0]?[n]:n),void 0}if("string"==typeof t){var $=r[t];if($.hasOwnProperty("__module"))return $.__module.exports;var i,u={};return $.__module=i={exports:u},$.call(void 0,o,i,u),i.exports}for(var n=[],f=0;f<t.length;f++)n.push(o(t[f]));return n}o("0")}({
"0":function(require,module,exports) {
window.__global = require("1") + require("2") + require("3");
},"1":function(require,module,exports) {
module.exports = "It's a test!!";
},"2":function(require,module,exports) {
module.exports = "<p>foo</p>";
},"3":function(require,module,exports) {
module.exports = "<div>bar!</div>";
}});