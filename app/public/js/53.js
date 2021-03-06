window.modules["53"] = [function(require,module,exports){var List = require(54);

module.exports = function createConvertors(walker) {
    var walk = walker.walk;
    var walkUp = walker.walkUp;

    return {
        fromPlainObject: function(ast) {
            walk(ast, function(node) {
                if (node.children && node.children instanceof List === false) {
                    node.children = new List().fromArray(node.children);
                }
            });

            return ast;
        },
        toPlainObject: function(ast) {
            walkUp(ast, function(node) {
                if (node.children && node.children instanceof List) {
                    node.children = node.children.toArray();
                }
            });

            return ast;
        }
    };
};
}, {"54":54}];
