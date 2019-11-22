window.modules["584"] = [function(require,module,exports){var makeString = require(586);

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};
}, {"586":586}];
