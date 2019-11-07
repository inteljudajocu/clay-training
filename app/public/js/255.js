window.modules["255"] = [function(require,module,exports){var Hash = require(237),
    ListCache = require(243),
    Map = require(249);

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
}, {"237":237,"243":243,"249":249}];
