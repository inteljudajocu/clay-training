window.modules["32"] = [function(require,module,exports){'use strict';

const getComponentName = require(36),
  { strCheck } = require(51);

module.exports = (page, componentName) => {
  strCheck(componentName);

  if (typeof page !== 'object') {
    throw new Error(`Page argument must be an object, not ${typeof page}`);
  }

  return Object.values(page).filter(Array.isArray).reduce((acc, val) => acc.concat(val), []).find(cmpt => getComponentName(cmpt) === componentName);
};
}, {"36":36,"51":51}];
