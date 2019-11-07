window.modules["599"] = [function(require,module,exports){var makeString = require(578);

module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};
}, {"578":578}];
