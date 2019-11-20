window.modules["637"] = [function(require,module,exports){var makeString = require(576);
var defaultToWhiteSpace = require(591);
var nativeTrimLeft = String.prototype.trimLeft;

module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};
}, {"576":576,"591":591}];
