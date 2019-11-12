window.modules["618"] = [function(require,module,exports){var makeString = require(576);

module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString(str).replace(reg, replace);
};
}, {"576":576}];
