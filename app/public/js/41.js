window.modules["41"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(51);

/**
 * replace version in uri
 * @param  {string} uri
 * @param  {string} [version] defaults to latest
 * @return {string}
 */
module.exports = function (uri, version) {
  isUriStringCheck.strCheck(uri);

  if (version) {
    return uri.split('@')[0] + '@' + version;
  } else {
    // no version is still a kind of version
    return uri.split('@')[0];
  }
};
}, {"51":51}];
