window.modules["582"] = [function(require,module,exports){var makeString = require(576);

module.exports = function(str, substr) {
  str = makeString(str);
  substr = makeString(substr);

  if (str.length === 0 || substr.length === 0) return 0;
  
  return str.split(substr).length - 1;
};
}, {"576":576}];
