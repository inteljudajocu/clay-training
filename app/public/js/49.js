window.modules["49"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51);

/**
 * Return the site prefix from the URI.
 * @param  {string}  uri
 * @return {string}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return uri.split(/\/_(pages|components|lists|uris|schedule|users|layouts)/)[0];
};
}, {"51":51}];
