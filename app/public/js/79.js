window.modules["79"] = [function(require,module,exports){var List = require(53);

module.exports = {
    parse: {
        prelude: function() {
            return new List().appendData(
                this.MediaQueryList()
            );
        },
        block: function() {
            return this.Block(false);
        }
    }
};
}, {"53":53}];
