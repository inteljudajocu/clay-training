window.modules["80"] = [function(require,module,exports){var List = require(54);

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
}, {"54":54}];
