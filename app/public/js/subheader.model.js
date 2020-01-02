window.modules["subheader.model"] = [function(require,module,exports){'use strict';

var sanitize = require(2);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  data.subheaderId = "".concat(data.subheaderId || data.text).trim().replace(/\s+/g, '-');
  return data;
};
}, {"2":2}];
