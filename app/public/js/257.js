window.modules["257"] = [function(require,module,exports){var Hash = require(239),
    ListCache = require(245),
    Map = require(251);

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
}, {"239":239,"245":245,"251":251}];
