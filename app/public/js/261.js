window.modules["261"] = [function(require,module,exports){var ListCache = require(243),
    stackClear = require(265),
    stackDelete = require(263),
    stackGet = require(264),
    stackHas = require(262),
    stackSet = require(266);

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
}, {"243":243,"262":262,"263":263,"264":264,"265":265,"266":266}];
