window.modules["143"] = [function(require,module,exports){var List = require(61);
var DISALLOW_OF_CLAUSE = false;

module.exports = {
    parse: function nth() {
        return new List().appendData(
            this.Nth(DISALLOW_OF_CLAUSE)
        );
    }
};
}, {"61":61}];
