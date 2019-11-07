window.modules["621"] = [function(require,module,exports){var makeString = require(578);
var slice = [].slice;

module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString(separator));
};
}, {"578":578}];
