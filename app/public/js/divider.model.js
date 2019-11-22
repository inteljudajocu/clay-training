window.modules["divider.model"] = [function(require,module,exports){'use strict';

var sanitize = require(1);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"1":1}];
