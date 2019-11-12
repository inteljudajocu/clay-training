window.modules["597"] = [function(require,module,exports){var makeString = require(576);

module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};
}, {"576":576}];
