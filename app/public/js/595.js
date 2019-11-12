window.modules["595"] = [function(require,module,exports){var capitalize = require(575);
var underscored = require(596);
var trim = require(573);

module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};
}, {"573":573,"575":575,"596":596}];
