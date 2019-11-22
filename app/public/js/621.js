window.modules["621"] = [function(require,module,exports){var trim = require(583);
var dasherize = require(593);
var cleanDiacritics = require(591);

module.exports = function slugify(str) {
  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};
}, {"583":583,"591":591,"593":593}];
