window.modules["635"] = [function(require,module,exports){var makeString = require(576);
var defaultToWhiteSpace = require(591);
var nativeTrimRight = String.prototype.trimRight;

module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};
}, {"576":576,"591":591}];
