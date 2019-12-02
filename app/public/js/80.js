window.modules["80"] = [function(require,module,exports){var List = require(54);

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
}, {"54":54}];
