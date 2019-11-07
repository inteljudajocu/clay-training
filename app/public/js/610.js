window.modules["610"] = [function(require,module,exports){var isBlank = require(620);
var trim = require(576);

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};
}, {"576":576,"620":620}];
