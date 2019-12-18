window.modules["408"] = [function(require,module,exports){var prepare = require(432);
var mergeAtrule = require(424);
var initialMergeRuleset = require(425);
var disjoinRuleset = require(427);
var restructShorthand = require(428);
var restructBlock = require(429);
var mergeRuleset = require(430);
var restructRuleset = require(431);

module.exports = function(ast, options) {
    // prepare ast for restructing
    var indexer = prepare(ast, options);
    options.logger('prepare', ast);

    mergeAtrule(ast, options);
    options.logger('mergeAtrule', ast);

    initialMergeRuleset(ast);
    options.logger('initialMergeRuleset', ast);

    disjoinRuleset(ast);
    options.logger('disjoinRuleset', ast);

    restructShorthand(ast, indexer);
    options.logger('restructShorthand', ast);

    restructBlock(ast);
    options.logger('restructBlock', ast);

    mergeRuleset(ast);
    options.logger('mergeRuleset', ast);

    restructRuleset(ast);
    options.logger('restructRuleset', ast);
};
}, {"424":424,"425":425,"427":427,"428":428,"429":429,"430":430,"431":431,"432":432}];
