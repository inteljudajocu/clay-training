window.modules["593"] = [function(require,module,exports){var trim = require(583);

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};
}, {"583":583}];
