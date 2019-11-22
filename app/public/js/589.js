window.modules["589"] = [function(require,module,exports){var capitalize = require(585);
var camelize = require(582);
var makeString = require(586);

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};
}, {"582":582,"585":585,"586":586}];
