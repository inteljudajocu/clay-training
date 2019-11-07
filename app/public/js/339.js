window.modules["339"] = [function(require,module,exports){var baseSetToString = require(341),
    shortOut = require(370);

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
}, {"341":341,"370":370}];
