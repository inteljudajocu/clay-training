window.modules["393"] = [function(require,module,exports){var postcss = require(396);
var compress = require(394).compress;
var postcssToCsso = require(395);
var cssoToPostcss = require(397);

var postcssCsso = postcss.plugin('postcss-csso', function postcssCsso(options) {
    return function(root, result) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast);
    };
});

postcssCsso.process = function(css, options) {
    return postcss([postcssCsso(options)]).process(css);
};

module.exports = postcssCsso;
}, {"394":394,"395":395,"396":396,"397":397}];
