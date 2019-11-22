window.modules["626"] = [function(require,module,exports){var makeString = require(586);

module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};
}, {"586":586}];
