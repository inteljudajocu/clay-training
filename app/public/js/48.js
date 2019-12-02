window.modules["48"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51),
  isLayout = require(32),
  getLayoutInstance = require(50);

/**
 * First test if argument is a String. If true, test if '/_layouts/:name/instances/:id/meta' is in the string.
 * Otherwise, throw an error.
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return isLayout(uri) && !!getLayoutInstance(uri) && !!uri.match(/\/meta$/i);
};
}, {"32":32,"50":50,"51":51}];
