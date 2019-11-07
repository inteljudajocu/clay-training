window.modules["619"] = [function(require,module,exports){var makeString = require(578);

module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};
}, {"578":578}];
