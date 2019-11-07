window.modules["50"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(58);

/**
 * Return the site prefix from the URI.
 * @param  {string}  uri
 * @return {string}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return uri.split(/\/_(pages|components|lists|uris|schedule|users|layouts)/)[0];
};
}, {"58":58}];
