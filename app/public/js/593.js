window.modules["593"] = [function(require,module,exports){var escapeRegExp = require(594);

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};
}, {"594":594}];
