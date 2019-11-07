window.modules["87"] = [function(require,module,exports){var List = require(61);

module.exports = {
    parse: {
        prelude: function() {
            return new List().appendData(
                this.SelectorList()
            );
        },
        block: function() {
            return this.Block(true);
        }
    }
};
}, {"61":61}];
