window.modules["572"] = [function(require,module,exports){var trim = require(573);
var decap = require(574);

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
}, {"573":573,"574":574}];
