window.modules["627"] = [function(require,module,exports){var makeString = require(586);

module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};
}, {"586":586}];
