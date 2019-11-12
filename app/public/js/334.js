window.modules["334"] = [function(require,module,exports){var baseSetToString = require(336),
    shortOut = require(365);

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
}, {"336":336,"365":365}];
