window.modules["601"] = [function(require,module,exports){var escapeRegExp = require(602);

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};
}, {"602":602}];
