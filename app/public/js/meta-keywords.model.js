window.modules["meta-keywords.model"] = [function(require,module,exports){'use strict';

var _isEmpty = require(26),
    _isObject = require(25),
    _head = require(24);

module.exports.save = function (ref, data) {
  // convert array of {text: string} objects into regular array of strings
  if (!_isEmpty(data.tags) && _isObject(_head(data.tags))) {
    data.tags = data.tags.map(function (tag) {
      return tag.text;
    });
  }

  return data;
};
}, {"24":24,"25":25,"26":26}];
