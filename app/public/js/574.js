window.modules["574"] = [function(require,module,exports){var makeString = require(576);

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};
}, {"576":576}];
