window.modules["405"] = [function(require,module,exports){var walk = require(58).walkUp;
var handlers = {
    Atrule: require(398),
    Rule: require(402),
    Declaration: require(400),
    TypeSelector: require(403),
    Comment: require(399),
    Operator: require(401),
    WhiteSpace: require(404)
};

module.exports = function(ast, options) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list, options);
        }
    });
};
}, {"58":58,"398":398,"399":399,"400":400,"401":401,"402":402,"403":403,"404":404}];
