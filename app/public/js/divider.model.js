window.modules["divider.model"] = [function(require,module,exports){'use strict';

var sanitize = require(14);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"14":14}];
