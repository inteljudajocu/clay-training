window.modules["401"] = [function(require,module,exports){var prepare = require(425);
var mergeAtrule = require(417);
var initialMergeRuleset = require(418);
var disjoinRuleset = require(420);
var restructShorthand = require(421);
var restructBlock = require(422);
var mergeRuleset = require(423);
var restructRuleset = require(424);

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
}, {"417":417,"418":418,"420":420,"421":421,"422":422,"423":423,"424":424,"425":425}];
