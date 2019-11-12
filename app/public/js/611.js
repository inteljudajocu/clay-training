window.modules["611"] = [function(require,module,exports){var trim = require(573);
var dasherize = require(583);
var cleanDiacritics = require(581);

module.exports = function slugify(str) {
  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};
}, {"573":573,"581":581,"583":583}];
