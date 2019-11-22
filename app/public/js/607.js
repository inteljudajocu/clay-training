window.modules["607"] = [function(require,module,exports){var makeString = require(586);

module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};
}, {"586":586}];
