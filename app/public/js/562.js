window.modules["562"] = [function(require,module,exports){"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Contains helpers for working with vendor prefixes.
 *
 * @example
 * const vendor = postcss.vendor
 *
 * @namespace vendor
 */
var vendor = {
  /**
   * Returns the vendor prefix extracted from an input string.
   *
   * @param {string} prop String with or without vendor prefix.
   *
   * @return {string} vendor prefix or empty string
   *
   * @example
   * postcss.vendor.prefix('-moz-tab-size') //=> '-moz-'
   * postcss.vendor.prefix('tab-size')      //=> ''
   */
  prefix: function prefix(prop) {
    var match = prop.match(/^(-\w+-)/);

    if (match) {
      return match[0];
    }

    return '';
  },

  /**
     * Returns the input string stripped of its vendor prefix.
     *
     * @param {string} prop String with or without vendor prefix.
     *
     * @return {string} String name without vendor prefixes.
     *
     * @example
     * postcss.vendor.unprefixed('-moz-tab-size') //=> 'tab-size'
     */
  unprefixed: function unprefixed(prop) {
    return prop.replace(/^-\w+-/, '');
  }
};
var _default = vendor;
exports.default = _default;
module.exports = exports.default;

}, {}];
