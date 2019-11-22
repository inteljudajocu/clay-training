window.modules["408"] = [function(require,module,exports){var walk = require(58).walkUp;
var handlers = {
    Atrule: require(411),
    AttributeSelector: require(413),
    Value: require(418),
    Dimension: require(414),
    Percentage: require(415),
    Number: require(415),
    String: require(416),
    Url: require(417),
    HexColor: require(423).compressHex,
    Identifier: require(423).compressIdent,
    Function: require(423).compressFunction
};

module.exports = function(ast) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list);
        }
    });
};
}, {"58":58,"411":411,"413":413,"414":414,"415":415,"416":416,"417":417,"418":418,"423":423}];
