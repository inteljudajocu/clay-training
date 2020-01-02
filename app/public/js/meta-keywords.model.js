window.modules["meta-keywords.model"] = [function(require,module,exports){'use strict';

var _isEmpty = require(14),
    _isObject = require(12),
    _head = require(13);

module.exports.save = function (ref, data) {
  // convert array of {text: string} objects into regular array of strings
  if (!_isEmpty(data.tags) && _isObject(_head(data.tags))) {
    data.tags = data.tags.map(function (tag) {
      return tag.text;
    });
  }

  return data;
};
}, {"12":12,"13":13,"14":14}];
