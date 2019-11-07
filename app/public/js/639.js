window.modules["639"] = [function(require,module,exports){var makeString = require(578);
var defaultToWhiteSpace = require(593);
var nativeTrimRight = String.prototype.trimRight;

module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};
}, {"578":578,"593":593}];
