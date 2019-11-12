window.modules["395"] = [function(require,module,exports){var walk = require(57).walkUp;
var handlers = {
    Atrule: require(388),
    Rule: require(392),
    Declaration: require(390),
    TypeSelector: require(393),
    Comment: require(389),
    Operator: require(391),
    WhiteSpace: require(394)
};

module.exports = function(ast, options) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list, options);
        }
    });
};
}, {"57":57,"388":388,"389":389,"390":390,"391":391,"392":392,"393":393,"394":394}];
