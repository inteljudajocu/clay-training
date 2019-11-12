window.modules["619"] = [function(require,module,exports){var makeString = require(576);
var slice = [].slice;

module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString(separator));
};
}, {"576":576}];
