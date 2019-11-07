window.modules["592"] = [function(require,module,exports){var makeString = require(578);

module.exports = function adjacent(str, direction) {
  str = makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};
}, {"578":578}];
