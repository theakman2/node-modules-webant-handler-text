# node-modules-webant-handler-text

_Require text and HTML files with [webant](https://github.com/theakman2/node-modules-webant)_

## Installation

There should be no need to install this module since it's required by the [webant](https://github.com/theakman2/node-modules-webant) module by default.

If for some reason you'd like to use the module outside of webant, install as follows:

    $ npm install webant-handler-text

## Usage

Ensure the `text` handler is present in your webant configuration file.

An example configuration file which uses this handler may look like this:

````json
{
    "jsEntryPath":"%%base%%/src/js/main.js",
    "jsDestPath":"%%base%%/build/main.js",
    "handlers":{
        "text":{}
    }
}
````

You may now `require` text or HTML files via the function style:

````javascript
var html = require("../path/to/some.html");
var text = require("foo.txt");
````

## Tests

    $ npm test