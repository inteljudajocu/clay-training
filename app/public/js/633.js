window.modules["633"] = [function(require,module,exports){var makeString = require(576);
var toPositive = require(586);

module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};
}, {"576":576,"586":586}];
