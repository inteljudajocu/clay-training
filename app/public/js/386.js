window.modules["386"] = [function(require,module,exports){var postcss = require(387);
var compress = require(388).compress;
var postcssToCsso = require(390);
var cssoToPostcss = require(389);

var postcssCsso = postcss.plugin('postcss-csso', function postcssCsso(options) {
    return function(root, result) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast);
    };
});

postcssCsso.process = function(css, options) {
    return postcss([postcssCsso(options)]).process(css);
};

module.exports = postcssCsso;
}, {"387":387,"388":388,"389":389,"390":390}];
