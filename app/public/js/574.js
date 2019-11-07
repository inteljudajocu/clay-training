window.modules["574"] = [function(require,module,exports){var trim = require(576);
var decap = require(575);

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
}, {"575":575,"576":576}];
