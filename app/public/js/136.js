window.modules["136"] = [function(require,module,exports){var List = require(53);
var ALLOW_OF_CLAUSE = true;

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};
}, {"53":53}];
