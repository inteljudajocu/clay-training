window.modules["606"] = [function(require,module,exports){var chars = require(579);

module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};
}, {"579":579}];
