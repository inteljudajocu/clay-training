window.modules["218"] = [function(require,module,exports){var htmlToText = require(209);
var wordCount = require(219);

module.exports = function (body) {
  var text = htmlToText.fromString(body, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });

  return wordCount(text);
};
}, {"209":209,"219":219}];
