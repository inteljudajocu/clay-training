window.modules["646"] = [function(require,module,exports){var makeString = require(586);
var defaultToWhiteSpace = require(601);
var nativeTrimLeft = String.prototype.trimLeft;

module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};
}, {"586":586,"601":601}];
