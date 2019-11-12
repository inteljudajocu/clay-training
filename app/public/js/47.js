window.modules["47"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(50),
  isLayout = require(31),
  getLayoutInstance = require(49);

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
}, {"31":31,"49":49,"50":50}];
