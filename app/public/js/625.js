window.modules["625"] = [function(require,module,exports){var makeString = require(578);

module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};
}, {"578":578}];
