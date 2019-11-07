window.modules["223"] = [function(require,module,exports){var htmlToText = require(215);
var wordCount = require(224);

module.exports = function (body) {
  var text = htmlToText.fromString(body, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });

  return wordCount(text);
};
}, {"215":215,"224":224}];
