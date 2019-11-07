window.modules["624"] = [function(require,module,exports){var makeString = require(578);

module.exports = function truncate(str, length, truncateStr) {
  str = makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};
}, {"578":578}];
