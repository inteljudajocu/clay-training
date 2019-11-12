window.modules["250"] = [function(require,module,exports){var Hash = require(232),
    ListCache = require(238),
    Map = require(244);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;
}, {"232":232,"238":238,"244":244}];
