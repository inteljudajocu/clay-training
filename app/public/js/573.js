window.modules["573"] = [function(require,module,exports){var makeString = require(576);
var defaultToWhiteSpace = require(591);
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};
}, {"576":576,"591":591}];
