window.modules["288"] = [function(require,module,exports){var getNative = require(237);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
}, {"237":237}];
