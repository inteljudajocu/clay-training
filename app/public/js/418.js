window.modules["418"] = [function(require,module,exports){var resolveName = require(58).property;
var handlers = {
    'font': require(421),
    'font-weight': require(420),
    'background': require(422),
    'border': require(419),
    'outline': require(419)
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
}, {"58":58,"419":419,"420":420,"421":421,"422":422}];
