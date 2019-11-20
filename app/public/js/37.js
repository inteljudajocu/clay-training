window.modules["37"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(50),
  isLayout = require(44),
  getLayoutInstance = require(36);

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
}, {"36":36,"44":44,"50":50}];
