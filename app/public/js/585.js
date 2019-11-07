window.modules["585"] = [function(require,module,exports){var trim = require(576);

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};
}, {"576":576}];
