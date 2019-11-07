window.modules["402"] = [function(require,module,exports){var walk = require(65).walkUp;
var handlers = {
    Atrule: require(404),
    AttributeSelector: require(406),
    Value: require(411),
    Dimension: require(407),
    Percentage: require(408),
    Number: require(408),
    String: require(409),
    Url: require(410),
    HexColor: require(416).compressHex,
    Identifier: require(416).compressIdent,
    Function: require(416).compressFunction
};

module.exports = function(ast) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list);
        }
    });
};
}, {"65":65,"404":404,"406":406,"407":407,"408":408,"409":409,"410":410,"411":411,"416":416}];
