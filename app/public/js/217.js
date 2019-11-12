window.modules["217"] = [function(require,module,exports){var htmlToText = require(208);
var wordCount = require(218);

module.exports = function (body) {
  var text = htmlToText.fromString(body, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });

  return wordCount(text);
};
}, {"208":208,"218":218}];
