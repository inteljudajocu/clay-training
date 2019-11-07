window.modules["subheader.model"] = [function(require,module,exports){'use strict';

var sanitize = require(14);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  data.subheaderId = "".concat(data.subheaderId || data.text).trim().replace(/\s+/g, '-');
  return data;
};
}, {"14":14}];