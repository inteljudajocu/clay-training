window.modules["607"] = [function(require,module,exports){var isBlank = require(632);
var trim = require(573);

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};
}, {"573":573,"632":632}];
