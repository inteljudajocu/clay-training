window.modules["286"] = [function(require,module,exports){var getNative = require(236);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
}, {"236":236}];
