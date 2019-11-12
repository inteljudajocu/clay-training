window.modules["617"] = [function(require,module,exports){var makeString = require(576);

module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};
}, {"576":576}];
