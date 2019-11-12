window.modules["48"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(50),
  isPage = require(38);

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
}, {"38":38,"50":50}];
