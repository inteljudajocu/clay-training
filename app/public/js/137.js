window.modules["137"] = [function(require,module,exports){var List = require(54);
var ALLOW_OF_CLAUSE = true;

module.exports = {
    parse: function() {
        return new List().appendData(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};
}, {"54":54}];
