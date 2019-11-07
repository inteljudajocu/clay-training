window.modules["35"] = [function(require,module,exports){'use strict';

const isUriStringCheck = require(58);

/**
 * First test if argument passed in is a String. If true, determine if a uri points
 * to a DEFAULT instance of a component. Otherwise, throw an error.
 *
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return !!uri.match(/\/_components\/[A-Za-z0-9\-]+$/);
};
}, {"58":58}];