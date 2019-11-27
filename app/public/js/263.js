window.modules["263"] = [function(require,module,exports){var ListCache = require(245),
    stackClear = require(267),
    stackDelete = require(266),
    stackGet = require(264),
    stackHas = require(265),
    stackSet = require(268);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;
}, {"245":245,"264":264,"265":265,"266":266,"267":267,"268":268}];
