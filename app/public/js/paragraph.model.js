window.modules["paragraph.model"] = [function(require,module,exports){'use strict';

var sanitize = require(2);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"2":2}];
