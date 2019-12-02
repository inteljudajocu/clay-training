window.modules["49"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51);

/**
 * First test if the argument passed in is a String. If true, get component version from uri.
 * Otherwise throw an error.
 * @example /_components/foo/instances/bar@published returns published
 * @param  {string} uri
 * @return {string|null}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  const result = /\/_components\/.+?@(.+)/.exec(uri);

  return result && result[1];
};
}, {"51":51}];
