window.modules["579"] = [function(require,module,exports){var capitalize = require(575);
var camelize = require(572);
var makeString = require(576);

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};
}, {"572":572,"575":575,"576":576}];
