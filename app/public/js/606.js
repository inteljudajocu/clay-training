window.modules["606"] = [function(require,module,exports){var trim = require(583);

module.exports = function underscored(str) {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};
}, {"583":583}];
