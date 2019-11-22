window.modules["343"] = [function(require,module,exports){var baseSetToString = require(345),
    shortOut = require(374);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;
}, {"345":345,"374":374}];
