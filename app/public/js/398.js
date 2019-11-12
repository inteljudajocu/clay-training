window.modules["398"] = [function(require,module,exports){var walk = require(57).walkUp;
var handlers = {
    Atrule: require(401),
    AttributeSelector: require(403),
    Value: require(408),
    Dimension: require(404),
    Percentage: require(405),
    Number: require(405),
    String: require(406),
    Url: require(407),
    HexColor: require(413).compressHex,
    Identifier: require(413).compressIdent,
    Function: require(413).compressFunction
};

module.exports = function(ast) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list);
        }
    });
};
}, {"57":57,"401":401,"403":403,"404":404,"405":405,"406":406,"407":407,"408":408,"413":413}];
