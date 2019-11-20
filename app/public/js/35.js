window.modules["35"] = [function(require,module,exports){'use strict';

const getComponentName = require(40),
  { strCheck } = require(50);

module.exports = (page, componentName) => {
  strCheck(componentName);

  if (typeof page !== 'object') {
    throw new Error(`Page argument must be an object, not ${typeof page}`);
  }

  return Object.values(page).filter(Array.isArray).reduce((acc, val) => acc.concat(val), []).find(cmpt => getComponentName(cmpt) === componentName);
};
}, {"40":40,"50":50}];
