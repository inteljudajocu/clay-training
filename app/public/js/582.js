window.modules["582"] = [function(require,module,exports){var trim = require(583);
var decap = require(584);

module.exports = function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};
}, {"583":583,"584":584}];
