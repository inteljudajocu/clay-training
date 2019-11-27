window.modules["644"] = [function(require,module,exports){var makeString = require(586);
var toPositive = require(596);

module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};
}, {"586":586,"596":596}];
