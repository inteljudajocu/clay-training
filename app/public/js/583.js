window.modules["583"] = [function(require,module,exports){var makeString = require(586);
var defaultToWhiteSpace = require(601);
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};
}, {"586":586,"601":601}];
