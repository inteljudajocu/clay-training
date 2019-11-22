window.modules["614"] = [function(require,module,exports){var chars = require(587);

module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};
}, {"587":587}];
