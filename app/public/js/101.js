window.modules["101"] = [function(require,module,exports){var List = require(61);

// legacy IE function
// expression '(' raw ')'
module.exports = function() {
    return new List().appendData(
        this.Raw(this.scanner.currentToken, 0, 0, false, false)
    );
};
}, {"61":61}];
