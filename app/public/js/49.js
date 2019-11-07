window.modules["49"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(58),
  isLayout = require(53),
  getLayoutInstance = require(57);

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
}, {"53":53,"57":57,"58":58}];
