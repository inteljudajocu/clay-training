window.modules["628"] = [function(require,module,exports){var makeString = require(586);
var slice = [].slice;

module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString(separator));
};
}, {"586":586}];
