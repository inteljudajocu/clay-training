window.modules["575"] = [function(require,module,exports){var makeString = require(578);

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};
}, {"578":578}];
