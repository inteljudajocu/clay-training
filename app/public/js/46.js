window.modules["46"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51),
  isLayout = require(30),
  getLayoutInstance = require(48);

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
}, {"30":30,"48":48,"51":51}];
