window.modules["647"] = [function(require,module,exports){var makeString = require(586);
var defaultToWhiteSpace = require(601);
var nativeTrimRight = String.prototype.trimRight;

module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};
}, {"586":586,"601":601}];
