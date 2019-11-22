window.modules["298"] = [function(require,module,exports){var isArray = require(279),
    isKey = require(336),
    stringToPath = require(353),
    toString = require(352);

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
}, {"279":279,"336":336,"352":352,"353":353}];
