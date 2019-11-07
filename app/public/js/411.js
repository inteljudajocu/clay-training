window.modules["411"] = [function(require,module,exports){var resolveName = require(65).property;
var handlers = {
    'font': require(413),
    'font-weight': require(412),
    'background': require(415),
    'border': require(414),
    'outline': require(414)
};

module.exports = function compressValue(node) {
    if (!this.declaration) {
        return;
    }

    var property = resolveName(this.declaration.property);

    if (handlers.hasOwnProperty(property.name)) {
        handlers[property.name](node);
    }
};
}, {"65":65,"412":412,"413":413,"414":414,"415":415}];
