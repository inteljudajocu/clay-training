window.modules["291"] = [function(require,module,exports){var isArray = require(272),
    isKey = require(327),
    stringToPath = require(344),
    toString = require(343);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;
}, {"272":272,"327":327,"343":343,"344":344}];
