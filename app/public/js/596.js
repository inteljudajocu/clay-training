window.modules["596"] = [function(require,module,exports){var trim = require(573);

module.exports = function underscored(str) {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};
}, {"573":573}];
