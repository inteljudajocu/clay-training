window.modules["135"] = [function(require,module,exports){var List = require(53);
var DISALLOW_OF_CLAUSE = false;

module.exports = {
    parse: function nth() {
        return new List().appendData(
            this.Nth(DISALLOW_OF_CLAUSE)
        );
    }
};
}, {"53":53}];
