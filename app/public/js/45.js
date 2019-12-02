window.modules["45"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51),
  isPage = require(32);

/**
 * First test if argument is a String. If true, test if '/_pages/:id/meta' is in the string.
 * Otherwise, throw an error.
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return isPage(uri) && !!uri.match(/\/meta$/i);
};
}, {"32":32,"51":51}];
