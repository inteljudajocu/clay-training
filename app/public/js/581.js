window.modules["581"] = [function(require,module,exports){var capitalize = require(577);
var camelize = require(574);
var makeString = require(578);

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};
}, {"574":574,"577":577,"578":578}];
