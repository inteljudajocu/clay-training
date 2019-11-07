window.modules["614"] = [function(require,module,exports){var trim = require(576);
var dasherize = require(585);
var cleanDiacritics = require(583);

module.exports = function slugify(str) {
  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};
}, {"576":576,"583":583,"585":585}];
