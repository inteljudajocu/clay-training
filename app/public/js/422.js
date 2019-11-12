window.modules["422"] = [function(require,module,exports){var resolveKeyword = require(57).keyword;
var walkRules = require(57).walkRules;
var translate = require(57).translate;
var createDeclarationIndexer = require(423);
var processSelector = require(424);

function walk(node, markDeclaration, options) {
    switch (node.type) {
        case 'Rule':
            node.block.children.each(markDeclaration);
            processSelector(node, options.usage);
            break;

        case 'Atrule':
            if (node.prelude) {
                node.prelude.id = null; // pre-init property to avoid multiple hidden class for translate
                node.prelude.id = translate(node.prelude);
            }

            // compare keyframe selectors by its values
            // NOTE: still no clarification about problems with keyframes selector grouping (issue #197)
            if (resolveKeyword(node.name).name === 'keyframes') {
                node.block.avoidRulesMerge = true;  /* probably we don't need to prevent those merges for @keyframes
                                                       TODO: need to be checked */
                node.block.children.each(function(rule) {
                    rule.prelude.children.each(function(simpleselector) {
                        simpleselector.compareMarker = simpleselector.id;
                    });
                });
            }
            break;
    }
}

module.exports = function prepare(ast, options) {
    var markDeclaration = createDeclarationIndexer();

    walkRules(ast, function(node) {
        walk(node, markDeclaration, options);
    });

    return {
        declaration: markDeclaration
    };
};
}, {"57":57,"423":423,"424":424}];
