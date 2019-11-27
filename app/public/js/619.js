window.modules["619"] = [function(require,module,exports){var isBlank = require(626);
var trim = require(583);

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};
}, {"583":583,"626":626}];
