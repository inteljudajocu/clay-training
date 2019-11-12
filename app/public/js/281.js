window.modules["281"] = [function(require,module,exports){var getNative = require(231);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
}, {"231":231}];
