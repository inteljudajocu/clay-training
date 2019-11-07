window.modules["618"] = [function(require,module,exports){var makeString = require(578);

module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};
}, {"578":578}];
