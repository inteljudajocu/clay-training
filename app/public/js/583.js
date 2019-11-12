window.modules["583"] = [function(require,module,exports){var trim = require(573);

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};
}, {"573":573}];
