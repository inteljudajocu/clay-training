window.modules["597"] = [function(require,module,exports){var capitalize = require(577);
var underscored = require(598);
var trim = require(576);

module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};
}, {"576":576,"577":577,"598":598}];
