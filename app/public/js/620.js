window.modules["620"] = [function(require,module,exports){var makeString = require(576);

module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};
}, {"576":576}];
