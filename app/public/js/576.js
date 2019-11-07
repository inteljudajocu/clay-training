window.modules["576"] = [function(require,module,exports){var makeString = require(578);
var defaultToWhiteSpace = require(593);
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};
}, {"578":578,"593":593}];
