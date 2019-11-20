window.modules["621"] = [function(require,module,exports){var makeString = require(576);

module.exports = function truncate(str, length, truncateStr) {
  str = makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};
}, {"576":576}];
