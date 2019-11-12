window.modules["587"] = [function(require,module,exports){var makeString = require(576);
var escapeChars = require(588);

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
}, {"576":576,"588":588}];
