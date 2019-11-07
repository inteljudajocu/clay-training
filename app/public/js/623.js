window.modules["623"] = [function(require,module,exports){var makeString = require(578);
var toPositive = require(588);

module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};
}, {"578":578,"588":588}];
