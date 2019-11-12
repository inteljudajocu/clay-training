window.modules["383"] = [function(require,module,exports){var postcss = require(386);
var compress = require(384).compress;
var postcssToCsso = require(387);
var cssoToPostcss = require(385);

var postcssCsso = postcss.plugin('postcss-csso', function postcssCsso(options) {
    return function(root, result) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast);
    };
});

postcssCsso.process = function(css, options) {
    return postcss([postcssCsso(options)]).process(css);
};

module.exports = postcssCsso;
}, {"384":384,"385":385,"386":386,"387":387}];
