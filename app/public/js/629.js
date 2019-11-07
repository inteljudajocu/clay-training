window.modules["629"] = [function(require,module,exports){var makeString = require(578);

module.exports = function strLeft(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};
}, {"578":578}];
