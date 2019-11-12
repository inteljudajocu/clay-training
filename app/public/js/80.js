window.modules["80"] = [function(require,module,exports){var List = require(53);

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
}, {"53":53}];
