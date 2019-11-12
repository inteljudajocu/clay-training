window.modules["256"] = [function(require,module,exports){var ListCache = require(238),
    stackClear = require(260),
    stackDelete = require(258),
    stackGet = require(257),
    stackHas = require(259),
    stackSet = require(261);

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
}, {"238":238,"257":257,"258":258,"259":259,"260":260,"261":261}];
