window.modules["630"] = [function(require,module,exports){var makeString = require(586);

module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};
}, {"586":586}];
