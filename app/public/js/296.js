window.modules["296"] = [function(require,module,exports){var isArray = require(273),
    isKey = require(332),
    stringToPath = require(349),
    toString = require(348);

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
}, {"273":273,"332":332,"348":348,"349":349}];
