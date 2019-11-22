window.modules["94"] = [function(require,module,exports){var List = require(54);

// legacy IE function
// expression '(' raw ')'
module.exports = function() {
    return new List().appendData(
        this.Raw(this.scanner.currentToken, 0, 0, false, false)
    );
};
}, {"54":54}];
