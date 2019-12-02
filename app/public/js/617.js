window.modules["617"] = [function(require,module,exports){var isBlank = require(642);
var trim = require(583);

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};
}, {"583":583,"642":642}];
