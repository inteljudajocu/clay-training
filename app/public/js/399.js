window.modules["399"] = [function(require,module,exports){var prepare = require(422);
var mergeAtrule = require(414);
var initialMergeRuleset = require(415);
var disjoinRuleset = require(417);
var restructShorthand = require(418);
var restructBlock = require(419);
var mergeRuleset = require(420);
var restructRuleset = require(421);

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
}, {"414":414,"415":415,"417":417,"418":418,"419":419,"420":420,"421":421,"422":422}];
