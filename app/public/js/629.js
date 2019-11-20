window.modules["629"] = [function(require,module,exports){var makeString = require(576);

module.exports = function(str, callback) {
  str = makeString(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};
}, {"576":576}];
