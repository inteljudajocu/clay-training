window.modules["88"] = [function(require,module,exports){var List = require(61);

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
}, {"61":61}];
