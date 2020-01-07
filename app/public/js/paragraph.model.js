window.modules["paragraph.model"] = [function(require,module,exports){'use strict';

var sanitize = require(5);

module.exports.save = function (ref, data) {
  data.text = sanitize.validateTagContent(sanitize.toSmartText(data.text || ''));
  return data;
};
}, {"5":5}];
