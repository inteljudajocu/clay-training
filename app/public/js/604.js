window.modules["604"] = [function(require,module,exports){var chars = require(577);

module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};
}, {"577":577}];
