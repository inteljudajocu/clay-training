window.modules["49"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(50);

/**
 * First test if argument is a String. If true, test if '@published' is in the string.
 * Otherwise, throw an error.
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return uri.indexOf('@published') !== -1;
};
}, {"50":50}];
