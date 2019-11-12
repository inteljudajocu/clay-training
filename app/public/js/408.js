window.modules["408"] = [function(require,module,exports){var resolveName = require(57).property;
var handlers = {
    'font': require(409),
    'font-weight': require(411),
    'background': require(412),
    'border': require(410),
    'outline': require(410)
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
}, {"57":57,"409":409,"410":410,"411":411,"412":412}];
