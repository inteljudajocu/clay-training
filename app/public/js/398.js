window.modules["398"] = [function(require,module,exports){var walk = require(65).walkUp;
var handlers = {
    Atrule: require(391),
    Rule: require(395),
    Declaration: require(393),
    TypeSelector: require(396),
    Comment: require(392),
    Operator: require(394),
    WhiteSpace: require(397)
};

module.exports = function(ast, options) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list, options);
        }
    });
};
}, {"65":65,"391":391,"392":392,"393":393,"394":394,"395":395,"396":396,"397":397}];
