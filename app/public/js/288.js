window.modules["288"] = [function(require,module,exports){var getNative = require(238);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
}, {"238":238}];
