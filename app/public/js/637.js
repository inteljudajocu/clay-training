window.modules["637"] = [function(require,module,exports){var makeString = require(578);
var defaultToWhiteSpace = require(593);
var nativeTrimLeft = String.prototype.trimLeft;

module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};
}, {"578":578,"593":593}];
