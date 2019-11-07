window.modules["634"] = [function(require,module,exports){var makeString = require(578);

module.exports = function(str, callback) {
  str = makeString(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};
}, {"578":578}];
