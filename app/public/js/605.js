window.modules["605"] = [function(require,module,exports){var capitalize = require(585);
var underscored = require(606);
var trim = require(583);

module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};
}, {"583":583,"585":585,"606":606}];
