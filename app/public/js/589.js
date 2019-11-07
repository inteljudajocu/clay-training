window.modules["589"] = [function(require,module,exports){var makeString = require(578);
var escapeChars = require(590);

var regexString = '[';
for(var key in escapeChars) {
  regexString += key;
}
regexString += ']';

var regex = new RegExp( regexString, 'g');

module.exports = function escapeHTML(str) {

  return makeString(str).replace(regex, function(m) {
    return '&' + escapeChars[m] + ';';
  });
};
}, {"578":578,"590":590}];
