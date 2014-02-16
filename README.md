# node-modules-webant-handler-text

_Require text and HTML files with [webant](https://github.com/theakman2/node-modules-webant)_

## Installation

    $ npm install webant-handler-text

## Usage

Ensure the `text` handler is present in your webant configuration file. For example:

````json
{
    "entry":"src/js/main.js",
    "dest":"build/main.js",
    "handlers":["text"]
}
````

You may now `require` text or HTML files:

````javascript
var html = require("../path/to/some.html");
var moreHtml = require("path/to/more.htm");
var text = require("foo.txt");
````

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant-handler-text.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant-handler-text)

Ensure [phantomjs](http://phantomjs.org) is installed and in your PATH, then run:

    $ npm test