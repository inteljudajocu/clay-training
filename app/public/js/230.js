window.modules["230"] = [function(require,module,exports){// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require(231);
module.exports = self.fetch.bind(self);
}, {"231":231}];
