window.modules["616"] = [function(require,module,exports){var makeString = require(576);

module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};
}, {"576":576}];
