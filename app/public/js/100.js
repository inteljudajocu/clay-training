window.modules["100"] = [function(require,module,exports){var List = require(61);

// https://drafts.csswg.org/css-images-4/#element-notation
// https://developer.mozilla.org/en-US/docs/Web/CSS/element
module.exports = function() {
    this.scanner.skipSC();

    var id = this.IdSelector();

    this.scanner.skipSC();

    return new List().appendData(
        id
    );
};
}, {"61":61}];